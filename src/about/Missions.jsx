import React from "react";
import Button from "../components/Button";
import Image7 from "../assets/images/image 32.png";

const Value = () => {
  const abouts = [
    {
      id: 1,
      name: "Mission",
      description:
        "At ThriveWell, our mission is to empower individuals living with chronic illnesses by providing accessible healthcare solutions, expert guidance, and a supportive community. We are dedicated to improving health outcomes through technology, education, and personalized care, ensuring that every individual can manage their condition with confidence and ease.",
    },
    {
      id: 2,
      name: "Vision",
      description:
        "Our vision is to revolutionize chronic disease management by creating a world where individuals with diabetes and hypertension have the tools, knowledge, and support needed to thrive. We aim to bridge healthcare gaps by making affordable, patient-centered solutions available to everyone, anytime, anywhere.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 max-w-4xl mx-auto">
      <img src={Image7} alt="ThriveWell Vision" className="w-full mb-8 rounded" />
      <div className="w-full space-y-8 text-center">
        {abouts.map((about) => (
          <div key={about.id}>
            <h2 className="text-2xl font-bold mb-3">{about.name}</h2>
            <p className="text-gray-700">{about.description}</p>
          </div>
        ))}
        <div className="mt-6">
          <Button>About Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Value;
