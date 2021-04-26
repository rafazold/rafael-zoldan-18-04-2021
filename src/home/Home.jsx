import React, { useEffect } from 'react';
import WeekSummary from '../components/WeekSummary.jsx';
import AsyncSelect from 'react-select/async';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setCurrentCity,
  setIdFromLocation,
} from '../redux/actions/weatherActions';
import { accuWeather, weatherRoutes } from '../api/accuWeather';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentCity = useSelector((state) => state.weather.currentCity);

  const handleOnSelect = (value) => {
    dispatch(setCurrentCity({ id: value.value, name: value.label }));
  };

  const loadOptions = (inputValue) => {
    if (inputValue.match(/^[a-zA-Z ]*$/i)) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            accuWeather
              .get(weatherRoutes.AUTOCOMPLETE, {
                params: {
                  apikey: process.env.AW_API_KEY,
                  q: inputValue,
                },
              })
              .then((res) =>
                res.data.map((option) => ({
                  value: option.Key,
                  label: option.LocalizedName,
                }))
              )
          );
        }, 500);
      });
    }
  };

  const setGeoLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const success = (pos) => {
      const loc = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      window.localStorage.getItem('loc') !== JSON.stringify(loc) &&
        window.localStorage.setItem('loc', JSON.stringify(loc));
      dispatch(setIdFromLocation(`${loc.lat},${loc.lon}`));
    };
    const error = () => {
      dispatch(setCurrentCity({ id: '215854', name: 'Tel-Aviv' }));
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  useEffect(() => {
    if (history.length <= 1 || Object.keys(currentCity).length === 0) {
      setGeoLocation();
    }
  }, [history, currentCity]);

  return (
    <div className="comp-home flex flex-col bg-gray-400 dark:bg-gray-800 py-20">
      <h1 className="text-6xl text-center mt-8 dark:text-white">Weather App</h1>
      <AsyncSelect
        loadOptions={loadOptions}
        onChange={handleOnSelect}
        placeholder="Search any city..."
        className="w-1/2 mx-auto mt-10 lg:w-1/5"
      />
      <WeekSummary />
    </div>
  );
};

export default Home;
