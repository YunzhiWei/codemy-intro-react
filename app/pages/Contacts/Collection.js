import React from "react";
import { observer } from 'mobx-react';

import Spinner from 'components/Spinner';

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
    console.log('addContact +');
    e.preventDefault();

    this.props.contacts.add({
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value
    });

    this.refs.first_name.value = null;
    this.refs.last_name.value = null;
    this.refs.email.value = null;

    console.log('addContact -');
  };

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className="pure-form" onSubmit={this.addContact}>
          <fieldset>
            <legend>New contact</legend>
            <input ref='email' type="email" className='pure-u-1-3' placeholder="Email@domain.com" />
            <input ref='first_name' type="Text"  className='pure-u-1-4' placeholder="First Name" />
            <input ref='last_name' type="Text"  className='pure-u-1-4' placeholder="Last_Name" />
            <button type="submit" className="pure-button pure-button-primary">Add</button>
          </fieldset>
        </form>
      </div>
    </div>

  render() {
    const { all, isLoading } = this.props.contacts;

    if (isLoading) { return <Spinner />; }

    return(
      <div id='Collection' className={styles.main}>
        {this.newContact()}
        <div>
          <div className='pure-g'>
            {all.map((info) =>
              <Contact key={info.id} {...info} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Collection;
