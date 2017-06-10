import React from 'react';
import { observer, inject } from 'mobx-react';

import { Link } from 'react-router';

import styles from './index.sass';

import Guest from './Guest';
import Member from './Member';

@inject('user') @observer
class Application extends React.Component {
  guestOrMember() {
    const { user } = this.props;

    if (user.signedIn) {
      return(<Member />);
    }
    else {
      return(<Guest />);
    }
  }

  render() {
    return(
      <div id="Layout" className={styles.layout}>
        <div className={`home-menu pure-menu pure-menu-horizontal pure-menu-fixed ${styles.mainNav}`}>
          <Link to='/' className={`pure-menu-heading ${styles.heading}`}>Invoiced</Link>
          { this.guestOrMember() }
        </div>

        {this.props.children}
      </div>
    )
  }
}

export default { Application };

/*
import classNames from 'classnames';
classNames('home-menu', 'pure-menu', 'pure-menu-horizontal', 'pure-menu-fixed', styles.mainNav)
*/
