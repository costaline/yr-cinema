import React from 'react';
import { Link } from 'react-router-dom';
import { FormName } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

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
          <SMessage>
            New user? <Link to={PATH.AUTH + PATH.SIGNUP}>Registration</Link>{' '}
            awaits you.
          </SMessage>
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

const SMessage = styled.small`
  display: block;

  text-align: center;

  & a {
    text-decoration: none;
    font-weight: bold;
    color: cornflowerblue;

    &:hover {
      font-style: italic;
    }
  }
`;
