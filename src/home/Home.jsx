import React, { useEffect, useState } from 'react';
import WeekSummary from '../components/WeekSummary.jsx';
import AsyncSelect from 'react-select/async';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setCurrentCity,
  setIdFromLocation,
} from '../redux/actions/weatherActions';
import { accuWeather, weatherRoutes } from '../api/accuWeather';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentCity = useSelector((state) => state.weather.currentCity);
  const [apiError, setApiError] = useState(false);
  const [count, setCount] = useState(0);

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
              .catch(() =>
                toast.error('Please try another search', {
                  position: toast.POSITION.TOP_CENTER,
                })
              )
          );
        }, 500);
      });
    } else {
      toast.info('Only English characters please...', {
        position: toast.POSITION.TOP_CENTER,
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
      try {
        dispatch(setIdFromLocation(`${loc.lat},${loc.lon}`));
        setCount(count + 1);
      } catch {
        setApiError(true);
        toast.warn('something went wrong, please reload', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    };
    const error = () => {
      setApiError(true);
      dispatch(setCurrentCity({ id: '215854', name: 'Tel-Aviv' }));
    };
    !apiError &&
      count < 1 &&
      navigator.geolocation.getCurrentPosition(success, error, options);
  };

  useEffect(() => {
    if (history.length <= 1 || Object.keys(currentCity).length === 0) {
      try {
        !apiError && setGeoLocation();
      } catch {
        toast.warn('something went wrong, please reload', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  }, [history, currentCity]);

  return (
    <div className="comp-home flex flex-col bg-gray-400 py-20 dark:bg-gray-800 lg:h-screen">
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
