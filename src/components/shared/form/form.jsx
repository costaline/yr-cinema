import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Input } from './controls/input';

const Form = ({ handleSubmit, fields, error, submitting }) => {
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
    <form onSubmit={handleSubmit}>
      {renderFields()}
      {error && <div>data is wrong: {error}</div>}
      <div>
        <button disabled={submitting}>send</button>
      </div>
    </form>
  );
};

export default reduxForm()(Form);
