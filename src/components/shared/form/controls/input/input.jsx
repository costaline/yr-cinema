import React from 'react';

export const Input = ({ input, meta, ...otherProps }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <label>
        <small>{input.name}</small>
        <br />
        <input {...input} {...otherProps} />
      </label>
      {hasError && (
        <p>
          <small>{meta.error}</small>
        </p>
      )}
    </div>
  );
};
