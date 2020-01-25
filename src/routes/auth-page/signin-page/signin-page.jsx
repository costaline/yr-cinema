import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormName } from 'redux-form';

import { FirebaseContext } from '~services/api/firebase/auth';
import Form from '~components/shared/form';
import * as PATH from '~routes/path';

const SignInPage = ({ fields }) => {
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
    form: 'signin'
  };

  return (
    <div>
      <h1>Signin</h1>
      <FormName>{() => <Form {...formProps} />}</FormName>
      <p>
        New user? <Link to={`${PATH.AUTH + PATH.SIGNUP}`}>Registration</Link>{' '}
        awaits you.
      </p>
    </div>
  );
};

export default SignInPage;
