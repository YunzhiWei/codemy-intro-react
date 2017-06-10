import React from 'react';
import styles from './New.sass';

class New extends React.Component {
  render () {
    return (
      <div className={`${styles.signInForm}`}>
        <form className='pure-form pure-form-stacked'>
          <label>Email</label><input type='email' placeholder='email' className='pure-input-1' />
          <label>Password</label><input type='password' placeholder='password' className='pure-input-1' />
          <button className={`pure-button pure-input-1 ${styles.signInButton}`}>Sign In</button>
        </form>
      </div>
    )
  }
}

export default New;
