import React from 'react';

const Counter = () => {
  return (
    <div className="bg-[#165b61] text-white py-12 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-16">
      {/* Left Section with Title and Scroll Indicator */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 transform transition-transform duration-500 hover:scale-105">
          Experience the speed of technology and the power of compassion with AmbuLINK—because every second counts in saving lives.
        </h1>
        <p className="hidden md:block text-base md:text-lg text-gray-300 tracking-wide mb-4 transform transition-transform duration-500 hover:translate-x-2">
          Scroll Down
        </p>
        <div className="mt-2 animate-bounce transform hover:translate-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Right Section with Content and Statistics */}
      <div className="text-center md:text-left max-w-2xl">
        <p className="mb-8 text-lg md:text-xl text-gray-100 leading-relaxed transform transition-transform duration-500 hover:scale-105">
          Thank you for considering AmbuLINK for your emergency response needs. We are excited to collaborate with you on developing an innovative solution that can truly make a difference in critical moments. Our goal is to create a state-of-the-art system that not only optimizes ambulance routes in real-time but also integrates seamlessly with hospital databases and tracks ambulance movements live.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
          <CounterStat number="408K+" description="People who have started therapy" />
          <CounterStat number="33K+" description="Credentialed ready to help" />
          <CounterStat number="3M+" description="Messages and live sessions" />
        </div>
      </div>
    </div>
  );
};

// Reusable component for each stat block with improved contrast and hover effects
const CounterStat = ({ number, description }) => (
  <div className="flex flex-col items-center md:items-start transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg p-6 rounded-lg bg-white">
    <h2 className="text-3xl md:text-4xl font-bold text-black">{number}</h2>
    <p className="text-base md:text-lg text-black">{description}</p>
  </div>
);

export default Counter;
