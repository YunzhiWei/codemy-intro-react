import React from 'react';
import styles from './Layout.sass';

const Layout = (props) =>
  <div id="Layout" className={styles.layout}>
    <div className={`home-menu pure-menu pure-menu-horizontal pure-menu-fixed ${styles.mainNav}`}>
      <a href='#' className={`pure-menu-heading ${styles.heading}`}>Invoiced</a>
      <ul className='pure-menu-list'>
        <li className='pure-menu-item'>
          <a href='#' className={`pure-menu-link ${styles.links}`}>Sign In</a>
        </li>
      </ul>
    </div>
    {props.children}
  </div>

export default Layout;

/*
import classNames from 'classnames';
classNames('home-menu', 'pure-menu', 'pure-menu-horizontal', 'pure-menu-fixed', styles.mainNav)
*/
