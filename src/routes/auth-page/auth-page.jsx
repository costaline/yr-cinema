import React from 'react';
import { compose } from 'redux';
import { Route, Redirect, useRouteMatch, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { withErrorBoundary } from '~hocs/with-error-boundary';
import * as PATH from '~routes/path';
import SignInPage from './signin-page';
import SignUpPage from './signup-page';
import { email, minLength, required } from '~utils/validators';

const AuthPage = () => {
  const { path } = useRouteMatch();

  const fields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'email',
      validate: [required, email]
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
      validate: [required, minLength(6)]
    }
  ];

  return (
    <SAuth>
      <Switch>
        <Route path={`${path + PATH.SIGNIN}`}>
          <SignInPage fields={fields} />
        </Route>
        <Route path={`${path + PATH.SIGNUP}`}>
          <SignUpPage fields={fields} />
        </Route>
        <Redirect to={`${path + PATH.SIGNIN}`} />
      </Switch>
    </SAuth>
  );
};

export default compose(withErrorBoundary)(AuthPage);

const SAuth = styled.div`
  padding-top: 50px;
`;
