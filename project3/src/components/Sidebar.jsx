// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen text-black fixed">
      <div className="p-6">
        <nav>
          <NavLink 
            exact 
            to="/" 
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100" 
            activeClassName="bg-gray-700"
          >
          DropDown
          </NavLink>
          <NavLink 
            to="/accordian" 
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100" 
            activeClassName="bg-gray-700"
          >
            Accordian
          </NavLink>
          <NavLink 
            to="/buttons" 
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100" 
            activeClassName="bg-gray-700"
          >
            Buttons
          </NavLink>
          <NavLink 
            to="/model" 
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100" 
            activeClassName="bg-gray-700"
          >
            Model
          </NavLink>
          <NavLink 
            to="/table" 
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100" 
            activeClassName="bg-gray-700"
          >
            Table
          </NavLink>
          <NavLink 
            to="/counter" 
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100" 
            activeClassName="bg-gray-700"
          >
            Counter
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
