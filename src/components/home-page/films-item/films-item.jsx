import React, { useState } from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import { Loader } from '~components/shared/loader';
import defaultPoster from './default-poster.png';

const FilmsItem = ({ name, posterURL }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // TODO: split state & render?
  return (
    <StyledFilmItem>
      <div>
        <h3>{name}</h3>
        {loading && <Loader />}
        <img
          src={!error ? posterURL || defaultPoster : defaultPoster}
          alt={name}
          onLoad={() => setLoading(false)}
          onError={() => setError(true)}
        />
      </div>
    </StyledFilmItem>
  );
};

FilmsItem.propTypes = {
  name: T.string,
  posterURL: T.string
};

export default FilmsItem;

const StyledFilmItem = styled.div`
  --poster-height: 200px;
  --poster-ratio: 0.7;

  padding: 15px;

  & > div {
    position: relative;
    //TODO: variables.js ?
    width: calc(var(--poster-height) * var(--poster-ratio));
    height: var(--poster-height);

    overflow: hidden;

    box-shadow: 0 0 10px 3px #888888;

    transition: all 750ms ease-in-out;

    &:hover {
      box-shadow: 0 0 0 5px #888888;
    }
  }

  & h3 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    padding: 5px;

    font-family: Lato, sans-serif;
    font-size: 16px;
    text-align: center;

    background-color: rgba(255, 255, 255, 0.75);

    z-index: 100;
  }

  & img {
    display: block;
    width: calc(var(--poster-height) * var(--poster-ratio));
    height: var(--poster-height);

    transition: all 750ms ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
