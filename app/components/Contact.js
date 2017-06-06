import React from "react";

const Contact = (props) =>
  <div className='pure-u-1-3'>
    <h3>{props.name}</h3>
    <p>{props.email}</p>
  </div>

export default Contact;
