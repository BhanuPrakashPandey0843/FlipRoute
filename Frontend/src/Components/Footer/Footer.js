import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaDribbble,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-white via-[#d4f1f9] to-[#a2c2c2] text-gray-800 pt-12 pb-12">
      <div className="container mx-auto px-4">
        
        {/* ✅ Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* ✅ Contact / Brand Section */}
          <div>
            <h4 className="text-4xl font-bold text-[#165b61] mb-4">
              FlipRoute
            </h4>
            <p className="text-lg mb-4 text-gray-600 max-w-md mx-auto md:mx-0">
              Optimize your last-mile delivery routes with intelligent AI-powered planning.
            </p>

            {/* ✅ Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {[
                { icon: <FaTwitter size={20} />, color: "text-blue-400" },
                { icon: <FaFacebookF size={20} />, color: "text-blue-600" },
                { icon: <FaInstagram size={20} />, color: "text-pink-500" },
                { icon: <FaGithub size={20} />, color: "text-gray-800" },
                { icon: <FaDribbble size={20} />, color: "text-pink-400" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`transition transform hover:scale-110 bg-white shadow-md h-10 w-10 flex items-center justify-center rounded-full ${item.color}`}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ Useful Links */}
          <div>
            <h4 className="text-2xl font-semibold text-[#165b61] mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {["About Us", "Blog", "Github", "Free Products"].map((link) => (
                <li key={link}>
                  <a
                    className="text-gray-600 hover:text-[#165b61] font-medium transition-colors duration-300"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Resources */}
          <div>
            <h4 className="text-2xl font-semibold text-[#165b61] mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                "MIT License",
                "Terms & Conditions",
                "Privacy Policy",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    className="text-gray-600 hover:text-[#165b61] font-medium transition-colors duration-300"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ Newsletter Section */}
        <div className="w-full text-center mt-12">
          <h4 className="text-2xl sm:text-3xl font-semibold text-[#165b61] mb-4">
            Subscribe to Our Newsletter
          </h4>

          {/* ✅ Responsive Newsletter Form */}
          <form className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 w-full text-gray-800 bg-white rounded-md sm:rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#165b61]"
            />
            <button
              className="bg-[#165b61] text-white px-6 py-3 rounded-md sm:rounded-r-md hover:bg-[#144e54] transition duration-300 w-full sm:w-auto"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ✅ Divider */}
        <hr className="my-8 border-gray-300" />

        {/* ✅ Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
          <p className="text-sm text-gray-600 font-medium">
            © {new Date().getFullYear()}{" "}
            <a
              href="#"
              className="text-[#165b61] hover:text-[#144e54] transition"
            >
              FlipRoute
            </a>{" "}
            . All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed for a smarter logistics experience 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
