import * as A from './action-types';

export const initialState = {
  films: {},
  loading: false,
  error: null
};

const handlers = {
  [A.FETCH_FILMS_START]: (state) => ({
    ...state,
    loading: true,
    error: null
  }),

  [A.FETCH_FILMS_SUCCESS]: (state, payload) => ({
    ...state,
    films: payload.filmsData,
    loading: false
  }),

  [A.FETCH_FILMS_FAILURE]: (state, payload) => ({
    ...state,
    loading: false,
    error: payload.error
  }),

  DEFAULT: (state) => state
};

export const filmsReducer = (state = initialState, { type, ...payload }) => {
  const handler = handlers[type] || handlers.DEFAULT;

  return handler(state, payload);
};
