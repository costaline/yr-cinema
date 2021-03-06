import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { filmsReducer } from './films/reducer';
import { authReducer } from './auth/reducer';
import { appReducer } from './app/reducer';
import { filmInfoReducer } from './film-info/reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  films: filmsReducer,
  filmInfo: filmInfoReducer,
  form: formReducer
});

const composeEnhancers = composeWithDevTools({ trace: false });

const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancers);

export default store;
