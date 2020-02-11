import React from 'react';
import { useHistory } from 'react-router-dom';
import T from 'prop-types';
import styled from 'styled-components';

import FilmsItem from '~components/home-page/films-item';

export const FilmsList = ({ films }) => {
  const history = useHistory();

  return (
    <StyledSection>
      {films.map((film) => {
        const { filmId, name, posterURL } = film;

        const filmsItemProps = {
          name,
          posterURL
        };

        return (
          <div key={filmId} onClick={() => history.push(`/films/${filmId}`)}>
            <FilmsItem {...filmsItemProps} />
          </div>
        );
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
