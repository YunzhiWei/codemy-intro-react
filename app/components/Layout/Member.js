import React from 'react';
import { Link } from 'react-router';
import styles from './index.sass';

import { observer, inject } from 'mobx-react';

@inject('user') @observer
class Member extends React.Component {
  signOut = (e) => {
    e.preventDefault();

    this.props.user.destroySession();
  }

  render() {
    return(
      <ul className='pure-menu-list'>
        <li className='pure-menu-item'>{this.props.user.email}</li>
        {/* <li className='pure-menu-item'>
          <Link to='/users/sign_in' className={`pure-menu-link ${styles.links}`}>Sign Out</Link>
        </li> */}
        <li className='pure-menu-item'>
          <a href='#' className={`pure-menu-link ${styles.links}`} onClick={this.signOut}>Sign Out</a>
        </li>
      </ul>
    )
  }
}

export default Member;
