import React from "react";

import ContactInfo from './data';
import Contact from './Contact';

class Layout extends React.Component {
  addContact = (e) => {
    e.preventDefault();
    console.log("button click");
  };

  render() {
    return(
      <div id='Layout'>
        <div>
          <a  href="#"
              className='pure-button'
              onClick={this.addContact}>
              Add Contact
          </a>
          <div className='pure-g'>
            {ContactInfo.map((info) =>
              <Contact key={info.id} {...info} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
