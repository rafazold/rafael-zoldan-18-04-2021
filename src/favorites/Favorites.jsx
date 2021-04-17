import React from 'react';
import FavoriteCards from '../components/FavoriteCards.jsx';
import data from '../../example_db.json'

const cities = data.single;

const Favorites = () => (
    <div className='pt-20' >
        <FavoriteCards citiesData={cities} />
    </div>
);

export default Favorites;