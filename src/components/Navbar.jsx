import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold"><NavLink to="/">Portfolio</NavLink></h1>
        <ul className="flex space-x-4">
          <li><a href="https://github.com/splmloic" className="text-white hover:text-gray-300" activeClassName="font-bold">Github</a></li>
          <li><NavLink to="/" className="text-white hover:text-gray-300" activeClassName="font-bold">Home</NavLink></li>
          <li><NavLink to="/projects" className="text-white hover:text-gray-300" activeClassName="font-bold">Projects</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;