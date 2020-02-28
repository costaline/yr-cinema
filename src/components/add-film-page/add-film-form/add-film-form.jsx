import React from 'react';
import { reduxForm } from 'redux-form';
import T from 'prop-types';

import AddFilmFormPoster from './add-film-form-poster';
import AddFilmFormDetail from './add-film-form-detail';

export const AddFilmForm = (props) => {
  const { posterLink, onAddFile, onRemoveFile } = props;
  const { handleSubmit } = props;

  const addFilmFormPosterProps = { posterLink, onAddFile, onRemoveFile };
  const addFilmFormDetailProps = {};

  return (
    <form onSubmit={handleSubmit}>
      <AddFilmFormPoster {...addFilmFormPosterProps} />
      <AddFilmFormDetail {...addFilmFormDetailProps} />
      <button type="submit">Send</button>
    </form>
  );
};

AddFilmForm.propTypes = {
  posterLink: T.string,
  onAddFile: T.func,
  onRemoveFile: T.func,
  handleSubmit: T.func
};

export default reduxForm({ form: 'add-film' })(AddFilmForm);
