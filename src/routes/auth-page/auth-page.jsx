import React from 'react';
import { compose } from 'redux';

import { withErrorBoundary } from '~hocs/with-error-boundary';
import Form from '~components/auth-page/form';

const AuthPage = () => {
  const onSubmitHandler = (data) => {
    console.log('form send: ', data);
  };

  return (
    <div>
      <h1>Auth</h1>
      <Form onSubmit={onSubmitHandler} />
    </div>
  );
};

export default compose(withErrorBoundary)(AuthPage);
