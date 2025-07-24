import './Contacthero.css';
import React from 'react';
import { FaStethoscope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[75vh] bg-gradient-to-b from-white to-[#e5f7f8] text-[#165b61] overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Medical icon with updated styling */}
        <FaStethoscope className="text-[#165b61] text-6xl mb-6 animate-pulse" />
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 relative z-10 leading-tight">
          Your Health, Our Priority
        </h2>
        <p className="text-md sm:text-lg md:text-xl font-medium leading-relaxed text-[#165b61] text-opacity-80 mb-8 relative z-10">
          Providing comprehensive and compassionate care for all your medical needs. Experience top-notch healthcare services with our dedicated professionals.
        </p>
        <button className="mt-4 px-8 py-3 bg-[#165b61] text-white font-semibold rounded-full hover:bg-[#134a4d] transition-colors duration-300 shadow-lg">
          Contact Us
        </button>
      </div>
      {/* Updated wave animation with better visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-32 waves"></div>
    </section>
  );
};

export default HeroSection;
