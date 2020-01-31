import React from 'react';
import { Link } from 'react-router-dom';
import { FormName } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '~components/shared/form';
import * as PATH from '~routes/path';
import { userSignIn } from '~store/auth/actions';
import { getError } from '~store/auth/selectors';

const SignInPage = ({ fields, login, error }) => {
  const onSubmitHandler = (data) => login(data);

  const formProps = {
    onSubmit: onSubmitHandler,
    fields,
    form: 'signin',
    errorMessage: error,
    title: 'Signin'
  };

  return (
    <FormName>
      {() => (
        <Form {...formProps}>
          <small>
            New user? <Link to={PATH.AUTH + PATH.SIGNUP}>Registration</Link>{' '}
            awaits you.
          </small>
        </Form>
      )}
    </FormName>
  );
};

const mapStateToProps = (state) => ({
  error: getError(state)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login: userSignIn }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
