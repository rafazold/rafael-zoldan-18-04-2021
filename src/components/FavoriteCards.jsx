import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCity } from '../redux/actions/weatherActions';
const requestImageFile = require.context('../images', true, /.png$/);

const FavoriteCards = ({ citiesData = [], favoriteList = [] }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (e, id, name) => {
    dispatch(setCurrentCity({ id, name }));
    history.push('/');
  };
  return (
    <div className="flex flex-wrap justify-around space-y-2 flex-col mx-auto pb-10 px-3 bg-gray-400 dark:bg-gray-800 lg:space-y-0 lg:space-x-4 lg:mt-40 lg:flex-row lg:justify-center lg:h-full">
      {citiesData.map((city, i) => (
        <a
          onClick={(e) =>
            handleClick(e, favoriteList[i].id, favoriteList[i].name)
          }
          key={favoriteList[i].id}
          className="cursor-pointer bg-gray-700 rounded-md p-4 text-gray-400 text-center text-2xl flex lg:flex-col justify-between lg:max-h-60"
        >
          <div className="">
            <div>{favoriteList[i].name}</div>
            <div className="flex space-x-4">
              <div>
                <span>{city.data[0].Temperature.Metric.Value}</span>

                <span>{city.data[0].Temperature.Metric.Unit}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-28">
            <img
              src={
                requestImageFile(
                  `./weather-icons/${city.data[0].WeatherIcon}.png`
                ).default
              }
              alt="weather logo"
              className="w-40 h-40 mx-auto"
            />
            <div>{city.data[0].WeatherText}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FavoriteCards;
