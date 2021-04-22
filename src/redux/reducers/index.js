import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducers';
import { preferenceReducer } from './preferenceReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  preferences: preferenceReducer,
});
export default reducers;
