import React from 'react';
import { compose } from 'redux';
import { Route, Redirect, useRouteMatch, Switch } from 'react-router-dom';

import { withErrorBoundary } from '~hocs/with-error-boundary';
import * as PATH from '~routes/path';

import SignInPage from './signin-page';
import SignUpPage from './signup-page';

const AuthPage = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <h1>Auth</h1>
      <Switch>
        <Route path={`${path + PATH.SIGNIN}`}>
          <SignInPage />
        </Route>
        <Route path={`${path + PATH.SIGNUP}`}>
          <SignUpPage />
        </Route>
        <Redirect to={`${path + PATH.SIGNIN}`} />
      </Switch>
    </div>
  );
};

export default compose(withErrorBoundary)(AuthPage);
