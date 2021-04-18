import React, { useState } from 'react';
import WeekSummary from '../components/WeekSummary.jsx';
import search from '../images/search.png'

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleOnChange = (e) => {
    const reg = /^[a-zA-Z]*$/i;
    reg.test(e.currentTarget.value) && setSearchValue(e.currentTarget.value);
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(searchValue)
  }
  return (
  <div className='comp-home bg-gray-400 dark:bg-gray-800 py-20 h-full'>
      <h1 className="text-6xl text-center mt-8 dark:text-white">
        Weather App
      </h1>
      <form className='text-center mt-8' onSubmit={handleSubmit} >
          <label className='relative'>
            <input type="text" 
              className='pl-8 rounded-md text-3xl'
              onChange={handleOnChange} 
              value={searchValue}
              placeholder='search any city...'/>
            <button className='absolute left-0 ml-1 bottom-0' type="submit">
              <img className='w-6 h-6' src={search} alt="magnifying glass"/>
            </button>
          </label>
      </form>
      <WeekSummary />
  </div>
);}

export default Home;