import React, { useContext } from 'react';
import { FormName } from 'redux-form';

import { FirebaseContext } from '~services/api/firebase/auth';
import Form from '~components/shared/form';

const SignUpPage = ({ fields }) => {
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

  const formProps = {
    onSubmit: onSubmitHandler,
    fields,
    form: 'signup'
  };

  return (
    <div>
      <h1>Signup</h1>
      <FormName>{() => <Form {...formProps} />}</FormName>
    </div>
  );
};

export default SignUpPage;
