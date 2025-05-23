import React from "react";
import HealthGuideCard from "./HealthGuideCard";
import dia from "../assets/images/dia.png";
import rhe from "../assets/images/rhe.png";
import can from "../assets/images/can.png";
import depres from "../assets/images/depres.png";
import card from "../assets/images/cards.png";
import heart from "../assets/images/heart.png";

const Guides = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <HealthGuideCard>
        <img src={dia} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Diabetes</h3>
        <p className="text-center text-sm">
          More than 30 million people have diabetes; yet, millions don't know they do. Learn why
        </p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={heart} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Heart Disease</h3>
        <p className="text-center text-sm">
          Heart disease covers many ailments, but they all add up to the top killer of men and women.
        </p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={depres} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Depression</h3>
        <p className="text-center text-sm">
          More than just a passing sadness, depression can undermine quality of life.
        </p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={card} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Cardiac Arrest</h3>
        <p className="text-center text-sm">
          More than 30 million Americans have diabetes; yet, millions don't know they do. Learn why
        </p>
      </HealthGuideCard>

      <div className="bg-blue-600 text-white flex flex-col justify-end items-center p-4 rounded shadow-md h-64">
        <img src={rhe} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Rheumatoid Arthritis</h3>
        <p className="text-center text-sm">
          Rheumatoid arthritis causes more than aching joints.
        </p>
      </div>

      <HealthGuideCard>
        <img src={can} alt="" className="w-12 h-12 mb-2" />
        <p className="text-center text-sm">
          More than just a passing sadness, depression can undermine quality of life.
        </p>
      </HealthGuideCard>
    </div>
  );
};

export default Guides;
