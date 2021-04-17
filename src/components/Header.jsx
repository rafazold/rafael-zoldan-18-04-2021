import React from 'react';
// import logo from '';
import {NavLink} from 'react-router-dom'

const Header = () => (
  <header className="comp-header w-full bg-gray-400 text-white fixed top-0 flex h-16 z-100">
    <ul className="flex space-x-4 font-bold mb-4 max-w-screen-xl w-full m-auto ">
      <li>
        <NavLink to="/" exact activeClassName="text-white h-10">
          {/* <img src={logo} alt="Logo" className='h-6' /> */}
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorite" activeClassName="text-white h-10">
          favorite
        </NavLink>
      </li>
      <li>
          popular
      </li>
    </ul>
    <form onSubmit={(e) => {{
      alert('hello world')
      e.preventDefault}}} >
      <input type="text" value=""/>
      <button type="submit"/>
    </form>
  </header>
);

export default Header;
