import React from 'react';

import styles from './index.sass';
import spinner from './three-dots.svg';

const Spinner = props =>
  <div className={styles.spinner}>
    <img src={spinner}></img>
  </div>

export default Spinner;
