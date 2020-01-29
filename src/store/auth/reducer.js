import * as A from './action-types';

const initialState = {
  user: null,
  isRequest: false,
  error: null
};

const handlers = {
  [A.AUTH_START]: (state) => ({
    ...state,
    user: null,
    isRequest: true,
    error: null
  }),

  [A.AUTH_SUCCESS]: (state, payload) => ({
    ...state,
    isRequest: false,
    user: payload.user
  }),

  [A.AUTH_FAILURE]: (state, { error }) => ({
    ...state,
    isRequest: false,
    error: error.message
  }),

  DEFAULT: (state) => state
};

export const authReducer = (state = initialState, { type, ...payload }) => {
  const handler = handlers[type] || handlers.DEFAULT;

  return handler(state, payload);
};
