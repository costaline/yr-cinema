import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HomePage from './home-page';
import AuthPage from './auth-page';
import { getIsUser } from '~store/app/selectors';
import * as PATH from '~routes/path';

const Routes = ({ isUser }) => {
  return (
    <StyledMain>
      <Switch>
        <Route path={PATH.HOME} exact render={() => <HomePage />} />
        <Route path={PATH.FILMS} render={() => <HomePage />} />
        {isUser ? (
          <Redirect to={PATH.HOME} />
        ) : (
          <Route path={PATH.AUTH}>
            <AuthPage />
          </Route>
        )}
        <Redirect to={PATH.HOME} />
      </Switch>
    </StyledMain>
  );
};

const mapStateToProps = (state) => {
  return {
    isUser: getIsUser(state)
  };
};

export default connect(mapStateToProps)(Routes);

const StyledMain = styled.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 50px;
`;
