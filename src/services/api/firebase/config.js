import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const config = {
  apiKey: process.env.APP_API_KEY,
  authDomain: process.env.APP_AUTH_DOMAIN,
  databaseURL: process.env.APP_DATABASE_URL,
  projectId: process.env.APP_PROJECT_ID,
  storageBucket: process.env.APP_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_MESSAGING_SENDER_ID
};

export const app = firebase.initializeApp(config);

const getUserProfile = (user) => ({
  name: user.displayName,
  email: user.email,
  photoUrl: user.photoURL,
  emailVerified: user.emailVerified,
  uid: user.uid
});

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    await app.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error);
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    await app.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error);
  }
};

export const doOnAuthStateChanged = (onUser, onNoUser) => {
  app.auth().onAuthStateChanged((user) => {
    if (user) {
      const profile = getUserProfile(user);
      onUser(profile);
    } else {
      onNoUser();
    }
  });
};

export const getCurrentUser = () => {
  const user = app.auth().currentUser;

  if (user) {
    return getUserProfile(user);
  }
  return null;
};

export const logoutUser = async () => {
  try {
    await app.auth().signOut();
  } catch (error) {
    throw new Error(error);
  }
};
