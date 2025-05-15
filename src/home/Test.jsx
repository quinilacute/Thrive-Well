import React, { useState } from "react";
import word from "../assets/icons/word.png";
import aaron from "../assets/images/mart.png"; // example image
import peter from "../assets/images/mich.png"; // you need to add these images
import nkechi from "../assets/images/man.png";

const Test = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  const testi = [
    {
      id: 1,
      name: "Aaron Adebayo",
      image: aaron, // added image
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
    {
      id: 2,
      name: "Peter Emem",
      image: peter,
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
    {
      id: 3,
      name: "Nkechi Esosa",
      image: nkechi,
      test: "ThriveWell has completely changed how I manage my diabetes! The meal plans and health tracking tools keep me on track every day.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">
          Our <span className="text-blue-600">Testimonials</span>
        </h2>
        <p className="text-gray-500">Trusted Worldwide great care giving</p>

        <img src={word} alt="word-icon" className="py-12" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What Our Customers Are Saying...
        </h2>

        <div className="flex flex-col items-center max-w-xl mx-auto">
          <p className="text-gray-600 mt-2 mb-6">{testi[active].test}</p>
          <h3 className="text-xl font-semibold mb-6">{testi[active].name}</h3>

          <div className="flex justify-center space-x-6">
            {testi.map((test, index) => (
              <div key={test.id} className="cursor-pointer" onClick={() => handleClick(index)}>
                <img
                  src={test.image}
                  alt={test.name}
                  className={`w-24 h-24 rounded-full object-cover border-4 transition ${
                    active === index ? "border-blue-600" : "border-transparent"
                  }`}
                />
                <div
                  className={`w-3 h-3 rounded-full mx-auto mt-2 ${
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
