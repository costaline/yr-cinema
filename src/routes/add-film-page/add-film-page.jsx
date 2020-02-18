import React from 'react';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import T from 'prop-types';

import * as PATH from '~routes/path';
import { withErrorBoundary } from '~hocs/with-error-boundary';

export const AddFilmPage = ({ isUser }) => {
  if (!isUser) {
    return <Redirect to={PATH.HOME} />;
  }

  return <h2>AddFilm</h2>;
};

AddFilmPage.propTypes = {
  isUser: T.bool
};

export default compose(withErrorBoundary)(AddFilmPage);
