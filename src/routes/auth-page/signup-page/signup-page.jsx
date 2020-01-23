import React, { useContext } from 'react';

import { FirebaseContext } from '~services/api/firebase/auth';
import Form from '~components/auth-page/form';

const SignUpPage = () => {
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
      <h1>Signup</h1>
      <Form onSubmit={onSubmitHandler} />
    </div>
  );
};

export default SignUpPage;
