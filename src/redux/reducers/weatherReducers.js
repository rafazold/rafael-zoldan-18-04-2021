import { ActionTypes } from '../constants/action-types';
const initialState = {
  cities: [],
  selectedCity: '',
  fiveDayForecast: [],
  availableCities: {},
  cityIds: {
    215854: 'tel-aviv',
    'tel-aviv': 215854,
  },
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_CITY:
      return { ...state, selectedCity: payload };
    case ActionTypes.ADD_CITY_ID:
      return { ...state.cityIds, ...payload };
    default:
      return state;
  }
};
