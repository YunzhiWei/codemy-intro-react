import React from 'react';
import styles from './index.sass';

import { Link } from 'react-router';

class Layout extends React.Component {
  render() {
    return(
      <div id="Layout" className={styles.layout}>
        <div className={`home-menu pure-menu pure-menu-horizontal pure-menu-fixed ${styles.mainNav}`}>
          <Link to='/' className={`pure-menu-heading ${styles.heading}`}>Invoiced</Link>
          <ul className='pure-menu-list'>
            <li className='pure-menu-item'>
              <Link to='/users/sign_in' className={`pure-menu-link ${styles.links}`}>Sign In</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;

/*
import classNames from 'classnames';
classNames('home-menu', 'pure-menu', 'pure-menu-horizontal', 'pure-menu-fixed', styles.mainNav)
*/
