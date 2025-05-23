import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/ThriveWell.png"; 
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-14 py-3 fixed bg-white z-10">
     
      <img src={Logo} alt="ThriveWell logo" className="w-24 h-auto" />

      <nav className="text-black flex items-center relative">
     
        <div
          className={`absolute md:static top-14 right-0 bg-white md:bg-transparent w-48 md:w-auto py-2 md:py-0 md:flex md:space-x-6 rounded-lg md:rounded-none shadow-md md:shadow-none ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link to="/" className="block px-4 py-2 md:px-0 md:py-0 hover:text-primary">Home</Link>
          <Link to="/about" className="block px-4 py-2 md:px-0 md:py-0 hover:text-primary">About</Link>
          <Link to="/donate" className="block px-4 py-2 md:px-0 md:py-0 hover:text-primary">Donation</Link>
          <Link to="/services" className="block px-4 py-2 md:px-0 md:py-0 hover:text-primary">Services</Link>
          <Link to="/expert" className="block px-4 py-2 md:px-0 md:py-0 hover:text-primary">Consultation</Link>
          <Link to="/policy" className="block px-4 py-2 md:px-0 md:py-0 hover:text-primary">Policy</Link>

          <Link to="/get-started" className="block px-4 py-2 md:px-0 md:py-0">
            <Button>Get started</Button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden ml-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <svg
            className="w-8 h-8 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
