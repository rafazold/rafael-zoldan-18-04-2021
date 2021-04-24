import React, { useEffect, useState } from 'react';
import WeekSummary from '../components/WeekSummary.jsx';
import search from '../images/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedLocation } from '../redux/actions/preferenceActions';
import {
  setCurrentCity,
  setCurrentLocationWeather,
  setIdFromLocation,
} from '../redux/actions/weatherActions';

const Home = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.weather.currentCity);
  const available = useSelector((state) => state.preferences.availableCities);
  const [loading, setLoading] = useState(true);
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
    setGeoLocation();
  }, []);
  useEffect(() => {
    if (
      Object(available).keys !== undefined &&
      Object(available).keys.includes(selected)
    ) {
      setLoading(false);
    } else {
      dispatch(setCurrentLocationWeather(215854));
      // setSelectedDetails(available[selected]);
      setLoading(false);
    }
  }, [available, selected]);
  const [searchValue, setSearchValue] = useState('');
  const handleOnChange = (e) => {
    const reg = /^[a-zA-Z]*$/i;
    reg.test(e.currentTarget.value) && setSearchValue(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="comp-home overflow-auto bg-gray-400 dark:bg-gray-800 py-20 h-screen">
      <h1 className="text-6xl text-center mt-8 dark:text-white">Weather App</h1>
      <form className="text-center mt-8" onSubmit={handleSubmit}>
        <label className="relative">
          <input
            type="text"
            className="pl-8 rounded-md text-3xl"
            onChange={handleOnChange}
            value={searchValue}
            placeholder="search any city..."
          />
          <button className="absolute left-0 ml-1 bottom-0" type="submit">
            <img className="w-6 h-6" src={search} alt="magnifying glass" />
          </button>
        </label>
      </form>
      {selected !== undefined && <WeekSummary />}
    </div>
  );
};

export default Home;
