import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import bannerGif from './banner.gif'; // Import the GIF if it's in src

const Banner = () => {
  return (
    <div className="relative bg-customTeal min-h-[80vh] flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Background Animation */}
      <div className="absolute w-full h-full bg-gradient-to-r from-customTeal via-gray-100 to-customTeal opacity-20 transform rotate-45 scale-125 animate-spin-slow"></div>

      {/* Ambulance GIF */}
      <div className="relative w-48 h-48 bg-white rounded-full shadow-xl transform hover:rotate-3 transition-transform duration-500 ease-in-out z-10 mb-6 animate-bounce-slow">
        <img
          src={bannerGif} // Ensure the correct image path
          alt="Ambulance"
          className="w-full h-full object-cover p-3 rounded-full"
        />
      </div>

      {/* Text Content */}
      <div className="text-center z-20 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-2 transform transition duration-500 hover:scale-105">
          Ambulance Booking Service
        </h1>
        <p className="text-base text-white max-w-md mx-auto mb-4">
          Reliable and quick ambulance service, just a click away. Call us for immediate assistance!
        </p>
        <Link to="/login">
          <button className="bg-white text-customTeal px-5 py-2 rounded-full font-bold shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
