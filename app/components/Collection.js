import React from "react";
import { observer } from 'mobx-react';

import Contact from './Contact';

import styles from './Collection.sass'

@observer(['contacts'])
class Collection extends React.Component {
  componentWillMount() {
    console.log("props.contacts: ", this.props.contacts.all);
    console.log("props.contacts: ", this.props.contacts.all.slice());
  }
  addContact = (e) => {
    e.preventDefault();

    const contacts = this.props.contacts.all.slice();
    const newID = contacts.length + 1;

    this.props.contacts.add({
      id: newID,
      name: this.refs.name.value,
      email: this.refs.email.value
    });

    this.refs.name.value = null;
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
            <input ref='name' type="Text" placeholder="Name" />
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
            {this.props.contacts.all.slice().map((info) =>
              <Contact key={info.id} {...info} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Collection;
