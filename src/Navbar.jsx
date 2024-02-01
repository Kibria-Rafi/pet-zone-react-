import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" font-bold text-xl text-yellow-400">PET<span className="text-white">Zone</span> </div>

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
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-white lg:flex-grow lg:flex lg:gap-6  text-center">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400  " : ""
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400 " : ""
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/favorite"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
              }
            >
              Favorite
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/Register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
              }
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
