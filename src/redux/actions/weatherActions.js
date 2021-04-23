import * as actionTypes from '../constants/actionTypes';

export const setLocationWeather = (location) => {
  return {
    type: actionTypes.SET_CURRENT_LOCATION_WEATHER,
    payload: location,
  };
};
export const setLocationForecast = (forecast) => {
  return {
    type: actionTypes.SET_LOCATION_FORECAST,
    payload: forecast,
  };
};
export const setAvailableCities = (forecast) => {
  return {
    type: actionTypes.SET_AVAILABLE_CITIES,
    payload: forecast,
  };
};
export const setCities = (cities) => {
  return {
    type: actionTypes.SET_CITY_ID_MAP,
    payload: cities,
  };
};
export const addCityId = (city) => {
  return {
    type: actionTypes.ADD_CITY_ID,
    payload: city,
  };
};
