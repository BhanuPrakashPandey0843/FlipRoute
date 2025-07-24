import React, { useEffect } from 'react';
import AmbuLINK from './AmbuLINK.gif'; // Replace with the correct path to your image
import './aos.css';
import AOS from 'aos';

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-b from-[#f8fafb] to-[#e6eff1] py-16 px-6 md:px-12 lg:px-24 space-y-10 lg:space-y-0 lg:space-x-12">
      {/* Left Section: Image */}
      <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0" data-aos="zoom-in" data-aos-delay="200">
        <img 
          src={AmbuLINK} 
          alt="AmbuLINK platform showcasing therapist consulting with a patient" 
          className="rounded-lg shadow-xl w-full max-w-sm lg:max-w-md"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-6" data-aos="fade-left" data-aos-delay="400">
        {/* Heading Section */}
        <h2 className="text-4xl font-bold text-[#165b61] text-center lg:text-left leading-tight">
          What We Do ?
        </h2>
        <p className="text-gray-700 max-w-lg text-center lg:text-left leading-relaxed">
          AmbuLINK is committed to improving emergency healthcare delivery by providing cutting-edge solutions for faster and more efficient response times. Our platform offers quick ambulance booking with live tracking, allowing for precise coordination in critical moments. With real-time route optimization and integrated hospital booking capabilities, we ensure that every second counts, helping to save lives by delivering timely and effective medical assistance when it matters most.
        </p>
        <button 
          className="bg-[#165b61] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#0e3e44] hover:shadow-lg transition-transform transform hover:-translate-y-1"
          aria-label="Find a therapist through AmbuLINK platform"
        >
          Book Ambulance
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
