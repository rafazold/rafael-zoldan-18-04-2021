import React from 'react';
import moment from 'moment';
const requestImageFile = require.context('../images', true, /.png$/);

const FavoriteCards = ({ citiesData = [] }) => (
  <div className="flex flex-wrap justify-around space-y-2 flex-col mx-auto pb-10 px-3 bg-gray-400 dark:bg-gray-800 lg:space-y-0 lg:space-x-4 lg:mt-40 lg:flex-row lg:justify-center">
    {citiesData.map((city, i) => (
      <div
        key={city.EpochTime + i}
        className="bg-gray-700 rounded-md p-4 text-gray-400 text-center text-2xl flex lg:flex-col justify-between"
      >
        <div className="">
          <div>{'CITY NAME'}</div>
          <div className="flex space-x-4">
            <div>
              <span>{city.Temperature.Metric.Value}</span>

              <span>{city.Temperature.Metric.Unit}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-28">
          <img
            src={
              requestImageFile(`./weather-icons/${city.WeatherIcon}.png`)
                .default
            }
            alt="weather logo"
            className="w-40 h-40 mx-auto"
          />
          <div>{city.WeatherText}</div>
        </div>
      </div>
    ))}
  </div>
);

export default FavoriteCards;
