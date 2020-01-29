import { reset } from 'redux-form';

import * as A from './action-types';
import Firebase from '~services/api/firebase';

const firebase = new Firebase();

export const authStart = () => {
  return {
    type: A.AUTH_START
  };
};

export const authSuccess = (user) => {
  return {
    type: A.AUTH_SUCCESS,
    user
  };
};

export const authFailure = (error) => {
  return {
    type: A.AUTH_FAILURE,
    error
  };
};

export const userSignUp = ({ email, password }) => async (dispatch) => {
  dispatch(authStart());

  try {
    const user = await firebase.doCreateUserWithEmailAndPassword(
      email,
      password
    );

    dispatch(authSuccess(user));
    dispatch(reset('signup'));
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const userSignIn = ({ email, password }) => async (dispatch) => {
  dispatch(authStart());

  try {
    const user = await firebase.doSignInWithEmailAndPassword(email, password);

    dispatch(authSuccess(user));
    dispatch(reset('signin'));
  } catch (error) {
    dispatch(authFailure(error));
  }
};
