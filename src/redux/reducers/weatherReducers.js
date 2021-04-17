import { ActionTypes } from "../constants/action-types";
const intialState = {
  cities: [],
  selectedCity: ''
};

export const citiesReducer = (state = intialState.cities, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CITIES:
      return { ...state, cities: payload };
    default:
      return state;
  }
};

export const selectedCityReducer = (state = intialState.selectedCity, { type, payload }) => {
  // console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_CITY:
      return { ...state, ...payload };
    default:
      return state;
  }
};