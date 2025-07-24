import React from 'react';
import AmbuLINK from './AmbuLINK.png';

const Howwork = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-16 px-6 md:px-12 lg:px-24">
      
      {/* Left Section: Steps */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
        {/* Heading Section */}
        <div className="text-center lg:text-left mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          What We Do at AmbuLINK ?
          </h2>
          <p className="text-gray-600 max-w-xl">
           At AmbuLINK, we streamline emergency medical response by offering seamless ambulance booking and live tracking, advanced real-time route optimization, and efficient hospital booking with up-to-date capacity information. Our solutions ensure rapid, coordinated care and improved response times, ultimately enhancing patient outcomes.
          </p>
        </div>
        
        {/* Steps Section */}
        <div className="grid grid-cols-1 gap-8">
          {/* Step 1 */}
          <div className="flex items-start bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
              {/* Icon Placeholder */}
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l-2-2m0 0l-2 2m2-2V4m0 0l2-2m-2 2h10"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">Ambulance Booking & Live Tracking. </h3>
              <p className="text-gray-600 mt-2">
              Seamlessly book ambulances and track their live location for efficient emergency response.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start bg-teal-600 shadow-lg rounded-lg p-4 text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0 bg-white p-3 rounded-full">
              {/* Icon Placeholder */}
              <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a2 2 0 100-4 2 2 0 000 4zm-6 2a6 6 0 016 6v4H4v-4a6 6 0 016-6z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Real-Time Route Optimization System.</h3>
              <p className="mt-2">
              Optimize ambulance routes in real-time to ensure the fastest arrival during emergencies.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
            <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
              {/* Icon Placeholder */}
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 14h.01M16 18h.01M21 12h.01M12 4h.01M3 12h.01M12 21h.01"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">Hospital Booking System.</h3>
              <p className="text-gray-600 mt-2">
              Efficiently manage hospital bookings and coordinate resources with real-time capacity updates and pre-arrival notifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex justify-center lg:justify-end lg:w-1/2">
        <img 
          src={AmbuLINK} 
          alt="Therapist consulting with a patient" 
          className="rounded-lg shadow-lg w-full max-w-md" 
        />
      </div>
    </div>
  );
};

export default Howwork;
