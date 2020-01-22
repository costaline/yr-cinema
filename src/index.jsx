import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '~store';
import App from './app';
import Firebase, { FirebaseContext } from '~services/api/firebase/auth';
import './i18n';

const app = (
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </Provider>
);

const path = document.getElementById('root');

ReactDOM.render(app, path);
