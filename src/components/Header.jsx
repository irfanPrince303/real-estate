import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

function Header() {
  return (
    <div className="py-6 mb-3 border-b">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link to="/home" className="imageContainer">
          <img src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          {/* <Link to="/Login" className="text-sm sm:text-base hover:text-violet-800 transition">Log in</Link> */}
          <Link to="/" className="bg-violet-700 hover:bg-violet-800 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition">Log out</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
