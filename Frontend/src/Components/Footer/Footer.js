import React from "react";
import { FaTwitter, FaFacebookF, FaDribbble, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-white via-[#d4f1f9] to-[#a2c2c2] text-gray-800 pt-12 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Contact Section */}
          <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
            <h4 className="text-4xl font-semibold text-[#165b61] mb-4">
            AmbuLINK 
            </h4>
            <h5 className="text-lg mb-4 text-gray-600">
            Guiding Heroes Through the Fastest Paths to Hope.
            </h5>
            <div className="flex space-x-4">
              <button
                className="transition transform hover:scale-110 bg-white text-blue-400 shadow-lg font-semibold h-12 w-12 flex items-center justify-center rounded-full"
                type="button"
              >
                <FaTwitter size={24} />
              </button>
              <button
                className="transition transform hover:scale-110 bg-white text-blue-600 shadow-lg font-semibold h-12 w-12 flex items-center justify-center rounded-full"
                type="button"
              >
                <FaFacebookF size={24} />
              </button>
              <button
                className="transition transform hover:scale-110 bg-white text-pink-400 shadow-lg font-semibold h-12 w-12 flex items-center justify-center rounded-full"
                type="button"
              >
                <FaInstagram size={24} />
              </button>
              <button
                className="transition transform hover:scale-110 bg-white text-gray-800 shadow-lg font-semibold h-12 w-12 flex items-center justify-center rounded-full"
                type="button"
              >
                <FaGithub size={24} />
              </button>
              <button
                className="transition transform hover:scale-110 bg-white text-pink-400 shadow-lg font-semibold h-12 w-12 flex items-center justify-center rounded-full"
                type="button"
              >
                <FaDribbble size={24} />
              </button>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
            <h4 className="text-2xl font-semibold text-[#165b61] mb-4">
              Useful Links
            </h4>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-gray-600 hover:text-[#165b61] font-semibold block pb-2 text-lg transition-colors duration-300"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#165b61] font-semibold block pb-2 text-lg transition-colors duration-300"
                  href="#blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#165b61] font-semibold block pb-2 text-lg transition-colors duration-300"
                  href="#github"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#165b61] font-semibold block pb-2 text-lg transition-colors duration-300"
                  href="#products"
                >
                  Free Products
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
            <h4 className="text-2xl font-semibold text-[#165b61] mb-4">
              Resources
            </h4>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-gray-600 hover:text-[#165b61] font-semibold block pb-2 text-lg transition-colors duration-300"
                  href="#license"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#165b61] font-semibold block pb-2 text-lg transition-colors duration-300"
                  href="#terms"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#165b61] font-semibold block pb-2 text-lg transition-colors duration-300"
                  href="#privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#165b61] font-semibold block pb-2 text-lg transition-colors duration-300"
                  href="#contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full text-center mb-12">
          <h4 className="text-3xl font-semibold text-[#165b61] mb-4">
            Subscribe to Our Newsletter
          </h4>
          <form className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full max-w-xs text-gray-800 bg-white rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#165b61]"
            />
            <button
              className="bg-[#165b61] text-white px-6 py-3 rounded-r-md hover:bg-[#144e54] transition duration-300"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-2">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-[#165b61] hover:text-[#144e54]"
                target="_blank"
                rel="noopener noreferrer"
              >
                AmbuLINK
              </a>
              . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
