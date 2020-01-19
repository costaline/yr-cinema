import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from '~routes/home-page';

const Routes = () => {
  return (
    <StyledMain>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </StyledMain>
  );
};

export default Routes;

const StyledMain = styled.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 50px;
`;
