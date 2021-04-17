import React from 'react';
import data from '../../example_db.json'
import {AiFillHeart} from 'react-icons/ai'
import WeatherCards from './WeatherCards.jsx';


const daily = data.daily;
const single = data.single;

const WeekSummary = () => (
    <div className='comp-weekly-summary container mx-auto mt-10' >
        <header className='container flex justify-between items-center text-white'>
            <div className='flex'>
                <img src="" alt="sunny"/>
                <div className=''>
                    <div>city</div>
                    <div>temp</div>
                </div>
            </div>
            <div>
                <AiFillHeart color={'white'} />
                <button onClick={() => undefined}>Add to Favorites</button>
            </div>
        </header>
        <div className='text-white text-5xl text-center my-14'>{single[0].WeatherText}</div>
        <WeatherCards daily={daily.DailyForecasts} />
    </div>
);

export default WeekSummary;