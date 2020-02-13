import React from 'react';
import * as T from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import defaultPoster from './default-poster.png';

import styles from './film-info.module.scss';

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
    <div className={styles.filmInfo}>
      <h2 className={styles.title}>{name}</h2>
      <img
        className={styles.poster}
        src={posterURL || defaultPoster}
        alt={name}
      />
      <p className={styles.description}>{description}</p>
      <p className={styles.slogan}>{slogan}</p>
      <p className={styles.year}>{year}</p>
      <p className={styles.country}>{country.join(', ')}</p>
      <small className={styles.date}>
        {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
      </small>
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
