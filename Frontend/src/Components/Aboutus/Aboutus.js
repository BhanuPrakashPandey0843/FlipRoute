import React, { useEffect } from "react";
import "./aos.css";
import AOS from "aos";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // ✅ Use the GIF URL directly
  const FlipRouteGif =
    "https://i.pinimg.com/originals/98/69/5a/98695a1cb29719ed82a557da2c5ca3fa.gif";

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-b from-[#f8fafb] to-[#e6eff1] py-16 px-6 md:px-12 lg:px-24 space-y-10 lg:space-y-0 lg:space-x-12 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Left Section: GIF Image */}
      <div
        className="flex justify-center lg:w-1/2 mb-8 lg:mb-0 z-10"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={FlipRouteGif}
          alt="FlipRoute AI route optimization preview"
          className="rounded-xl shadow-xl w-full max-w-sm lg:max-w-md hover:scale-105 transform transition-transform duration-500"
        />
      </div>

      {/* Right Section: Content */}
      <div
        className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-6 z-10"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h2 className="text-4xl font-bold text-[#0f766e] text-center lg:text-left leading-snug">
          What is <span className="text-[#00c7a5]">FlipRoute</span>?
        </h2>

        <p className="text-gray-700 max-w-lg text-center lg:text-left leading-relaxed">
          FlipRoute revolutionizes last-mile delivery by using{" "}
          <strong>AI-powered route optimization</strong> to reduce delivery time,
          fuel costs, and improve operational efficiency. With real-time traffic
          integration and multi-vehicle fleet management, FlipRoute ensures
          businesses achieve{" "}
          <strong>faster, smarter, and more sustainable logistics solutions</strong>.
        </p>

        {/* Call to Action Button */}
        <button
          className="bg-[#0f766e] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#0e5e59] hover:shadow-lg transition-transform transform hover:-translate-y-1"
          aria-label="Try FlipRoute now"
        >
         Try FlipRoute
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
