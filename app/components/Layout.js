import React from "react";

import ContactInfo from './data';
import Contact from './Contact';

import './Layout.css'

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

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className="pure-form">
          <fieldset>
            <legend>New contact</legend>
            <input type="email" placeholder="Email@domain.com" />
            <input type="Text" placeholder="Name" />
            <button type="submit" className="pure-button pure-button-primary">Sign in</button>
          </fieldset>
        </form>
      </div>
    </div>


  render() {
    return(
      <div id='Layout'>
        {this.newContact()}
        <div>
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
