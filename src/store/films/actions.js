import * as A from './action-types';

import * as api from '~services/api';

const fetchFilmsStart = () => {
  return {
    type: A.FETCH_FILMS_START
  };
};

const fetchFilmsSuccess = (filmsData) => {
  return {
    type: A.FETCH_FILMS_SUCCESS,
    filmsData
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
    const filmsData = await api.db.getResource('film');
    console.log(filmsData);
    dispatch(fetchFilmsSuccess(filmsData));
  } catch (err) {
    dispatch(fetchFilmsFailure(err));
  }
};
