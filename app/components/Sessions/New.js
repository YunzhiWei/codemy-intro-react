import React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './New.sass';

@inject('user') @observer
class New extends React.Component {
  onSubmitForm = (e) => {
    e.preventDefault();

    const { user } = this.props;

    user.signIn(
      this.email.value,
      this.password.value
    );
  }

  render () {
    return (
      <div className={`${styles.signInWrapper}`}>
        <div>
          <form className='pure-form pure-form-stacked' onSubmit={this.onSubmitForm}>
            <label>Email</label><input type='email' ref={node => { this.email = node; }} placeholder='email' className='pure-input-1' />
            <label>Password</label><input type='password' ref={node => { this.password = node; }} placeholder='password' className='pure-input-1' />
            <button className={`pure-button pure-input-1 ${styles.signInButton}`}>Sign In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default New;
