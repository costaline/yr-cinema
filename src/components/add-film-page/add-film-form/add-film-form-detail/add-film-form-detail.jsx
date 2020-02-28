import React from 'react';
import { Field } from 'redux-form';
import { Input } from '~components/shared/form/controls/input';
import { Textarea } from '~components/shared/form/controls/textarea';

export const AddFilmFormDetail = () => {
  return (
    <fieldset>
      <legend>film detail</legend>

      <Field name={'name'} component={Input} />
      <Field name={'year'} component={Input} />
      <Field name={'slogan'} component={Input} />
      <Field name={'country'} component={Input} />
      <Field name={'description'} component={Textarea} />
    </fieldset>
  );
};

export default AddFilmFormDetail;
