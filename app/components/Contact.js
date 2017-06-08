import React from "react";

import { Link } from "react-router";

import styles from './Contact.sass'

const Contact = (props) =>
  <div className={`${styles.contact} pure-u-1-3`}>
    <h3>
      <Link to={`/contacts/${props.id}`}>
        {props.name}
      </Link>
    </h3>
    <p>{props.email}</p>
  </div>

export default Contact;
