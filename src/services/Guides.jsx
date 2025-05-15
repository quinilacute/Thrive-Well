import React from "react";
import HealthGuideCard from "./HealthGuideCard";

import Dia from "../assets/images/Dia.png";
import Rhe from "../assets/images/Rhe.png";
import you from "../assets/images/you.png";
import depres from "../assets/images/depres.png";
import Card from "../assets/images/Card.png";
import Heart from "../assets/images/Heart.png";

const Guides = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <HealthGuideCard>
        <img src={Dia} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Diabetes</h3>
        <p className="text-center text-sm">More than 30 million people have diabetes; yet, millions don't know they do. Learn why</p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={Heart} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Heart Disease</h3>
        <p className="text-center text-sm">Heart disease covers many ailments, but they all add up to the top killer of men and women.</p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={depres} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Depression</h3>
        <p className="text-center text-sm">More than just a passing sadness, depression can undermine quality of life.</p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={Card} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Cardiac Arrest</h3>
        <p className="text-center text-sm">More than 30 million Americans have diabetes; yet, millions don't know they do. Learn why</p>
      </HealthGuideCard>

      {/* Blue background box with white text */}
      <div className="bg-blue-600 text-white flex flex-col justify-end items-center p-4 rounded shadow-md h-64">
        <img src={Rhe} alt="" className="w-12 h-12 mb-2" />
        <h3 className="mb-1 text-center">Rheumatoid Arthritis</h3>
        <p className="text-center text-sm">Rheumatoid arthritis causes more than aching joints.</p>
      </div>

      <HealthGuideCard>
        <img src={you} alt="" className="w-12 h-12 mb-2" />
        <p className="text-center text-sm">More than just a passing sadness, depression can undermine quality of life.</p>
      </HealthGuideCard>
    </div>
  );
};

export default Guides;
