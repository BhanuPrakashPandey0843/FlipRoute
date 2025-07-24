import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const TherapyComparison = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center py-20 px-5">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-300">
        
        {/* AmbuLINK - Paid Section */}
        <div className="bg-gradient-to-r from-[#1b6f73] to-[#165b61] text-white p-12 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-gradient-to-br hover:from-[#165b61] hover:to-[#1b6f73] animate-fade-in">
          <h2 className="text-center text-4xl font-extrabold mb-10 tracking-wide">
            AmbuLINK - Paid
          </h2>
          <ul className="space-y-6">
            {[
              { text: 'Real-Time Ambulance Tracking', available: true },
              { text: 'Optimized Route Planning', available: false },
              { text: 'Emergency Booking System', available: true },
              { text: 'Hospital Capacity Integration', available: true },
              { text: 'Live Traffic Updates', available: true },
              { text: 'Automated Dispatching', available: true },
              { text: 'Pre-Arrival Hospital Notifications', available: true },
              { text: 'Patient Medical History Sharing', available: true },
              { text: 'Resource Allocation Management', available: true },
              { text: 'Incident Reporting and Analytics', available: true },
              { text: 'Mobile Application for Responders', available: true },
              { text: 'Real-Time Ambulance Tracking', available: true },
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

        {/* AmbuLINK - Unpaid Section */}
        <div className="bg-gradient-to-r from-[#1b6f73] to-[#165b61] text-white p-12 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-gradient-to-br hover:from-[#165b61] hover:to-[#1b6f73] animate-fade-in">
          <h2 className="text-center text-4xl font-extrabold mb-10 tracking-wide">
            AmbuLINK - Unpaid
          </h2>
          <ul className="space-y-6">
            {[
                  { text: 'Real-Time Ambulance Tracking', available: true },
                  { text: 'Optimized Route Planning', available: false },
                  { text: 'Emergency Booking System', available: true },
                  { text: 'Hospital Capacity Integration', available: false },
                  { text: 'Live Traffic Updates', available: false },
                  { text: 'Automated Dispatching', available: false },
                  { text: 'Pre-Arrival Hospital Notifications', available: false },
                  { text: 'Patient Medical History Sharing', available: false },
                  { text: 'Resource Allocation Management', available: false },
                  { text: 'Incident Reporting and Analytics', available: false },
                  { text: 'Mobile Application for Responders', available: false },
                  { text: 'Real-Time Ambulance Tracking', available: false },
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

export default TherapyComparison;
