import React from "react";
import ambulancebookingbackgroundImage from './ambulancebookingbackgroundImage.gif';

const AmbulanceHomeSection = () => {
  return (
    <section className="w-full">
      <div
        className="w-full h-[400px] md:h-[450px] lg:h-[500px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${ambulancebookingbackgroundImage})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Photo by '@insolitus' on Unsplash */}
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold bg-gray-900 bg-opacity-50 p-3 rounded-md shadow-lg">
            Ambulance at Your Doorstep
          </h1>
        </div>
        <div className="w-full mx-auto mt-4">
          <form className="w-full flex justify-center">
            <div className="flex w-[85%] md:w-[65%] lg:w-[50%] gap-2">
              <input
                type="text"
                className="border border-gray-300 w-full p-2 md:p-3 text-base md:text-lg rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
                placeholder="Enter your location..."
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-base px-4 py-2 md:py-3 rounded-md font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AmbulanceHomeSection;
