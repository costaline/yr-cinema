import React from 'react';

import { FilmsList } from '~components/home-page/films-list';
import { withErrorBoundary } from '~hocs/with-error-boundary';

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <FilmsList />
    </>
  );
};

export default withErrorBoundary(HomePage);
