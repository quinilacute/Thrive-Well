import React from "react";
import face from "../assets/icons/Facebook.png";
import insta from "../assets/icons/Instagram.png";
import twit from "../assets/icons/Twitter.png";
import link from "../assets/icons/Linkedin.png";
import thrive from "../assets/icons/ThriveWell.png";
import send from "../assets/icons/send.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
  
      {/* Left Section: Logo + text */}
      <div className="w-full md:w-1/3">
        <img src={thrive} alt="ThriveWell Logo" className="w-32 mb-4" />
        <p>We believe healthcare should be fast, accessible, and stress-free.</p>
      </div>
  
      {/* Center Section: Newsletter */}
      <div className="w-full md:w-1/3">
        <h3 className="text-lg font-semibold mb-3">Subscribe Newsletter</h3>
        <p className="text-sm mb-4">
          Join our mailing list for the latest news and events. We assure you that we will not send unnecessary emails.
        </p>
        <form className="flex items-center border border-gray-700 bg-gray-800 rounded overflow-hidden max-w-sm w-full">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-grow px-3 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Email"
    required
  />
  <button
    type="submit"
    aria-label="Send Newsletter"
    className="p-2 bg-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
  >
    <img src={send} alt="Send icon" className="w-5 h-5" />
  </button>
</form>

      </div>
  
      {/* Right Section: Middle links, always horizontal with 3 equal columns */}
      <div className="w-full md:w-1/3 flex justify-between text-sm text-gray-300">
        {/* Quick Links */}
        <div className="w-1/3 px-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Our Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Article</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>
  
        {/* Resources */}
        <div className="w-1/3 px-2">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>
  
        {/* Company Info */}
        <div className="w-1/3 px-2">
          <h3 className="text-lg font-semibold mb-2">Company Info</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@Thrivewell.io" className="hover:text-blue-400">info@Thrivewell.io</a></li>
            <li>
              Work Hours:<br />
              Monday - Friday, 9AM - 6PM EST
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    {/* Bottom Section: Social icons + copyright */}
    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 mt-10">
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="hover:opacity-80 bg-white p-1 rounded">
          <img src={face} alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:opacity-80 bg-white p-1 rounded">
          <img src={insta} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="#" aria-label="Twitter" className="hover:opacity-80 bg-white p-1 rounded">
          <img src={twit} alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:opacity-80 bg-white p-1 rounded">
          <img src={link} alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm text-gray-400 text-center md:text-right">
        © 2025 Medical. All Rights Reserved.
      </p>
    </div>
  </footer>  
  );
};
export default Footer;
