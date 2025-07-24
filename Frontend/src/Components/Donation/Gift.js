import React from "react";
import "./GiftMembership.css"; 
import FlipRouteImage from "./AmbuLINK.png"; // Replace with a FlipRoute-related image

const Gift = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#004F48] to-[#002F2B] relative overflow-hidden">
      {/* Dynamic Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient"></div>

      {/* Main Container with 3D Effect */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#003b34] text-white p-10 rounded-xl shadow-2xl w-[90%] md:w-[85%] lg:w-[75%] transform transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-lg hover:shadow-[#007060]/50 mx-4 md:mx-0">

        {/* Text Section */}
        <div className="flex flex-col space-y-6 md:w-1/2 z-20 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Deliver Smarter with  
            <br />
            <span className="text-[#00E7C1]">FlipRoute Optimization</span>
          </h1>

          <p className="text-[#d2e7e5] text-base md:text-lg">
            FlipRoute is an intelligent last-mile delivery optimization tool that calculates the most efficient delivery routes. 
            Save time, cut fuel costs, and improve logistics efficiency with AI-powered route planning for e-commerce and logistics businesses.
          </p>

          <button className="w-auto bg-[#00E7C1] text-black font-semibold px-4 py-2 text-base rounded shadow-md hover:bg-[#00c7a5] transform hover:translate-y-0.5 hover:shadow-lg transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#00E7C1] focus:ring-opacity-50">
            Try Route Optimization
          </button>
        </div>

        {/* Image Section with 3D Hover Effect */}
        <div className="relative md:w-1/2 flex justify-center mt-4 md:mt-0 perspective-1000 overflow-hidden md:ml-8">
          <div className="gift-box-container transition-transform duration-700 transform hover:rotate-x-12 hover:rotate-y-12">
            <img
              src={FlipRouteImage}
              alt="FlipRoute Optimization Preview"
              className="gift-box rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full gift-box-decoration pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
