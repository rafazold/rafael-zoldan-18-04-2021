import * as actionTypes from '../constants/actionTypes';

export const setDarkMode = (mode) => {
  return {
    type: actionTypes.SET_DARK_MODE,
    payload: mode,
  };
};

export const setUnits = (units) => {
  return {
    type: actionTypes.SET_UNITS,
    payload: units,
  };
};

export const setFavorites = (favorites) => {
  return {
    type: actionTypes.SET_FAVORITES,
    payload: favorites,
  };
};
export const addFavorite = (city) => {
  const currentFavorites = window.localStorage.getItem('favorites') || [];
  const favorites = [...currentFavorites, city];
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
  return {
    type: actionTypes.ADD_FAVORITE_CITY,
    payload: city,
  };
};
export const removeFavorite = (city) => {
  const currentFavorites = window.localStorage.getItem('favorites');
  const favorites = [...currentFavorites].filter((fav) => fav !== city);
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
  return {
    type: actionTypes.REMOVE_FAVORITE_CITY,
    payload: city,
  };
};
export const setSelectedLocation = (location) => {
  return {
    type: actionTypes.SET_SELECTED_LOCATION,
    payload: location,
  };
};
