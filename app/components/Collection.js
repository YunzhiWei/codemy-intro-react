import React from "react";
import { observer } from 'mobx-react';

import Contact from './Contact';

import styles from './Collection.sass'

@observer(['contacts'])
class Collection extends React.Component {
  componentWillMount() {
    console.log("will mount +")
    this.props.contacts.fetchAll();
    // console.log("props.contacts: ", this.props.contacts.all);
    console.log("will mount -")
  }
  addContact = (e) => {
    e.preventDefault();

    this.props.contacts.add({
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value
    });

    this.refs.first_name.value = null;
    this.refs.last_name.value = null;
    this.refs.email.value = null;

    console.log("button click");
  };

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className="pure-form" onSubmit={this.addContact}>
          <fieldset>
            <legend>New contact</legend>
            <input ref='email' type="email" placeholder="Email@domain.com" />
            <input ref='first_name' type="Text" placeholder="First Name" />
            <input ref='last_name' type="Text" placeholder="Last_Name" />
            <button type="submit" className="pure-button pure-button-primary">Add Contact</button>
          </fieldset>
        </form>
      </div>
    </div>

  render() {
    return(
      <div id='Collection' className={styles.main}>
        {this.newContact()}
        <div>
          <div className='pure-g'>
            {this.props.contacts.all.map((info) =>
              <Contact key={info.id} {...info} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Collection;
