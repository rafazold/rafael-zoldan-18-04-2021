import {
  SET_CURRENT_LOCATION_WEATHER,
  SET_LOCATION_FORECAST,
  ADD_AVAILABLE_CITY,
  SET_CITY_ID_MAP,
  ADD_CITY_ID,
  SET_CURRENT_CITY,
} from '../constants/actionTypes';
const initialState = {
  currentLocationWeather: {},
  locationForecast: [],
  availableCities: {},
  citiesMap: {},
  cityIds: {
    215854: 'Tel-Aviv',
  },
  idFromLocation: {},
  currentCity: {},
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_LOCATION_WEATHER:
      return { ...state, currentLocationWeather: payload };
    case SET_LOCATION_FORECAST:
      return { ...state, locationForecast: payload };
    case ADD_AVAILABLE_CITY:
      return { ...state, availableCities: { [payload.id]: payload.data } };
    case SET_CITY_ID_MAP:
      return { ...state, citiesMap: payload };
    case ADD_CITY_ID:
      return {
        ...state,
        cityIds: { ...state.cityIds, [payload.id]: payload.name },
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
