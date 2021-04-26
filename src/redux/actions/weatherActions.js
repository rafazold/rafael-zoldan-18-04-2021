import * as actionTypes from '../constants/actionTypes';
import { accuWeather, weatherRoutes } from '../../api/accuWeather';

export const setIdFromLocation = (location) => (dispatch) => {
  let locatedCity;
  accuWeather
    .get(weatherRoutes.GEOPOSITION, {
      params: {
        apikey: process.env.AW_API_KEY,
        q: location,
      },
    })
    .then((res) => {
      const id = res.data[0].Key;
      const name = res.data[0].EnglishName;
      locatedCity = { id, name };
      return dispatch({
        type: actionTypes.SET_CURRENT_CITY,
        payload: locatedCity,
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
    .get(weatherRoutes.CURRENT_WEATHER + locationId, {
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
      dispatch(addAvailableCity(locationWeather));
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
    .get(weatherRoutes.DAILY + location, {
      params: {
        apikey: process.env.AW_API_KEY,
        metric: true,
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
