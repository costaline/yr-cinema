import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Input } from './controls/input';

import styles from './form.module.scss';

const Form = (props) => {
  const {
    handleSubmit,
    fields,
    errorMessage,
    submitting,
    title,
    children
  } = props;

  const renderFields = () => {
    return fields.map((field) => {
      const { component = Input, ...otherProps } = field;
      const fieldProps = {
        component,
        ...otherProps
      };

      return <Field key={otherProps.name} {...fieldProps} />;
    });
  };

  return (
    <div className={styles.form}>
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        {errorMessage && <div>data is wrong: {errorMessage}</div>}
        <div>
          <button disabled={submitting}>send</button>
        </div>
      </form>
      {children}
    </div>
  );
};

export default reduxForm()(Form);
