import React from 'react';
import T from 'prop-types';

import FilmsItem from '~components/home-page/films-item';

export const FilmsList = ({ films }) => {
  return (
    <section>
      {films.map((film) => {
        const { name, posterURL } = film;

        const filmsItemProps = {
          name,
          posterURL
        };

        return <FilmsItem key={film.filmId} {...filmsItemProps} />;
      })}
    </section>
  );
};

FilmsList.propTypes = {
  films: T.arrayOf(
    T.shape({
      name: T.string,
      posterURL: T.string
    })
  )
};
