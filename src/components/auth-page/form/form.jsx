import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormInput } from '~components/shared/form-controls/form-input';

const Form = ({ handleSubmit, fields, error, submitting }) => {
  const renderFields = () => {
    return fields.map((field) => {
      const { component = FormInput, ...otherProps } = field;
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
