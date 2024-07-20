//import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="#"
          className={`text-white text-2xl font-bold ${currentPath === '/' ? 'text-blue-500' : ''}`}
        >
          Auth App
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className={`text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/' ? 'bg-blue-500' : 'hover:bg-gray-700'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/about' ? 'bg-blue-500' : 'hover:bg-gray-700'}`}
          >
            About
          </Link>
          <Link
            to="/sign-in"
            className={`text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/services' ? 'bg-blue-500' : 'hover:bg-gray-700'}`}
          >
            SignIn
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
