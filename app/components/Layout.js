import React from "react";

import ContactInfo from './data';
import Contact from './Contact';

class Layout extends React.Component {
  render() {
    return(
      <div id='Layout' className='pure-g'>
        {ContactInfo.map((info) =>
          <Contact key={info.id} {...info} />
        )}
      </div>
    )
  }
}

export default Layout;
