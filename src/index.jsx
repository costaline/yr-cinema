import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '~store';
import App from './app';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const path = document.getElementById('root');

ReactDOM.render(app, path);
