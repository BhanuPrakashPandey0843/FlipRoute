import React from "react";

// Reusable Input Component
const InputField = ({ label, id, placeholder, type = "text" }) => {
  return (
    <div className="mb-1 sm:mb-2">
      <label htmlFor={id} className="inline-block mb-1 font-medium">
        {label}
      </label>
      <input
        placeholder={placeholder}
        required
        type={type}
        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-600 focus:outline-none focus:shadow-outline"
        id={id}
        name={id}
      />
    </div>
  );
};

// Reusable SVG Wave Component
const SvgWave = () => {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 text-white"
      viewBox="0 0 1160 163"
    >
      <path
        fill="currentColor"
        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
      />
    </svg>
  );
};

// Header Component
export const Header = () => {
  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt="Nature background"
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <SvgWave />
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row animate-fade-in">
            {/* Left Section */}
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in-up">
                Find and Book Hospital Beds <br className="hidden md:block" />
                in Real-Time
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg opacity-0 transition-opacity duration-1000 ease-in-out delay-200 animate-fade-in-up">
                Ensure timely care with AmbuLINK’s Hospital Bed Booking system.
                In just a few clicks, secure a bed in the nearest hospital based
                on real-time availability. Avoid long waits and ensure the right
                care is available when you need it.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-semibold tracking-wider text-teal-accent-400 transition-colors duration-200 hover:text-teal-accent-700 opacity-0 animate-fade-in-up delay-300"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            {/* Right Section - Form */}
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10 transition-transform transform hover:scale-105 duration-300">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Find and Book Hospital Beds
                </h3>
                <form>
                  <InputField
                    label="Patient Name"
                    id="patientName"
                    placeholder="John"
                  />
                  <InputField
                    label="Your Name"
                    id="yourName"
                    placeholder="Doe"
                  />
                  <InputField
                    label="Phone Number"
                    id="phoneNumber"
                    placeholder="(123) 456-7890"
                    type="tel"
                  />
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
                    >
                      Book
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Don’t wait – book a hospital bed now and get the care you
                    deserve, faster!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export default Header so it can be imported as a default export in other files
export default Header;
