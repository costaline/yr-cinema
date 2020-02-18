import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import T from 'prop-types';

import HomePage from './home-page';
const AuthPage = React.lazy(() => import('./auth-page'));
import { getIsUser } from '~store/app/selectors';
import * as PATH from '~routes/path';
import { withSuspense } from '~hocs/with-suspense';
import FilmInfoPage from './film-info-page';
import AddFilmPage from './add-film-page';

const Routes = ({ isUser }) => {
  return (
    <StyledMain>
      <Switch>
        <Route path={PATH.HOME} exact render={() => <HomePage />} />
        <Route path={PATH.FILMS} exact render={() => <HomePage />} />
        <Route
          path={PATH.FILMS + PATH.ADD}
          exact
          render={() => <AddFilmPage isUser={isUser} />}
        />
        <Route
          path={`${PATH.FILMS}/:filmId`}
          exact
          render={() => <FilmInfoPage />}
        />
        {isUser ? (
          <Redirect to={PATH.HOME} />
        ) : (
          <Route path={PATH.AUTH}>{withSuspense(AuthPage)}</Route>
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

Routes.propTypes = {
  isUser: T.bool.isRequired
};

const StyledMain = styled.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 50px;
`;
