import * as actionTypes from '../constants/actionTypes';
import { accuWeather, weatherRoutes } from '../../api/accuWeather';
import { createError } from '../../helpers';
import { ADD_CITY_ID } from '../constants/actionTypes';

export const setIdFromLocation = (location) => (dispatch) => {
  let passedCity;
  accuWeather
    .get(weatherRoutes.GEOPOSITION, {
      params: {
        apikey: process.env.AW_API_KEY,
        // q: location,
      },
    })
    .then((res) => {
      const id = res.data[0].Key;
      const name = res.data[0].EnglishName;
      passedCity = { id, name };
      return dispatch({
        type: actionTypes.SET_CURRENT_CITY,
        payload: passedCity,
      });
    })
    .then(() => {
      return dispatch({
        type: ADD_CITY_ID,
        payload: passedCity,
      });
    })
    .catch(() =>
      dispatch({
        type: actionTypes.SET_CURRENT_CITY,
        payload: { id: '215854', name: 'Tel-Aviv' },
      })
    );
};
export const setCurrentLocationWeather = (locationId, locationName) => (
  dispatch
) => {
  let locationWeather = {};
  accuWeather
    .get(weatherRoutes.CURRENT_WEATHER, {
      params: {
        apikey: process.env.AW_API_KEY,
      },
    })
    .then((res) => {
      locationWeather.data = res.data[0];
      locationWeather.data.name = locationName;
      locationWeather.data.id = locationId;
      locationWeather.id = locationId;
      dispatch({
        type: actionTypes.SET_CURRENT_LOCATION_WEATHER,
        payload: res.data[0],
      });
    })
    .then(() => {
      return dispatch(addAvailableCity(locationWeather));
    });
};

export const setCurrentCity = (location) => {
  return {
    type: actionTypes.SET_CURRENT_CITY,
    payload: location,
  };
};

export const setLocationForecast = (location) => (dispatch) => {
  accuWeather
    .get(weatherRoutes.DAILY, {
      params: {
        apikey: process.env.AW_API_KEY,
      },
    })
    .then((res) => {
      dispatch({
        type: actionTypes.SET_LOCATION_FORECAST,
        payload: res.data,
      });
    });
};
export const addAvailableCity = (cityWeather) => {
  return {
    type: actionTypes.ADD_AVAILABLE_CITY,
    payload: cityWeather,
  };
};
export const setCities = (cities) => {
  return {
    type: actionTypes.SET_CITY_ID_MAP,
    payload: cities,
  };
};
export const addCityId = (city) => {
  return {
    type: actionTypes.ADD_CITY_ID,
    payload: city,
  };
};
