import * as A from './action-types';

import firebase from '~services/api/firebase';
import { authSuccess } from '~store/auth/actions';

export const initializedStart = () => ({
  type: A.INITIALIZED_START
});

export const initializedSuccess = (isUser) => ({
  type: A.INITIALIZED_SUCCESS,
  isUser
});

export const initializedFailure = (error) => ({
  type: A.INITIALIZED_FAILURE,
  error
});

export const initializedUser = () => (dispatch) => {
  dispatch(initializedStart());
  try {
    firebase.doOnAuthStateChanged(
      (profile) => {
        dispatch(authSuccess(profile));
        dispatch(initializedSuccess(true));
      },
      () => dispatch(initializedSuccess(false))
    );
  } catch (error) {
    dispatch(initializedFailure(error));
  }
};
