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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo + Social + Copyright */}
        <div className="space-y-6">
          <img src={thrive} alt="ThriveWell Logo" className="w-32" />
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <img src={face} alt="Facebook icon" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <img src={insta} alt="Instagram icon" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <img src={twit} alt="Twitter icon" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <img src={link} alt="LinkedIn icon" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-400">© 2025 Medical. All Rights Reserved.</p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe Newsletter</h3>
          <p className="text-sm mb-4">
            Join our mailing list for the latest news and events. We assure you that we will not send unnecessary emails.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              aria-label="Email"
              required
            />
            <button
              type="submit"
              aria-label="Send Newsletter"
              className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              <img src={send} alt="Send icon" className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Our Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Article</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company Info</h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li>Email: <a href="mailto:info@Thrivewell.io" className="hover:text-blue-400">info@Thrivewell.io</a></li>
            <li>
              Work Hours <br />
              Monday - Friday, 9AM - 6PM EST
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
