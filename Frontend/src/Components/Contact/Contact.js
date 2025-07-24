import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { BiPhoneCall, BiEnvelope, BiSolidNavigation } from "react-icons/bi";
import { motion } from "framer-motion";

function ContactForm() {
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "put_here");
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
        <div className="flex items-center justify-center md:justify-start my-2 text-[#165b61] text-base">
          <GoArrowLeft />
          <span className="px-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-300">
            SEND US EMAIL
          </span>
          <GoArrowRight />
        </div>
        <h2 className="text-4xl font-bold text-center md:text-left mt-4 mb-8">
          Feel free to write
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#165b61] focus:border-[#165b61] block w-full p-2.5 shadow-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#165b61] focus:border-[#165b61] block w-full p-2.5 shadow-sm"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#165b61] focus:border-[#165b61] block w-full p-2.5 shadow-sm"
              required
            />
            <input
              type="tel"
              name="phonenumber"
              placeholder="Enter Phone"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#165b61] focus:border-[#165b61] block w-full p-2.5 shadow-sm"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Enter Message"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#165b61] focus:border-[#165b61] block w-full p-2.5 shadow-sm"
            rows="4"
            required
          ></textarea>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-[#165b61] to-[#134a4d] hover:from-[#134a4d] hover:to-[#0e3d3f] focus:ring-4 focus:outline-none focus:ring-[#165b61] font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 shadow-md"
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
            <p className="text-center mt-4 text-sm font-medium text-[#165b61]">
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
        <div className="flex items-center justify-center md:justify-start my-2 text-[#165b61] text-base">
          <GoArrowLeft />
          <span className="px-2 border-b-2 border-transparent hover:border-[#165b61] transition-all duration-300">
            NEED ANY HELP?
          </span>
          <GoArrowRight />
        </div>
        <h2 className="text-4xl font-bold text-center md:text-left mt-4 mb-8">
          Get in touch with us
        </h2>
        <p className="text-gray-500 text-center md:text-left mb-8">
        Have questions or need assistance? We’re here to help! Reach out to AmbuLINK for any inquiries, support, or to learn more about our services. Our team is available 24/7 to ensure you receive the best emergency response and medical coordination possible.
        </p>
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-[#165b61] rounded-full shadow-lg">
              <BiPhoneCall className="text-4xl text-white" />
            </div>
            <div>
              <h6 className="text-lg font-semibold">Have any questions?</h6>
              <span className="text-gray-600 text-sm">Free +1234567890</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-[#165b61] rounded-full shadow-lg">
              <BiEnvelope className="text-4xl text-white" />
            </div>
            <div>
              <h6 className="text-lg font-semibold">Write an email</h6>
              <span className="text-gray-600 text-sm">
              support@ambulink.com
              </span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-[#165b61] rounded-full shadow-lg">
              <BiSolidNavigation className="text-4xl text-white" />
            </div>
            <div>
              <h6 className="text-lg font-semibold">Visit anytime</h6>
              <span className="text-gray-600 text-sm">Ranchi</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactForm;
