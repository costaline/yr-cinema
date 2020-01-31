import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from '~components/navbar';
import Routes from '~routes';
import { getIsInitialized } from '~store/app/selectors';
import { initializedUser } from '~store/app/actions';
import { Loader } from '~components/shared/loader';
import styled from 'styled-components';

import './app.scss';

const App = ({ isInitialized, initializeApp }) => {
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  if (!isInitialized) {
    return (
      <StyledInitial>
        <Loader />
      </StyledInitial>
    );
  }

  return (
    <>
      <NavBar />
      <Routes />
    </>
  );
};

const mapStateToProps = (state) => ({
  isInitialized: getIsInitialized(state)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ initializeApp: initializedUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

const StyledInitial = styled.div`
  height: 100vh;
`;
