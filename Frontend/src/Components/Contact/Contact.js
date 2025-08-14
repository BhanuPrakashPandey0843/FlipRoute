import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { BiPhoneCall, BiEnvelope, BiSolidNavigation } from "react-icons/bi";
import { motion } from "framer-motion";

function ContactForm() {
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "put_here"); // Replace with real key
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("Success! Your message has been sent.");
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus(
        "Error! Please check your internet connection and try again."
      );
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="p-6 rounded-lg shadow-lg bg-white"
      >
        <div className="flex items-center justify-center md:justify-start my-2 text-[#0f3d56] text-base">
          <GoArrowLeft />
          <span className="px-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-300">
            SEND US A MESSAGE
          </span>
          <GoArrowRight />
        </div>
        <h2 className="text-4xl font-bold text-center md:text-left mt-4 mb-8">
          Let’s Connect
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0f3d56] focus:border-[#0f3d56] block w-full p-2.5 shadow-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0f3d56] focus:border-[#0f3d56] block w-full p-2.5 shadow-sm"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0f3d56] focus:border-[#0f3d56] block w-full p-2.5 shadow-sm"
              required
            />
            <input
              type="tel"
              name="phonenumber"
              placeholder="Enter Phone"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0f3d56] focus:border-[#0f3d56] block w-full p-2.5 shadow-sm"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Enter Your Query"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0f3d56] focus:border-[#0f3d56] block w-full p-2.5 shadow-sm"
            rows="4"
            required
          ></textarea>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-[#0f3d56] to-[#0c2e40] hover:from-[#0c2e40] hover:to-[#091f2e] focus:ring-4 focus:outline-none focus:ring-[#0f3d56] font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 shadow-md"
            >
              SEND MESSAGE
            </button>
            <button
              type="reset"
              className="text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 shadow-md"
            >
              RESET
            </button>
          </div>
          {formStatus && (
            <p className="text-center mt-4 text-sm font-medium text-[#0f3d56]">
              {formStatus}
            </p>
          )}
        </form>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="p-6 rounded-lg shadow-lg bg-white"
      >
        <div className="flex items-center justify-center md:justify-start my-2 text-[#0f3d56] text-base">
          <GoArrowLeft />
          <span className="px-2 border-b-2 border-transparent hover:border-[#0f3d56] transition-all duration-300">
            NEED ANY HELP?
          </span>
          <GoArrowRight />
        </div>
        <h2 className="text-4xl font-bold text-center md:text-left mt-4 mb-8">
          Get in touch with Flip Route
        </h2>
        <p className="text-gray-500 text-center md:text-left mb-8">
          Have a question about shortest path finding, map data, or technical support? 
          Our Flip Route team is ready to help you optimize your journey and make navigation smarter. 
          We’re available to assist you with setup, integration, and route optimization queries.
        </p>
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-[#0f3d56] rounded-full shadow-lg">
              <BiPhoneCall className="text-4xl text-white" />
            </div>
            <div>
              <h6 className="text-lg font-semibold">Call Us</h6>
              <span className="text-gray-600 text-sm">+91 9876543210</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-[#0f3d56] rounded-full shadow-lg">
              <BiEnvelope className="text-4xl text-white" />
            </div>
            <div>
              <h6 className="text-lg font-semibold">Email Us</h6>
              <span className="text-gray-600 text-sm">
                support@fliproute.com
              </span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-[#0f3d56] rounded-full shadow-lg">
              <BiSolidNavigation className="text-4xl text-white" />
            </div>
            <div>
              <h6 className="text-lg font-semibold">Visit Us</h6>
              <span className="text-gray-600 text-sm">Bangalore, India</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactForm;
