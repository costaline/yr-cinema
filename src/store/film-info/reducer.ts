import { FETCH_FILM_INFO } from './action-types';
import { IFilmInfoState, FetchFilmInfoActionTypes } from './types';

export const initialState = {
  isRequest: false,
  filmInfo: null,
  error: null
};

export const filmInfoReducer = (
  state = initialState,
  action: FetchFilmInfoActionTypes
): IFilmInfoState => {
  switch (action.type) {
    case FETCH_FILM_INFO.START:
      return {
        ...state,
        ...initialState,
        isRequest: true
      };

    case FETCH_FILM_INFO.SUCCESS:
      return {
        ...state,
        isRequest: false,
        filmInfo: action.data
      };

    case FETCH_FILM_INFO.FAILURE:
      return {
        ...state,
        isRequest: false,
        error: action.error
      };

    default:
      return state;
  }
};
