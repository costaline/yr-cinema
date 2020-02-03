import React from 'react';
import { FormName } from 'redux-form';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Form from '~components/shared/form';
import { userSignUp } from '~store/auth/actions';
import { getError } from '~store/auth/selectors';

const SignUpPage = ({ fields, registration, error }) => {
  const { t, i18n } = useTranslation();

  const onSubmitHandler = (data) => registration(data);

  const formProps = {
    onSubmit: onSubmitHandler,
    fields,
    form: 'signup',
    errorMessage: error,
    title: t('auth.signup.title'),
    sendButtonText: t('auth.signup.sendButtonText')
  };

  return <FormName>{() => <Form {...formProps} />}</FormName>;
};

const mapStateToProps = (state) => ({
  error: getError(state)
});

export default connect(mapStateToProps, { registration: userSignUp })(
  SignUpPage
);
