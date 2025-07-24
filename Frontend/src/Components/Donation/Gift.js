import React from "react";
import './GiftMembership.css'; // Custom CSS for enhanced 3D effects and animations
import AmbuLINK from './AmbuLINK.png'; 

const Gift = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#003B34] to-[#002B27] relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient"></div>

      {/* Main Container with 3D Effects */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#003b34] text-white p-10 rounded-xl shadow-2xl w-[90%] md:w-[80%] lg:w-[70%] transform transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:shadow-lg hover:shadow-[#004F3C]/50 hover:z-10 mt-10 md:mt-0 mx-4 md:mx-0">

        {/* Text Section */}
        <div className="flex flex-col space-y-6 md:w-1/2 z-20 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Give the gift of a
            <br />
            <span className="text-[#FFB300]">AmbuLINK membership</span>
          </h1>
          <p className="text-[#bccdce] text-base md:text-lg">
            Give the gift of safety with an AmbuLINK membership. This thoughtful present provides access to real-time ambulance tracking, optimized routing, and efficient hospital booking, ensuring immediate and effective medical support when it matters most. Choose AmbuLINK to enhance your loved ones' emergency care and peace of mind.
          </p>
          <button className="w-auto bg-[#FFB300] text-white font-semibold px-2 py-1 text-sm rounded shadow-md hover:bg-[#007060] transform hover:translate-y-0.5 hover:shadow-lg transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#007060] focus:ring-opacity-50">
            Gift a membership
          </button>
        </div>

        {/* Image Section with Enhanced 3D Effect */}
        <div className="relative md:w-1/2 flex justify-center mt-4 md:mt-0 perspective-1000 overflow-hidden md:ml-8">
          <div className="gift-box-container transition-transform duration-700 transform hover:rotate-x-12 hover:rotate-y-12">
            <img
              src={AmbuLINK} 
              alt="Gift Box"
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
