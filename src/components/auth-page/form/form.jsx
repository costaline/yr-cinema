import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormInput } from '~components/shared/form-controls/form-input';
import { required, email, minLength } from '~utils/validators';

const minLength6 = minLength(6);

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          component={FormInput}
          type="email"
          placeholder="email"
          validate={[required, email]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={FormInput}
          type="password"
          placeholder="password"
          validate={[required, minLength6]}
        />
      </div>
      {props.error && <div>data is wrong: {props.error}</div>}
      <div>
        <button>send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'auth' })(Form);
