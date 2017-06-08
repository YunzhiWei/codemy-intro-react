import React from "react";

import { Link } from "react-router";

import styles from './Contact.sass'

import { observer } from 'mobx-react';

@observer(['contacts'])
class Contact extends React.Component {
  removeContact = (e) => {
    e.preventDefault();

    this.props.contacts.remove(this.props.id);
  }

  render() {
    return (
      <div className={`${styles.contact} pure-u-1-3`}>
        <h3>
          <Link to={`/contacts/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h3>
        <p>{this.props.email}</p>
        <a href='#'
          className={`${styles.removeButton} pure-button`}
          onClick={this.removeContact}>
          Remove
        </a>
      </div>
    );
  }
}

export default Contact;
