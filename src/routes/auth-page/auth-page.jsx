import React from 'react';
import { compose } from 'redux';

import { withErrorBoundary } from '~hocs/with-error-boundary';

const AuthPage = () => {
  return <h1>Auth page</h1>;
};

export default compose(withErrorBoundary)(AuthPage);
