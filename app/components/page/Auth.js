import React from 'react';
import { Link } from "react-router";

import styles from './Auth.sass';

class Auth extends React.PureComponent {
  render () {
    return (
      <div className={`${styles.authPageWrapper}`}>
        <div className={`${styles.title}`}>
          <h1>Invoice</h1>
        </div>
        <div className={`${styles.formWrapper}`}>
          {this.props.children}
        </div>
        <div className={styles.extras}>
          <Link to='/users/sign_up'>Don't have an account</Link>
        </div>
      </div>
    )
  }
}

export default Auth;
