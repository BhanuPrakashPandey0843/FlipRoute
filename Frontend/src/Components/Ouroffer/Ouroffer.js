import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const FlipRouteComparison = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center py-20 px-5">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300">
        
       
        <div className="bg-gradient-to-r from-[#0f766e] to-[#115e59] text-white p-12 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-gradient-to-br hover:from-[#115e59] hover:to-[#0f766e]">
          <h2 className="text-center text-4xl font-extrabold mb-10 tracking-wide">
            FlipRoute <span className="text-[#00E7C1]">Premium</span>
          </h2>
          <ul className="space-y-6">
            {[
              { text: 'AI-Powered Route Optimization', available: true },
              { text: 'Multi-Vehicle Fleet Optimization', available: true },
              { text: 'Real-Time Traffic Integration', available: true },
              { text: 'Google Maps & Distance Matrix API Support', available: true },
              { text: 'Fuel & Time Cost Estimation', available: true },
              { text: 'Live Route Recalculation', available: true },
              { text: 'Advanced Delivery Analytics & Reports', available: true },
              { text: 'Custom Delivery Constraints (Time Windows, Capacity)', available: true },
              { text: 'CSV Import/Export for Delivery Locations', available: true },
              { text: 'Cloud Storage & Route History', available: true },
              { text: 'Priority Customer Support', available: true },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-lg">
                <span
                  aria-hidden="true"
                  className="text-2xl text-green-300"
                >
                  <FaCheckCircle />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#0f766e] to-[#115e59] text-white p-12 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-gradient-to-br hover:from-[#115e59] hover:to-[#0f766e]">
          <h2 className="text-center text-4xl font-extrabold mb-10 tracking-wide">
            FlipRoute <span className="text-gray-300">Free</span>
          </h2>
          <ul className="space-y-6">
            {[
              { text: 'AI-Powered Route Optimization', available: true },
              { text: 'Multi-Vehicle Fleet Optimization', available: false },
              { text: 'Real-Time Traffic Integration', available: false },
              { text: 'Google Maps & Distance Matrix API Support', available: false },
              { text: 'Fuel & Time Cost Estimation', available: false },
              { text: 'Live Route Recalculation', available: false },
              { text: 'Advanced Delivery Analytics & Reports', available: false },
              { text: 'Custom Delivery Constraints (Time Windows, Capacity)', available: false },
              { text: 'CSV Import/Export for Delivery Locations', available: false },
              { text: 'Cloud Storage & Route History', available: false },
              { text: 'Priority Customer Support', available: false },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-lg">
                <span
                  aria-hidden="true"
                  className={`text-2xl ${item.available ? 'text-green-300' : 'text-red-400'}`}
                >
                  {item.available ? <FaCheckCircle /> : <FaTimesCircle />}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default FlipRouteComparison;
