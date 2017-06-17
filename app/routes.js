import React from "react";

import { Route, Redirect, IndexRoute } from 'react-router';

// import c from "./components";
import p from "./pages";

const routes =
  <Route>
    <Redirect from='/' to='/contacts' />
    <Route path='users'>
      <Route path='sign_in' component={p.Sessions.New} />
      <Route path='sign_up' component={p.Users.New} />
    </Route>
    <Route component={p.Layout.Application}>
      <Route path='contacts'>
        <IndexRoute component={p.Contacts.Collection} />
        <Route path=':contactId' component={p.Contacts.Show} />
      </Route>
    </Route>
  </Route>;

export default routes;
