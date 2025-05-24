import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4">
      <div className="flex flex-row items-center justify-between py-6 px-4">
        <Navbar />
      </div>

      <div className="bg-white flex flex-col justify-center w-full md:w-1/2 px-6 py-12">
  <div className="mb-6">
  
  </div>

  <div className="space-y-4">
    <p className="text-lg text-gray-600">We are here for you</p>

    <h2 className="text-l font-bold text-black leading-tight space-y-6">
      Empower people living<br />
      with chronic illness<br />
      to thrive
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

    </div>
  );
};

export default Hero;
