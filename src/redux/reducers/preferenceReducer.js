import { ActionTypes } from '../constants/action-types';

const initialState = {
  mode: window.localStorage.getItem('mode') || 'dark',
  location: {},
  favorites: [],
};

export const preferenceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DARK_MODE:
      return { ...state, mode: payload };
    case ActionTypes.SET_LOCATION:
      return { ...state, location: payload };
    case ActionTypes.ADD_FAVORITE_CITY:
      return { ...state, favorites: [...state.favorites, payload] };
    case ActionTypes.REMOVE_FAVORITE_CITY:
      return { ...state, favorites: [...state.favorites, payload] };
    default:
      return state;
  }
};
