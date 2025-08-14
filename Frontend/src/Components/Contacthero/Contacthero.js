import './Contacthero.css';
import React from 'react';
import { FaRoute } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[75vh] bg-gradient-to-b from-white to-[#eaf4ff] text-[#0f3d56] overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Route icon */}
        <FaRoute className="text-[#0f3d56] text-6xl mb-6 animate-pulse" />
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 relative z-10 leading-tight">
          Find the Fastest Way with Flip Route
        </h2>
        
        <p className="text-md sm:text-lg md:text-xl font-medium leading-relaxed text-[#0f3d56] text-opacity-80 mb-8 relative z-10">
          Flip Route helps you discover the shortest and most efficient path between multiple points 
          using real road data. Navigate smarter, save time, and travel with confidence.
        </p>
        
        <button className="mt-4 px-8 py-3 bg-[#0f3d56] text-white font-semibold rounded-full hover:bg-[#0c2e40] transition-colors duration-300 shadow-lg">
          Get Started
        </button>
      </div>
      
      {/* Wave animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 waves"></div>
    </section>
  );
};

export default HeroSection;
