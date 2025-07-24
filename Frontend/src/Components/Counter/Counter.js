import React from 'react';
import { FaRoute, FaGasPump, FaClock } from 'react-icons/fa';

const Counter = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f766e] via-[#115e59] to-[#083b35] text-white py-16 px-6 md:px-16">
      
      
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_60%)]"></div>

 
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
      
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
            Deliver Smarter with <span className="text-[#00E7C1]">FlipRoute</span>
          </h1>
          <p className="text-lg text-teal-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
            FlipRoute uses AI-powered route optimization to reduce delivery time, save fuel, and increase efficiency. 
            Trusted by logistics companies and e-commerce businesses to plan smarter routes in seconds.
          </p>

          <div className="mt-4 flex justify-center lg:justify-start animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00E7C1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 justify-center lg:justify-start">
          <CounterStat 
            icon={<FaRoute className="text-[#00E7C1]" size={32} />} 
            number="50K+" 
            description="Optimized Delivery Routes" 
          />
          <CounterStat 
            icon={<FaGasPump className="text-[#00E7C1]" size={32} />} 
            number="20%" 
            description="Average Fuel Cost Saved" 
          />
          <CounterStat 
            icon={<FaClock className="text-[#00E7C1]" size={32} />} 
            number="99%" 
            description="Improved On-Time Deliveries" 
          />
        </div>

      </div>
    </section>
  );
};


const CounterStat = ({ icon, number, description }) => (
  <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
    <div className="mb-3">{icon}</div>
    <h2 className="text-3xl font-bold text-white">{number}</h2>
    <p className="text-sm md:text-base text-teal-100 mt-2">{description}</p>
  </div>
);

export default Counter;
