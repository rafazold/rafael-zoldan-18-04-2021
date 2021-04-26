import React from 'react';
import moment from 'moment';
const requestImageFile = require.context('../images', true, /.png$/);

const WeatherCards = ({ daily = [] }) => {
  return (
    <div className="comp-weatherCards flex flex-col px-3 pb-10 mx-auto lg:flex-row space-y-4 lg:space-y-0 lg:justify-center lg:space-x-4">
      {daily.map((day, i) => (
        <div
          key={day.EpochDate + i}
          className="bg-gray-700 rounded-md p-4 text-gray-400 text-center text-xl w-full flex lg:flex-col justify-between lg:h-56 lg:w-auto"
        >
          <div>{moment(day.Date).format('ddd')}</div>
          <img
            src={
              requestImageFile(`./weather-icons/${day.Day.Icon}.png`).default
            }
            alt="weather icon"
            className="h-24"
          />
          <div className="lg:flex space-x-4">
            <div>
              <span>{day.Temperature.Minimum.Value}</span>

              <span>{day.Temperature.Minimum.Unit}</span>
            </div>
            <span>-</span>
            <div>
              <span>{day.Temperature.Maximum.Value}</span>

              <span>{day.Temperature.Maximum.Unit}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherCards;
