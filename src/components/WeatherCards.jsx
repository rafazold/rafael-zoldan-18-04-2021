import React from 'react';
import moment from 'moment';
const requestImageFile = require.context('../images', true, /.png$/);


const WeatherCards = ({daily=[]}) => (
    <div className='flex justify-around'>
            {daily.map((day, i) => 
                <div key={day.EpochDate + i} className='bg-gray-700 rounded-md p-4 text-gray-400 text-center text-2xl h-56 flex flex-col justify-between'>
                    <div>{moment(day.Date).format("ddd")}</div>
                    <img src={requestImageFile(`./weather-icons/${day.Day.Icon}.png`).default} alt=""/>
                    <div className='flex space-x-4'>
                        <div>
                            <span>
                                {day.Temperature.Minimum.Value}
                            </span>
                            
                            <span>
                                {day.Temperature.Minimum.Unit}
                            </span>
                        </div>
                        <span>-</span>
                        <div>
                            <span>
                                {day.Temperature.Maximum.Value}
                            </span>
                            
                            <span>
                                {day.Temperature.Maximum.Unit}
                            </span>
                        </div>

                    </div>
                </div>
            )}
        </div>
)

export default WeatherCards;