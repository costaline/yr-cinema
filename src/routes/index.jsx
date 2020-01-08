import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '~routes/home-page';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
