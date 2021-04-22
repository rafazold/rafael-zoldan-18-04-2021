import { ActionTypes } from '../constants/action-types';

export const setDarkMode = (mode) => {
  return {
    type: ActionTypes.SET_DARK_MODE,
    payload: mode,
  };
};

export const SetLocation = (location) => {
  return {
    type: ActionTypes.SET_LOCATION,
    payload: location,
  };
};
