import React from "react";

const data = [
  {
    name: 'Chris Wei',
    email: 'yunzhi.wei@live.com'
  },
  {
    name: 'Clare Huang',
    email: 'wulang@hotmail.com'
  },
  {
    name: 'Jolin Wei',
    email: 'jollin@qq.com'
  },
];

const Contact = (props) =>
  <div className='pure-u-1-3'>
    <h3>{props.name}</h3>
    <p>{props.email}</p>
  </div>


class Layout extends React.Component {
  render() {
    return(
      <div id='Layout' className='pure-g'>
        {data.map((info) =>
          <Contact {...info} />
        )}
      </div>
    )
  }
}

export default Layout;
