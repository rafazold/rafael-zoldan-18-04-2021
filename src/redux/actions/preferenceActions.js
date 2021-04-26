import * as actionTypes from '../constants/actionTypes';

export const setDarkMode = (mode) => {
  return {
    type: actionTypes.SET_DARK_MODE,
    payload: mode,
  };
};

export const addFavorite = ({ id, name }) => {
  const currentFavorites =
    JSON.parse(window.localStorage.getItem('favorites')) || [];
  const favorites = [...currentFavorites, { id, name }];
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
  return {
    type: actionTypes.ADD_FAVORITE_CITY,
    payload: { id, name },
  };
};
export const removeFavorite = (city) => {
  const currentFavorites = JSON.parse(window.localStorage.getItem('favorites'));
  const favorites = [...currentFavorites].filter((fav) => fav.id !== city.id);
  favorites === []
    ? window.localStorage.removeItem(key)
    : window.localStorage.setItem('favorites', JSON.stringify(favorites));
  return {
    type: actionTypes.REMOVE_FAVORITE_CITY,
    payload: city,
  };
};
