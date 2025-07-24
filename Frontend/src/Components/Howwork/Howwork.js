import React from 'react';

const Howwork = () => {
  const FlipRouteImage =
    'https://media.giphy.com/media/jt4feJ5xwfoXK/giphy.gif'; //

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      
  
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 z-10">
        
    
        <div className="text-center lg:text-left mb-10 animate-fadeIn">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 leading-snug">
            How <span className="text-teal-600">FlipRoute</span> Works
          </h2>
          <p className="text-gray-600 max-w-xl">
            FlipRoute simplifies last-mile delivery by using AI-powered route optimization, 
            real-time traffic integration, and smart fleet management tools to reduce operational costs 
            and improve on-time deliveries.
          </p>
        </div>
  
        <div className="space-y-6 w-full">
          <StepCard
            title="AI-Powered Route Optimization"
            description="Upload delivery addresses and let FlipRoute generate the most efficient routes, saving time and fuel."
            icon={
              <svg
                className="h-6 w-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17v-4h6v4m-3-4v-4m0-4h.01"
                />
              </svg>
            }
          />

          <StepCard
            title="Multi-Vehicle Fleet Management"
            description="Assign deliveries across multiple vehicles with intelligent workload balancing to maximize efficiency."
            icon={
              <svg
                className="h-6 w-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 00-8 0v4H4v6h16v-6h-4V7z"
                />
              </svg>
            }
          />

          <StepCard
            title="Real-Time Traffic Integration"
            description="FlipRoute adapts to live traffic data, rerouting deliveries dynamically for the fastest possible arrival."
            icon={
              <svg
                className="h-6 w-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 17h2V7h-2M7 17h2V7H7"
                />
              </svg>
            }
          />
        </div>
      </div>

    
      <div className="flex justify-center lg:justify-end lg:w-1/2 relative animate-fadeIn delay-200">
        <img
          src={FlipRouteImage}
          alt="FlipRoute Route Optimization Animation"
          className="rounded-xl shadow-xl w-full max-w-md transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};


const StepCard = ({ title, description, icon }) => (
  <div className="flex items-start bg-white hover:bg-teal-50 shadow-lg rounded-xl p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full">{icon}</div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

export default Howwork;
