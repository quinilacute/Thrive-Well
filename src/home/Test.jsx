import React, { useState } from "react";
import word from "../assets/icons/word.png";

const Test = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  const testi = [
    {
      id: 1,
      name: "Aaron Adebayo",
      image: "", 
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
    {
      id: 2,
      name: "Peter Emem",
      image: "", 
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
    {
      id: 3,
      name: "Nkechi Esosa",
      image: "", 
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
  ];

  return (
    <div>
      <div>
        <h2>
          Our <span>Testimonials</span>
        </h2>
        <p>Trusted Worldwide great care giving</p>
      </div>

      <div className="container mx-auto px-6 text-center">
        <img src={word} alt="word-icon" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What Our Customers Are Saying...
        </h2>

        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-4">
            {testi.map((test, index) => (
              <div key={test.id} className="mx-2">
                <img
                  src={test.image || word}
                  alt={test.name}
                  className="w-24 h-24 rounded-full object-cover cursor-pointer"
                  onClick={() => handleClick(index)}
                />
                <div
                  className={`w-3 h-3 rounded-full mx-auto mt-2 ${
                    active === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-xl">
            <h2 className="text-xl font-bold">{testi[active].name}</h2>
            <p className="text-gray-600 mt-2">{testi[active].test}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
