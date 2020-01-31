import * as A from './action-types';

export const initialState = {
  isInitialized: false,
  isUser: false,
  error: null
};

const handlers = {
  [A.INITIALIZED_START]: (state) => ({
    ...state,
    ...initialState
  }),

  [A.INITIALIZED_SUCCESS]: (state, { isUser }) => ({
    ...state,
    isInitialized: true,
    isUser
  }),

  [A.INITIALIZED_FAILURE]: (state, { error }) => ({
    ...state,
    isInitialized: true,
    error
  }),

  DEFAULT: (state) => state
};

export const appReducer = (state = initialState, { type, ...payload }) => {
  const handler = handlers[type] || handlers.DEFAULT;

  return handler(state, payload);
};
