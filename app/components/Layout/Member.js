import React from 'react';
import { Link } from 'react-router';
import styles from './index.sass';

import { observer, inject } from 'mobx-react';

@inject('user') @observer
class Member extends React.Component {
  render() {
    return(
      <ul className='pure-menu-list'>
        <li className='pure-menu-item'>
          <Link to='/users/sign_in' className={`pure-menu-link ${styles.links}`}>Sign Out</Link>
        </li>
      </ul>
    )
  }
}

export default Member;
