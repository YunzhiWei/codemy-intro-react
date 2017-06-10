import "purecss/build/pure.css";

import React from "react";
import { render } from "react-dom";

import { browserHistory, Router } from 'react-router';

import { Provider } from 'mobx-react';

import routes  from "./routes";

import stores from './stores';

render(
  <Provider {...stores}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root-app')
);
