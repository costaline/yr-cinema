import React from 'react';

export const FormInput = ({ input, meta, ...otherProps }) => {
  const hasError = meta.touched && meta.error;

  console.log('meta: ', meta);

  return (
    <div>
      <label>
        <input {...input} {...otherProps} />
        <small>{input.name}</small>
      </label>
      {hasError && (
        <p>
          <small>{meta.error}</small>
        </p>
      )}
    </div>
  );
};
