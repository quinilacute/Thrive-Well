import React from "react";
import word from "../assets/icons/word.png";

const reviews = [
  {
    name: "Martins Charles",
    text: "Booking an appointment was effortless, and I was able to speak with a doctor within minutes.",
  },
  {
    name: "Glory Wealth",
    text: "Consultation was welcoming. I love it.",
  },
  {
    name: "Peace Michael",
    text: "Navigating the website was so simple! I found the information I needed in seconds.",
  },
];

const Clients = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Top Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-3">Clients Reviews</h2>
        <p className="text-gray-800 mb-6">
          Our patients trust us for fast, reliable, and compassionate healthcare.
          From seamless doctor consultations to hassle-free appointment booking, we
          prioritize your well-being. With top-rated medical experts, secure services,
          and round-the-clock support, we make healthcare simple and stress-free.
          Join thousands of satisfied clients who choose us for better health every day!
        </p>
        <img src={word} alt="Decorative" className="mx-auto w-12 h-12 object-contain" />
      </div>

      {/* Reviews Section */}
      <div className="bg-brown-700 p-6 rounded-lg space-y-6">
        {reviews.map(({ name, text }, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white rounded p-4 shadow"
          >
            <div className="max-w-[75%]">
              <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
              <p className="text-gray-700">{text}</p>
            </div>
            <img src={word} alt="Quote" className="w-10 h-10 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
