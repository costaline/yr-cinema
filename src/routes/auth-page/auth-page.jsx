import React, { useContext } from 'react';
import { compose } from 'redux';

import { withErrorBoundary } from '~hocs/with-error-boundary';
import Form from '~components/auth-page/form';
import { FirebaseContext } from '~services/api/firebase/auth';

const AuthPage = () => {
  const firebase = useContext(FirebaseContext);

  const onSubmitHandler = (data) => {
    console.log('form send: ', data);

    firebase
      .doCreateUserWithEmailAndPassword(data.email, data.password)
      .then((authUser) => {
        console.log('authUser: ', authUser);
      })
      .catch((err) => console.log('authErr: ', err));
  };

  return (
    <div>
      <h1>Auth</h1>
      <Form onSubmit={onSubmitHandler} />
    </div>
  );
};

export default compose(withErrorBoundary)(AuthPage);
