import React from "react";

import data from './data';
import Contact from './Contact';

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
