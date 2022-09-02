import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : args => args;

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk), devtools)
);

export default store;
