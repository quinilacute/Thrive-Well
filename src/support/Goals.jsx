import React from "react";
import war from "../assets/images/war.png";
import aus from "../assets/images/aus.png";
import chop from "../assets/images/chop.png";
import amb from "../assets/images/amb.png";

const Goals = () => {
  const goals = [
    {
      name: "Dr. Ward Brenda",
      image: war,
      description:
        "We aim to reach underserved communities by funding medical programs, clinics, and essential treatments.",
    },
    {
      name: "Dr. Martins Austin",
      image: aus,
      description:
        "We offer financial assistance to help people who don’t have funds for treatments receive the care they deserve.",
    },
    {
      name: "Dr. Amber Chopp",
      image: chop,
      description:
        "Education, screenings, and wellness programs help prevent diseases and improve overall health outcomes.",
    },
    {
      name: "Dr. Michelle Ambrose",
      image: amb,
      description:
        "By funding training and resources, we support doctors, nurses, and caregivers in delivering high-quality care.",
    },
  ];

  return (
    <div className="px-6 py-10 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-black">Our Goals</h2>
        <hr className="w-20 mx-auto border-b-2 border-black mt-2" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {goals.map((goal, index) => (
          <div key={index} className="flex flex-col justify-between h-full bg-white shadow-md rounded-md overflow-hidden">
            <div className="p-4">
              <p className="text-gray-800">{goal.description}</p>
            </div>

            <div className="flex items-center bg-blue-400 text-black px-4 py-3">
              <img src={goal.image} alt={goal.name} className="w-7 h-7 rounded-full" />
              <h3 className="text-lg font-semibold ml-3">{goal.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
