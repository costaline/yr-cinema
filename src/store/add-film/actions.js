import { change, reset } from 'redux-form';

import * as A from './action-types';
import {
  uploadFile,
  deleteFile,
  storagePaths
} from '~services/api/firebase/storage';
import { addContent } from '~services/api/firebase/db';

export const posterAddStart = () => ({ type: A.POSTER_ADD_START });

export const posterAddSuccess = (posterLink) => ({
  type: A.POSTER_ADD_SUCCESS,
  posterLink
});

export const posterAddFailure = (error) => ({
  type: A.POSTER_ADD_SUCCESS,
  error
});

export const posterAdd = (userId, file) => async (dispatch) => {
  dispatch(posterAddStart());

  try {
    const posterLink = await uploadFile(storagePaths.posters, userId, file);
    dispatch(change('add-film', 'posterURL', posterLink));
    dispatch(posterAddSuccess(posterLink));
  } catch (error) {
    dispatch(posterAddFailure(error));
  }
};

export const posterRemoveStart = () => ({ type: A.POSTER_REMOVE_START });

export const posterRemoveSuccess = () => ({ type: A.POSTER_REMOVE_SUCCESS });

export const posterRemoveFailure = (error) => ({
  type: A.POSTER_REMOVE_FAILURE,
  error
});

export const posterRemove = (posterLink) => async (dispatch) => {
  dispatch(posterRemoveStart());

  try {
    await deleteFile(posterLink);
    dispatch(change('add-film', 'posterURL', ''));

    dispatch(posterRemoveSuccess());
  } catch (error) {
    dispatch(posterRemoveFailure(error));
  }
};

export const addFilmStart = () => ({ type: A.ADD_FILM_START });

export const addFilmSuccess = () => ({ type: A.ADD_FILM_SUCCESS });

export const addFilmFailure = (error) => ({ type: A.ADD_FILM_FAILURE, error });

export const addFilm = (data) => async (dispatch) => {
  dispatch(addFilmStart());

  try {
    await addContent(data, 'films/');
    dispatch(addFilmSuccess());
    dispatch(reset('add-film'));
  } catch (error) {
    dispatch(addFilmFailure(error));
  }
};
