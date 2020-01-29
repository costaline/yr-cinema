import React from 'react';
import { FormName } from 'redux-form';
import { connect } from 'react-redux';

import Form from '~components/shared/form';
import { userSignUp } from '~store/auth/actions';
import { getError } from '~store/auth/selectors';

const SignUpPage = ({ fields, registration, error }) => {
  const onSubmitHandler = (data) => registration(data);

  const formProps = {
    onSubmit: onSubmitHandler,
    fields,
    form: 'signup',
    errorMessage: error
  };

  return (
    <div>
      <h1>Signup</h1>
      <FormName>{() => <Form {...formProps} />}</FormName>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: getError(state)
});

export default connect(mapStateToProps, { registration: userSignUp })(
  SignUpPage
);
