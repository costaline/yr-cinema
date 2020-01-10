import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import defaultPoster from './default-poster.png';

const FilmsItem = ({ name, posterURL }) => (
  <StyledFilmItem>
    <div>
      <h3>{name}</h3>
      <img src={posterURL || defaultPoster} alt={name} />
    </div>
  </StyledFilmItem>
);

FilmsItem.propTypes = {
  name: T.string,
  posterURL: T.string
};

export default FilmsItem;

const StyledFilmItem = styled.div`
  padding: 15px;

  & div {
    position: relative;

    width: 150px;
    height: 200px;

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
    width: 150px;
    height: 200px;

    transition: all 750ms ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
