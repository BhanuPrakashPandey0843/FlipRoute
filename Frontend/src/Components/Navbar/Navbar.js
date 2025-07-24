import React, { useState, useEffect } from 'react';
import { AlignJustify, X, User } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); 
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setIsProfileDropdownOpen(false);
    navigate('/login');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center px-4 md:px-6 lg:px-10 h-16 bg-white shadow-md relative z-20">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <p className="font-bold text-2xl text-customTeal-600 transition-all duration-300 hover:text-customTeal-800">
            <span>Ambu</span>
            <span>LINK</span>
          </p>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-black">
          <Link
            to="/"
            className="relative cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
          >
            Home
          </Link>
          <Link
            to="/track"
            className="relative cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
          >
            Live Tracking
          </Link>
          <Link
            to="/bookambulance"
            className="relative cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
          >
            Book Ambulances
          </Link>
          <Link
            to="/hospital"
            className="relative cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
          >
            Hospital
          </Link>
          <Link
            to="/about"
            className="relative cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
          >
            About
          </Link>

          {/* Conditional Rendering for Logged-in State */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="relative cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
            >
              Register/Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img
                  src="https://via.placeholder.com/40" // Replace with dynamic profile image source
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-customTeal-600"
                />
                <User size={20} className="text-customTeal-600" />
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-30">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-customTeal-600"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-customTeal-600"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-customTeal-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Contact and Made By buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact">
            <button className="rounded-full text-white bg-customTeal px-6 py-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-customTeal-700">
              Contact-Us
            </button>
          </Link >
          <Link to="/madeby">
          <button className="rounded-full text-black bg-white-600 px-6 py-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-customTeal-700">
            Made By
          </button>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 cursor-pointer transition-transform duration-200 hover:scale-90"
          >
            {isMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-20 flex flex-col items-start px-6 py-4 space-y-4 text-black">
          <Link
            to="/"
            className="cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/live-tracking"
            className="cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
            onClick={toggleMenu}
          >
            Live Tracking
          </Link>
          <Link
            to="/book-ambulances"
            className="cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
            onClick={toggleMenu}
          >
            Book Ambulances
          </Link>
          <Link
            to="/hospital"
            className="cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
            onClick={toggleMenu}
          >
            Hospital
          </Link>
          <Link
            to="/about"
            className="cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
            onClick={toggleMenu}
          >
            About
          </Link>

          <Link to="/contact" onClick={toggleMenu}>
            <button className="w-full rounded-full text-white bg-customTeal px-6 py-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-customTeal-700">
              Contact-Us
            </button>
          </Link>
          <Link to="/madeby" onClick={toggleMenu}>
          <button className="w-full rounded-full text-black bg-white px-6 py-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-customTeal-700">
            Made By
          </button>
          </Link>

          {/* Conditional rendering for login/logout in mobile view */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
              onClick={toggleMenu}
            >
              Register/Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="cursor-pointer text-lg font-medium transition-all duration-300 ease-in-out text-gray-800 hover:text-customTeal-600 hover:underline hover:underline-offset-4"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
