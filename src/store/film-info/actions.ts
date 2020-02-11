import { Dispatch } from 'redux';

import { IFilmInfo, FetchFilmInfoActionTypes } from './types';
import { FETCH_FILM_INFO } from './action-types';
// @ts-ignore
import { db } from '~services/api';

export const fetchFilmInfoStart = (): FetchFilmInfoActionTypes => {
  return {
    type: FETCH_FILM_INFO.START
  };
};

export const fetchFilmInfoSuccess = (
  data: IFilmInfo
): FetchFilmInfoActionTypes => {
  return {
    type: FETCH_FILM_INFO.SUCCESS,
    data
  };
};

export const fetchFilmInfoFailure = (
  error: string
): FetchFilmInfoActionTypes => {
  return {
    type: FETCH_FILM_INFO.FAILURE,
    error
  };
};

export const fetchFilmInfo = (resource: string) => async (
  dispatch: Dispatch<FetchFilmInfoActionTypes>
) => {
  dispatch(fetchFilmInfoStart());

  try {
    const data = await db.newGetResource(resource);

    dispatch(fetchFilmInfoSuccess(data));
  } catch (error) {
    dispatch(fetchFilmInfoFailure(error));
  }
};
