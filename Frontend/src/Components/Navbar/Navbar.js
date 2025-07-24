import React, { useState, useEffect, useRef } from "react";
import { AlignJustify, X, User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setIsProfileDropdownOpen(false);
    navigate("/login");
  };

  return (
    <div className="relative z-50">

      <nav className="w-full flex justify-between items-center px-4 md:px-8 lg:px-12 h-16 bg-white shadow-md sticky top-0">
        
  
        <Link to="/" className="flex items-center gap-2">
          <p className="font-bold text-2xl text-customTeal-600 hover:text-customTeal-800 transition-all duration-300">
            <span className="text-black">Flip</span>
            <span>Route</span>
          </p>
        </Link>


        <div className="hidden lg:flex items-center gap-8">
          <NavLinkItem to="/" label="Home" />
          <NavLinkItem to="/optimizer" label="Route Optimizer" />
          <NavLinkItem to="/analytics" label="Analytics" />
          <NavLinkItem to="/about" label="About" />
        </div>


        <div className="hidden lg:flex items-center gap-4">
        
          <Link to="/contact">
            <button className="btn-primary">Contact Us</button>
          </Link>

     
          {!isLoggedIn ? (
            <Link to="/login">
              <button className="btn-secondary">Login</button>
            </Link>
          ) : (
        
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-customTeal-600"
                />
                <User size={20} className="text-customTeal-600" />
              </button>

       
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 animate-fadeIn">
                  <Link
                    to="/profile"
                    className="dropdown-item"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="dropdown-item"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 cursor-pointer transition-transform duration-200 hover:scale-90"
          >
            {isMenuOpen ? <X size={26} /> : <AlignJustify size={26} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-4 animate-slideDown">
          <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
          <MobileNavLink to="/optimizer" label="Route Optimizer" onClick={toggleMenu} />
          <MobileNavLink to="/analytics" label="Analytics" onClick={toggleMenu} />
          <MobileNavLink to="/about" label="About" onClick={toggleMenu} />
          <MobileNavLink to="/contact" label="Contact Us" onClick={toggleMenu} />

          {!isLoggedIn ? (
            <MobileNavLink to="/login" label="Register/Login" onClick={toggleMenu} />
          ) : (
            <>
              <MobileNavLink to="/dashboard" label="Dashboard" onClick={toggleMenu} />
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="mobile-link text-left"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}


      <style>{`
        .nav-link {
          position: relative;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          color: #333;
          transition: all 0.3s ease-in-out;
        }
        .nav-link:hover {
          color: #0f766e;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .dropdown-item {
          display: block;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: #333;
          transition: all 0.3s;
        }
        .dropdown-item:hover {
          background: #f3f4f6;
          color: #0f766e;
        }
        .btn-primary {
          border-radius: 9999px;
          color: white;
          background: #0f766e;
          padding: 0.5rem 1.5rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s, background 0.3s;
        }
        .btn-primary:hover {
          transform: scale(1.05);
          background: #115e59;
        }
        .btn-secondary {
          border-radius: 9999px;
          background: white;
          color: black;
          padding: 0.5rem 1.5rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s, background 0.3s;
        }
        .btn-secondary:hover {
          transform: scale(1.05);
          background: #f1f5f9;
        }
        .mobile-link {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
          transition: all 0.3s;
        }
        .mobile-link:hover {
          color: #0f766e;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};


const NavLinkItem = ({ to, label }) => (
  <Link to={to} className="nav-link">
    {label}
  </Link>
);


const MobileNavLink = ({ to, label, onClick }) => (
  <Link to={to} onClick={onClick} className="mobile-link w-full">
    {label}
  </Link>
);

export default Navbar;
