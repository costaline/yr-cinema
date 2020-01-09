import React from 'react';
import T from 'prop-types';

const FilmsItem = ({ name, posterURL }) => (
  <div>
    <h3>{name}</h3>
    <p>
      <img src={posterURL} alt={name} />
    </p>
  </div>
);

FilmsItem.propTypes = {
  name: T.string,
  posterURL: T.string
};

export default FilmsItem;
