import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '~store';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const path = document.getElementById('root');

ReactDOM.render(app, path);
