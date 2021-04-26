import {
  SET_DARK_MODE,
  SET_UNITS,
  ADD_FAVORITE_CITY,
  REMOVE_FAVORITE_CITY,
} from '../constants/actionTypes';

const initialState = {
  mode: window.localStorage.getItem('mode') || 'dark',
  units: window.localStorage.getItem('units') || 'metric',
  favorites: JSON.parse(window.localStorage.getItem('favorites')) || [],
  selectedLocation: window.localStorage.getItem('location') || '215854',
};

export const preferenceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DARK_MODE:
      return { ...state, mode: payload };
    case SET_UNITS:
      return { ...state, units: payload };
    case ADD_FAVORITE_CITY:
      return { ...state, favorites: [...state.favorites, payload] };
    case REMOVE_FAVORITE_CITY:
      return {
        ...state,
        favorites: [...state.favorites].filter(
          (city) => city.id !== payload.id
        ),
      };
    default:
      return state;
  }
};
