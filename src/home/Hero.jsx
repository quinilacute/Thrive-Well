import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/icons/ThriveWell.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4">
      <div className="flex flex-row items-center justify-between py-6 px-4">
        <img src={logo} alt="ThriveWell Logo" className="h-16 w-auto" />
        <Navbar />
      </div>

      <div className="flex flex-col items-start px-6 py-10 space-y-4 max-w-2xl">
        <p className="text-lg text-gray-600">We are here for you</p>

        <h2 className="text-4xl font-bold text-black leading-tight">
          Empower people living<br />
          with chronic illness<br />
          to thrive and live better
        </h2>

        <p className="text-md text-gray-700">
          Diabetes or Hypertension doesn’t have to be the end 
          of you. You can conquer it with a little knowledge and skills.
        </p>

        <div className="mt-4">
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
