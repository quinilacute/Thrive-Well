import React from "react";
import Button from "../components/Button"; 
import back1 from "../assets/images/image 27.png";
import Avail from "./Avail";

const Started = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-96 flex flex-col justify-center items-center space-y-6 text-white px-4"
      style={{ backgroundImage: `url(${back1})` }}
    >
      <h2 className="text-2xl font-bold">Start Your Wellness Journey</h2>
      <Button>Get Started</Button>
      <div className="w-full max-w-md">
        <Avail />
      </div>
    </div>
  );
};

export default Started;
