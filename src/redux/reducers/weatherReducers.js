import {
  SET_CURRENT_LOCATION_WEATHER,
  SET_LOCATION_FORECAST,
  ADD_AVAILABLE_CITY,
  SET_CURRENT_CITY,
} from '../constants/actionTypes';
const initialState = {
  currentLocationWeather: {},
  locationForecast: [],
  availableCities: {},
  currentCity: {},
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_LOCATION_WEATHER:
      return { ...state, currentLocationWeather: payload };
    case SET_LOCATION_FORECAST:
      return { ...state, locationForecast: payload };
    case ADD_AVAILABLE_CITY:
      return {
        ...state,
        availableCities: {
          ...state.availableCities,
          [payload.id]: payload.data,
        },
      };
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: payload,
      };
    default:
      return state;
  }
};
