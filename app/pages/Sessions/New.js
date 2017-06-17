import React from 'react';
import { observer, inject } from 'mobx-react';

import { Link } from "react-router";

import page from 'components/page';

import button from 'styles/button.sass';

@inject('user') @observer
class New extends React.Component {
  onSubmitForm = (e) => {
    console.log("onSubmitForm +");

    e.preventDefault();

    const { user } = this.props;

    user.signIn(
      this.email.value,
      this.password.value
    );

    console.log("onSubmitForm -");
  }

  render () {
    const extras = <Link to='/users/sign_up'>Don't have an account</Link>;
    return (
      <page.Auth extras={extras} title={"Sign In"}>
        <form className='pure-form pure-form-stacked' onSubmit={this.onSubmitForm}>
          <label>Email</label><input type='email' ref={node => { this.email = node; }} placeholder='email' className='pure-input-1' />
          <label>Password</label><input type='password' ref={node => { this.password = node; }} placeholder='password' className='pure-input-1' />
          <button className={`pure-button pure-input-1 ${button.signInButton}`}>Sign In</button>
        </form>
      </page.Auth>
    )
  }
}

export default New;
