import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { filmsReducer } from '~store/films/reducer';

const rootReducer = combineReducers({
  films: filmsReducer,
  form: formReducer
});

const composeEnhancers = composeWithDevTools({ trace: false });

const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancers);

export default store;
