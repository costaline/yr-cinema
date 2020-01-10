import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import FilmsItem from '~components/home-page/films-item';

export const FilmsList = ({ films }) => {
  return (
    <StyledSection>
      {films.map((film) => {
        const { name, posterURL } = film;

        const filmsItemProps = {
          name,
          posterURL
        };

        return <FilmsItem key={film.filmId} {...filmsItemProps} />;
      })}
    </StyledSection>
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

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
