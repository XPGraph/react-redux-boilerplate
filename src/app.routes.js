
import React from 'react';
import {Route, Router, Switch} from 'react-router';
import { Login, DefaultLayout, LoginLayout } from 'scenes';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({});

export default () => (
  <Router history={history}>
    <Switch>
      <Route path='/dashboard' component={wrapperDashboard}/>
      <Route path='/' component={wrapperLogin}/>
    </Switch>
  </Router>
);

const wrapperLogin = ({match}) => (
  <LoginLayout>
    <Switch>
      <Route path={`${match.url}`} component={Login}/>
    </Switch>
  </LoginLayout>
);

const wrapperDashboard = ({match}) => (
  <DefaultLayout>
    <Switch>
      <Route path={`${match.url}`} component={() => <div>dashboard route</div>}/>
    </Switch>
  </DefaultLayout>
);
