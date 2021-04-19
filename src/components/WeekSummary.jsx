import React from 'react';
import data from '../../example_db.json';
import { AiFillHeart } from 'react-icons/ai';
import WeatherCards from './WeatherCards.jsx';

const daily = data.daily;
const single = data.single;

const WeekSummary = ({
  city,
  cityDetails = single,
  dataList = daily,
  liked,
}) => (
  <div className="comp-week-summary container mx-auto mt-10 text-gray-900 bg-gray-400 dark:bg-gray-800 dark:text-white">
    <header className="flex  mx-auto justify-around items-center text-white">
      <div className="flex">
        <img src="" alt="sunny" />
        <div className="">
          <div>city</div>
          <div>temp</div>
        </div>
      </div>
      <button className="flex" onClick={() => undefined}>
        <AiFillHeart color={liked ? 'red' : 'white'} className="w-6 h-6 mr-2" />
        Add/Remove Favorites
      </button>
    </header>
    <div className="text-5xl text-center my-14">
      {cityDetails[0].WeatherText}
    </div>
    <WeatherCards daily={dataList.DailyForecasts} />
  </div>
);

export default WeekSummary;
