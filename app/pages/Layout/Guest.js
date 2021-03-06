import React from 'react';
import { Link } from 'react-router';
import styles from './index.sass';

const Guest = () =>
  <ul className='pure-menu-list'>
    <li className='pure-menu-item'>
      <Link to='/users/sign_in' className={`pure-menu-link ${styles.links}`}>Sign In</Link>
    </li>
  </ul>

export default Guest;
