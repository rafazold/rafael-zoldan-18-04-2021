import React from 'react';
import logo from '../images/weather-logo.png';
import {NavLink} from 'react-router-dom'
import Toggle from './Toggle.jsx';

const Header = () => (
  <header className="comp-header w-full fixed top-0 flex items-center h-20 z-100 bg-gray-300 dark:text-white dark:bg-gray-900">
    <div className="container mx-auto flex justify-between items-center">
      <NavLink to="/" activeClassName='flex items-center text-3xl'>
        <div className='text-3xl mr-6 font-bold'>Weather App</div>
        <img src={logo} alt="Logo" className='h-14 my-auto' />
      </NavLink>
      <div className='flex'>
        <ul className="flex space-x-4 font-bold text-xl">
        <li>
          <NavLink to="/" exact activeClassName="h-10">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" activeClassName="h-10">
            Favorites
          </NavLink>
        </li>
      </ul>
        <Toggle className='ml-6' />
      </div>
    </div>
  </header>
);

export default Header;
