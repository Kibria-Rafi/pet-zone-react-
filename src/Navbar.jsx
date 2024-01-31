import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Brand</div>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-white lg:flex-grow text-center">
            <NavLink
              to="/"
              className="block lg:inline-block mt-4 lg:mt-0 mx-4 text-white"
              activeClassName="bg-yellow-500 text-black px-2 py-1 rounded"
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="block lg:inline-block mt-4 lg:mt-0 mx-4 text-white"
              activeClassName="bg-yellow-500 text-black px-2 py-1 rounded"
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className="block lg:inline-block mt-4 lg:mt-0 mx-4 text-white"
              activeClassName="bg-yellow-500 text-black px-2 py-1 rounded"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block lg:inline-block mt-4 lg:mt-0 mx-4 text-white"
              activeClassName="bg-yellow-500 text-black px-2 py-1 rounded"
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className="block lg:inline-block mt-4 lg:mt-0 mx-4 text-white"
              activeClassName="bg-yellow-500 text-black px-2 py-1 rounded"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="block lg:inline-block mt-4 lg:mt-0 mx-4 text-white"
              activeClassName="bg-yellow-500 text-black px-2 py-1 rounded"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
