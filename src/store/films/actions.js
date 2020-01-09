import * as A from './action-types';

import * as api from '~services/api';

const fetchFilmsStart = () => {
  return {
    type: A.FETCH_FILMS_START
  };
};

const fetchFilmsSuccess = (films) => {
  return {
    type: A.FETCH_FILMS_SUCCESS,
    films
  };
};

const fetchFilmsFailure = (error) => {
  return {
    type: A.FETCH_FILMS_FAILURE,
    error
  };
};

export const fetchFilms = () => async (dispatch) => {
  dispatch(fetchFilmsStart());

  try {
    const films = await api.db.getResource('film');
    dispatch(fetchFilmsSuccess(films));
  } catch (err) {
    dispatch(fetchFilmsFailure(err));
  }
};
