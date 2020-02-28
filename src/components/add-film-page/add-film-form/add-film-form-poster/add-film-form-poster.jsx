import React from 'react';
import T from 'prop-types';

export const AddFilmFormPoster = (props) => {
  const { posterLink, onAddFile, onRemoveFile } = props;

  const poster = (
    <p>
      {posterLink ? (
        <img src={posterLink} alt="film poster" />
      ) : (
        <span>no poster yet</span>
      )}
    </p>
  );

  return (
    <fieldset>
      <legend>poster</legend>
      {poster}
      <label className={'visually-hidden'} htmlFor={'poster-image'}>
        poster
      </label>
      <input
        id={'poster-image'}
        onChange={(evt) => onAddFile(evt)}
        type="file"
        name={'poster'}
      />
      {!!posterLink && (
        <button onClick={onRemoveFile} type="button">
          Remove poster
        </button>
      )}
    </fieldset>
  );
};

AddFilmFormPoster.propTypes = {
  posterLink: T.string,
  onAddFile: T.func,
  onRemoveFile: T.func
};

export default AddFilmFormPoster;
