import "purecss/build/pure.css";

import React from "react";
import { render } from "react-dom";

import { browserHistory, Router } from 'react-router';
import routes  from "./routes";

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root-app')
);
