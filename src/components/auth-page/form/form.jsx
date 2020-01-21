import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="email"
        />
      </div>
      <div>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'auth' })(Form);
