import {
  SET_CURRENT_LOCATION_WEATHER,
  SET_LOCATION_FORECAST,
  SET_AVAILABLE_CITIES,
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
    case SET_AVAILABLE_CITIES:
      return { ...state, availableCities: payload };
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
