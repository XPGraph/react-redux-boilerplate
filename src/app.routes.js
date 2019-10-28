import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Login, DefaultLayout, LoginLayout } from 'scenes';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

const history = createBrowserHistory({});

const DefaultRoute = () => (
  <Router history={history}>
    <Switch>
      <Route path="/dashboard" component={wrapperDashboard} />
      <Route path="/" component={wrapperLogin} />
    </Switch>
  </Router>
);

export default DefaultRoute;

// eslint-disable-next-line react/no-multi-comp
const wrapperLogin = ({ match }) => (
  <LoginLayout>
    <Switch>
      <Route path={`${match.url}`} component={Login} />
    </Switch>
  </LoginLayout>
);

wrapperLogin.propTypes = {
  match: PropTypes.object,
};

// eslint-disable-next-line react/no-multi-comp
const wrapperDashboard = ({ match }) => (
  <DefaultLayout>
    <Switch>
      <Route path={`${match.url}`} component={() => <div>dashboard route</div>} />
    </Switch>
  </DefaultLayout>
);

wrapperDashboard.propTypes = {
  match: PropTypes.object,
};
