import React from "react";
import Button from "../components/Button";
import smile from "../assets/images/smile.png";

const Trust = () => {
  return (
    <section className="max-w-3xl mx-auto p-8 py-14">
     
      <h2 className="text-3xl font-semibold px-4 py-10 block sm:inline">
        Trusted Experts Committed to Your Health
      </h2>


      <p className="text-2 text-gray-700 px-4 line-clamp-2 sm:line-clamp-none opacity-50">
        Tired of long hospital waits? Online healthcare consultations offer a faster alternative.
      </p>

      <Button className="px-4 mt-6">Get Started</Button>


      <img src={smile} alt="" />
    </section>
  );
};

export default Trust;
