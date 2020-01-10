import React from 'react';

import NavBar from '~components/navbar';
import Routes from '~routes';

import './app.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes />
    </>
  );
};

export default App;
