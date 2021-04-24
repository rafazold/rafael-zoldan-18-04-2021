import React, { useEffect, useState } from 'react';
import data from '../../example_db.json';
import { AiFillHeart } from 'react-icons/ai';
import WeatherCards from './WeatherCards.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentLocationWeather,
  setLocationForecast,
} from '../redux/actions/weatherActions';
import {
  setFavorites,
  addFavorite,
  removeFavorite,
} from '../redux/actions/preferenceActions';

const daily = data.daily;
const single = data.single;

const WeekSummary = ({ dataList = daily }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.weather.currentCity);
  const available = useSelector((state) => state.weather.availableCities);
  const cityDetails = useSelector(
    (state) => state.weather.currentLocationWeather
  );
  const forecast = useSelector((state) => state.weather.locationForecast);
  const favorites = useSelector((state) => state.preferences.favorites);
  const toggleFavorite = () => {
    if (favorites.indexOf(selectedCity.id) < 0) {
      dispatch(addFavorite(selectedCity.id));
    } else {
      dispatch(removeFavorite(selectedCity.id));
    }
  };
  useEffect(() => {
    if (
      Object(available).keys !== undefined &&
      Object(available).keys.includes(selected)
    ) {
      setLoading(false);
    } else {
      if (Object.keys(selectedCity).length) {
        dispatch(setCurrentLocationWeather(selectedCity.id));
        setLoading(false);
      }
    }
  }, [selectedCity]);
  useEffect(() => {
    if (Object.keys(selectedCity).length) {
      dispatch(setLocationForecast(selectedCity.id));
    }
  }, [selectedCity]);
  return (
    <div className="comp-week-summary container mx-auto mt-10 text-gray-900 bg-gray-400 dark:bg-gray-800 dark:text-white">
      <header className="flex  mx-auto justify-around items-center text-white">
        <div className="flex">
          <img src="" alt="" />
          <div>
            <div>{selectedCity.name}</div>
            {!loading && (
              <div>
                {cityDetails.Temperature.Metric.Value}-
                {cityDetails.Temperature.Metric.Unit}
              </div>
            )}
          </div>
        </div>
        <button className="flex" onClick={toggleFavorite} disabled={loading}>
          <AiFillHeart
            color={favorites.includes(selectedCity.id) ? 'red' : 'white'}
            className="w-6 h-6 mr-2"
          />
          Add/Remove Favorites
        </button>
      </header>
      <div className="text-5xl text-center my-14">
        {!loading && cityDetails.WeatherText}
      </div>
      {forecast.length === 0 ? (
        <span className="w-full text-center text-4xl font-bold">
          Loading...
        </span>
      ) : (
        <WeatherCards daily={forecast} />
      )}
    </div>
  );
};

export default WeekSummary;
