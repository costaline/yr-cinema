import { reset } from 'redux-form';

import * as A from './action-types';
import firebase from '~services/api/firebase';

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

export const logoutStart = () => {
  return {
    type: A.LOGOUT_START
  };
};

export const logoutSuccess = () => {
  return {
    type: A.LOGOUT_SUCCESS
  };
};

export const logoutFailure = (error) => {
  return {
    type: A.LOGOUT_FAILURE,
    error
  };
};

export const userSignUp = ({ email, password }) => async (dispatch) => {
  dispatch(authStart());

  try {
    await firebase.doCreateUserWithEmailAndPassword(email, password);

    const data = firebase.getCurrentUser();

    dispatch(authSuccess(data));
    dispatch(reset('signup'));
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const userSignIn = ({ email, password }) => async (dispatch) => {
  dispatch(authStart());

  try {
    await firebase.doSignInWithEmailAndPassword(email, password);

    const data = firebase.getCurrentUser();

    dispatch(authSuccess(data));
    dispatch(reset('signin'));
  } catch (error) {
    dispatch(authFailure(error));
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch(logoutStart());
  try {
    await firebase.logoutUser();

    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
  }
};
