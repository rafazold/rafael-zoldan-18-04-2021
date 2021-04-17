import { ActionTypes } from "../constants/action-types";


export const setCities = (cities) => {
  return {
    type: ActionTypes.SET_CITIES,
    payload: cities,
  };
};

export const selectedCity = (city) => {
  return {
    type: ActionTypes.SELECTED_CITY,
    payload: city,
  };
};
export const setFiveDayForecast = (forecast) => {
  return {
    type: ActionTypes.SET_FIVE_DAY_FORECAST,
    payload: forecast
  };
};