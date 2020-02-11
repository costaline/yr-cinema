import React from 'react';
import * as T from 'prop-types';

/**
 * Info about film
 *
 * @typedef FilmInfo
 * @property {string} name
 * @property {string} posterURL
 * @property {string} description
 * @property {string} slogan
 * @property {number} year
 * @property {string[]} country
 * @property {number} timestamp
 *
 * @param {FilmInfo} info
 */
const FilmInfo = ({ info }) => {
  const {
    name,
    slogan,
    posterURL,
    country,
    year,
    description,
    timestamp
  } = info;

  return (
    <div>
      <h2>{name}</h2>
      <img src={posterURL} alt={name} />
      <p>{description}</p>
      <p>{slogan}</p>
      <p>{year}</p>
      <p>{country.join(', ')}</p>
      <small>{timestamp}</small>
    </div>
  );
};

FilmInfo.propTypes = {
  info: T.shape({
    name: T.string,
    posterURL: T.string,
    description: T.string,
    slogan: T.string,
    year: T.number,
    country: T.arrayOf(T.string),
    timestamp: T.number
  })
};

export default FilmInfo;
