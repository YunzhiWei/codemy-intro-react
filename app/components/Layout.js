import React from "react";

import ContactInfo from './data';
import Contact from './Contact';

class Layout extends React.Component {
  componentWillMount() {
    this.setState({
      contacts: ContactInfo
    })
  }
  addContact = (e) => {
    e.preventDefault();

    const contacts = this.state.contacts;
    const newID = contacts.length + 1;

    this.setState({
      contacts: contacts.concat({
        id: newID,
        name: `mecode ${newID}`,
        email: `code ${newID} @code.com`
      })
    })

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
            {this.state.contacts.map((info) =>
              <Contact key={info.id} {...info} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
