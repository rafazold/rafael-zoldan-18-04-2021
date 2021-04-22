import { ActionTypes } from '../constants/action-types';

export const addCityId = (city) => {
  return {
    type: ActionTypes.ADD_CITY_ID,
    payload: city,
  };
};
export const setCities = (cities) => {
  return {
    type: ActionTypes.SET_CITIES,
    payload: cities,
  };
};

export const setSelectedCity = (city) => {
  return {
    type: ActionTypes.SET_SELECTED_CITY,
    payload: city,
  };
};
export const setFiveDayForecast = (forecast) => {
  return {
    type: ActionTypes.SET_FIVE_DAY_FORECAST,
    payload: forecast,
  };
};
export const setAvailableCities = (forecast) => {
  return {
    type: ActionTypes.SET_AVAILABLE_CITIES,
    payload: forecast,
  };
};
