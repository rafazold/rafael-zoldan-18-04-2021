import React, { useEffect, useState } from 'react';
import FavoriteCards from '../components/FavoriteCards.jsx';
import { useSelector } from 'react-redux';
import { accuWeather, weatherRoutes } from '../api/accuWeather';

const Favorites = () => {
  const favorites = useSelector((state) => state.preferences.favorites);
  const available = useSelector((state) => state.weather.availableCities);
  const [citiesArr, setCitiesArr] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cityWeatherRequests = favorites.map(({ id }) =>
      accuWeather(weatherRoutes.CURRENT_WEATHER + id, {
        params: {
          apikey: process.env.AW_API_KEY,
        },
      })
    );
    cityWeatherRequests.length &&
      Promise.all(cityWeatherRequests).then((res) => {
        setCitiesArr(res);
        setLoading(false);
      });
  }, [favorites, available]);
  return (
    <div className="pt-20 bg-gray-400 dark:bg-gray-800 h-screen">
      {!loading && (
        <FavoriteCards citiesData={citiesArr} favoriteList={favorites} />
      )}
    </div>
  );
};

export default Favorites;
