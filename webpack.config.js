const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
/*
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  resolve: {
    modules: ['node_modules', 'lib', 'app', 'vendor']
  },
*/
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importloaders: 1,
              localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./vendor']
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react'],
            plugins: [
              'transform-runtime',
              require('babel-plugin-transform-object-rest-spread')
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
  ]
};
