import React, { useEffect, useState } from 'react';
import WeekSummary from '../components/WeekSummary.jsx';
import search from '../images/search.png';
import { useSelector } from 'react-redux';
import axios from 'axios';
import data from '../../example_db.json';

const Home = () => {
  // tlv ' 215854'
  const baseUrl = 'http://dataservice.accuweather.com';
  const selected =
    useSelector((state) => state.preferences.selectedCity) || '215854';
  const available = useSelector((state) => state.preferences.availableCities);
  const [selectedDetails, setSelectedDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (
      Object(available).keys === undefined ||
      !Object(available).keys.includes(selected)
    ) {
      // axios
      // .get(
      //   `${baseUrl}/currentconditions/v1/${selected}?apikey=${process.env.AW_API}`
      // )
      // .then((res) => {
      //   setSelectedDetails(res.data[0]);
      setLoading(false);
      // });
    } else {
      setSelectedDetails(available[selected]);
      setLoading(true);
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
    <div className="comp-home bg-gray-400 dark:bg-gray-800 py-20 h-screen">
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
      {loading ? 'Loading...' : <WeekSummary />}
    </div>
  );
};

export default Home;
