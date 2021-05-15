import * as actionTypes from '../constants/actionTypes';
import { accuWeather, weatherRoutes } from '../../api/accuWeather';
import { toast } from 'react-toastify';

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
      const id = res.data.Key;
      const name = res.data.EnglishName;
      locatedCity = { id, name };
      return dispatch({
        type: actionTypes.SET_CURRENT_CITY,
        payload: locatedCity,
      });
    })
    .catch((err) => {
      toast.warn('please try again later', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return dispatch({
        type: actionTypes.SET_CURRENT_CITY,
        payload: { id: '215854', name: 'Tel-Aviv' },
      });
    });
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
    })
    .catch(() =>
      toast.warn("We couldn't get the current weather, try again later", {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    );
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
    })
    .catch(() =>
      toast.success("Couldn't get location data...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    );
};
export const addAvailableCity = (cityWeather) => {
  return {
    type: actionTypes.ADD_AVAILABLE_CITY,
    payload: cityWeather,
  };
};
