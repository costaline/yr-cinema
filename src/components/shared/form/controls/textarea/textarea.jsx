import React from 'react';
import styled from 'styled-components';

export const Textarea = ({ input, meta, ...otherProps }) => {
  const hasError = meta.touched && meta.error;

  return (
    <SControl>
      <label>
        <SLabelText>
          <small>{input.name}</small>
          {hasError && <SError>{meta.error}</SError>}
        </SLabelText>
        <STextarea hasError={hasError} {...input} {...otherProps} />
      </label>
    </SControl>
  );
};

const SControl = styled.div`
  margin: 10px 5px;
`;

const SLabelText = styled.p`
  display: flex;
  justify-content: space-between;
`;

const STextarea = styled.textarea`
  width: 100%;
  padding: 5px;

  border: 2px solid;
  border-color: ${({ hasError }) => (hasError ? 'red' : 'lightblue')};
  border-radius: 5px;
`;

const SError = styled.small`
  color: red;
`;
