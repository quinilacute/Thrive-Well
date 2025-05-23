import React, { useState } from "react";
import word from "../assets/icons/word.png";
import aaron from "../assets/images/mart.png";
import lad from "../assets/images/lad.png";
import wo from "../assets/images/wo.png";
import shadow from "../assets/images/shadow.png";

const Test = () => {
  const [active, setActive] = useState(-1); // Initially no testimonial is selected

  const handleClick = (index) => {
    setActive(index);
  };

  const testi = [
    {
      id: 1,
      name: "Aaron Adebayo",
      image: aaron,
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
    {
      id: 2,
      name: "Peter Emem",
      image: lad,
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
    {
      id: 3,
      name: "Nkechi Esosa",
      image: wo,
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our <span className="text-blue-600">Testimonials</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Trusted Worldwide great care giving
        </p>

        <div className="bg-blue-600 rounded-full p-4 mt-6">
          <img src={word} alt="word-icon" className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
      </div>

      <div className="container mx-auto text-center mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          What Our Customers Are Saying...
        </h2>

        {/* Overlay + Testimonial section */}
        <div className="relative flex flex-col items-center max-w-xl mx-auto">
          {/* Shadow overlay (visible only when no active testimonial is selected) */}
          {active === -1 && (
            <img
              src={shadow}
              alt="shadow overlay"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-10 rounded-lg"
            />
          )}

          {/* Testimonial Content */}
          <div className="relative z-20 text-center p-4">
            {active !== -1 && (
              <>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                  {testi[active].test}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">
                  {testi[active].name}
                </h3>
              </>
            )}
          </div>

          {/* Clickable thumbnails */}
          <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-5 relative z-20">
            {testi.map((test, index) => (
              <div
                key={test.id}
                className="cursor-pointer flex flex-col items-center"
                onClick={() => handleClick(index)}
              >
                <img
                  src={test.image}
                  alt={test.name}
                  className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-4 transition ${
                    active === index ? "border-blue-600" : "border-transparent"
                  }`}
                />
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mt-2 ${
                    active === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
