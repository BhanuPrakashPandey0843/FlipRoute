import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden">
        
    
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#0f766e]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#0f766e]/10 rounded-full blur-3xl"></div>


        <main className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-10">
          
     
          <section className="flex flex-col items-start justify-center w-full lg:w-1/2 space-y-6 animate-slideInLeft">
      
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              <span className="text-[#0f766e]">Last Mile</span> <br />
              <span className="text-[#0f766e]">Delivery Route</span> <br />
              <span className="bg-gradient-to-r from-[#0f766e] to-green-600 text-transparent bg-clip-text">
                Optimization
              </span>
            </h1>

       
            <p className="max-w-md text-gray-700 text-lg leading-relaxed animate-fadeIn animation-delay-200">
              <strong className="text-[#0f766e]">FlipRoute</strong> is a smart <strong>route optimization tool</strong> 
              that calculates the most efficient delivery paths for last-mile logistics. 
              It reduces travel time, saves fuel costs, and improves delivery efficiency 
              for e-commerce and logistics companies.
            </p>

       
            <div className="flex items-center gap-4 mt-4 animate-fadeIn animation-delay-300">
              <button className="rounded-full text-white font-medium bg-[#0f766e] px-6 py-3 shadow-lg hover:shadow-2xl hover:bg-[#0d5e55] transform hover:-translate-y-1 transition-all duration-300">
                 Get Started
              </button>
              <button className="rounded-full border-2 border-[#0f766e] text-[#0f766e] font-medium px-6 py-3 hover:bg-[#e6f4f2] hover:shadow-md transition-all duration-300">
                Learn More →
              </button>
            </div>
          </section>

          <section className="relative w-full lg:w-1/2 flex justify-center items-center animate-slideInRight animation-delay-200">
            <div className="relative group">
              
       
              <div className="absolute inset-0 bg-transparent rounded-xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

              <img
                src="https://log-hub.com/wp-content/uploads/2024/03/daa_route_optimization-scaled.webp"
                alt="Route Optimization"
                className="relative z-10 w-full max-w-lg rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Hero;
