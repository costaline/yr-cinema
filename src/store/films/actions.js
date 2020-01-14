import * as A from './action-types';
import * as api from '~services/api';

export const fetchFilmsStart = () => {
  return {
    type: A.FETCH_FILMS_START
  };
};

export const fetchFilmsSuccess = (filmsData) => {
  return {
    type: A.FETCH_FILMS_SUCCESS,
    filmsData
  };
};

export const fetchFilmsFailure = (error) => {
  return {
    type: A.FETCH_FILMS_FAILURE,
    error
  };
};

export const fetchFilms = (currentQuery) => async (dispatch) => {
  dispatch(fetchFilmsStart());

  try {
    const filmsData = await api.db.getResource('film', currentQuery);

    dispatch(fetchFilmsSuccess(filmsData));
  } catch (err) {
    dispatch(fetchFilmsFailure(err));
  }
};
