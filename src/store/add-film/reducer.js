import * as A from './action-types';

export const initialState = {
  poster: {
    isOnStorage: false,
    isLoading: false,
    posterLink: null,
    error: null
  },
  formStatus: {
    isSending: false,
    isInDb: false,
    error: null
  }
};

const handlers = {
  [A.POSTER_ADD_START]: (state) => ({
    ...state,
    poster: { ...initialState.poster, isLoading: true }
  }),

  [A.POSTER_ADD_SUCCESS]: (state, { posterLink }) => ({
    ...state,
    poster: { ...state.poster, isOnStorage: true, posterLink, isLoading: false }
  }),

  [A.POSTER_ADD_FAILURE]: (state, { error }) => ({
    ...state,
    poster: { ...state.poster, error, isLoading: false }
  }),

  [A.POSTER_REMOVE_START]: (state) => ({
    ...state,
    poster: { ...state.poster, isLoading: true }
  }),

  [A.POSTER_REMOVE_SUCCESS]: (state) => ({
    ...state,
    poster: {
      ...state.poster,
      isOnStorage: false,
      posterLink: null,
      isLoading: false
    }
  }),

  [A.POSTER_REMOVE_FAILURE]: (state, { error }) => ({
    ...state,
    poster: { ...state.poster, isLoading: false, error }
  }),

  [A.ADD_FILM_START]: (state) => ({
    ...state,
    formStatus: {
      ...initialState.status,
      isSending: true
    }
  }),

  [A.ADD_FILM_SUCCESS]: (state) => ({
    ...state,
    formStatus: {
      ...state.status,
      isSending: false,
      isInDb: true
    }
  }),

  [A.ADD_FILM_FAILURE]: (state, { error }) => ({
    ...state,
    formStatus: {
      ...state.status,
      isSending: false,
      error
    }
  }),

  DEFAULT: (state) => state
};

export const addFilmReducer = (state = initialState, { type, ...payload }) => {
  const handler = handlers[type] || handlers.DEFAULT;

  return handler(state, payload);
};
