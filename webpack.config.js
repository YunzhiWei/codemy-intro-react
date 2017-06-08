// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  resolve: {
    modules: ['node_modules', 'lib', 'app', 'vendor']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
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
              localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./vendor', './app']
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy'
          ]
        }
      }
    ]
  },
  sassLoader: {
    includePaths: ['./vendor']
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: '[name].css',
    //   disable: false,
    //   allChunks: true
    // })
  ]
};
