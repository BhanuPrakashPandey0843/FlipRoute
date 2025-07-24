import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <section className="relative w-full h-full min-h-screen bg-gradient-to-r from-green-50 to-green-100 pb-10">
        {/* Hero Main Content */}
        <main className="w-full h-full relative flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <section className="w-full lg:w-1/2 flex flex-col items-start justify-center px-5 lg:px-20 py-10 space-y-5">
            <h1 className="text-5xl lg:text-6xl text-customTeal font-extrabold text-customTeal-600 animate-slideInLeft">
              Guiding Heroes  
            </h1>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-customTeal animate-slideInLeft delay-100">
              Through the
            </h1>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-customTeal animate-slideInLeft delay-200">
              Fastest Paths to Hope.
            </h1>
            <p className="max-w-md text-gray-600 lg:text-lg animate-fadeIn delay-300">
              Welcome to AmbuLINK, where innovation meets compassion. Our advanced Emergency Medical Response System ensures that ambulances reach those in need with unmatched speed and accuracy. By leveraging real-time traffic data, intelligent route optimization, and seamless hospital integration, we empower emergency responders to save more lives, faster. When every second matters, trust AmbuLINK to guide the way.
            </p>
            <div className="flex items-center gap-4">
              <button className="rounded-full text-white bg-customTeal px-2 py-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-customTeal-700 w-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started
              </button>
              <span className="underline text-customTeal-600 cursor-pointer hover:text-green-600 transition-all duration-300">
                Learn More
              </span>
            </div>
          </section>

          {/* Image Section */}
          <section className="relative w-full lg:w-1/2 flex items-center justify-center p-10">
            <img 
              src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
              alt="Emergency medical response team"
              className="h-auto w-full object-cover rounded-xl shadow-lg transform hover:rotate-1 hover:scale-105 transition-all duration-500"
            />
          </section>
        </main>
      </section>
    </div>
  );
}

export default Hero;
