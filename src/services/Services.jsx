import React from "react";
import HealthGuideCard from "./HealthGuideCard";
import mobile from "../assets/icons/mobile.png";
import hos from "../assets/icons/hos.png";
import roll from "../assets/icons/roll.png";
import test from "../assets/icons/test.png";

const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
      <HealthGuideCard>
        <img src={mobile} alt="Consult a Doctor" className="w-5 h-5 mb-2" />
        <h3 className="text-l font-semibold mb-1 line-clamp-2">
          Consult a Doctor
        </h3>
        <p className="text-sm line-clamp-2">
          Get expert opinions, prescription, and health guidance anytime, anywhere.
        </p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={book} alt="Medical Appointments" className="w-5 h-5 mb-2" />
        <h3 className="text-l font-semibold mb-1 line-clamp-2">
          Medical Appointments
        </h3>
        <p className="text-sm line-clamp-2">
          Schedule a visit with a trusted healthcare professional at your convenience.
        </p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={roll} alt="Emergency Case" className="w-5 h-5 mb-2" />
        <h3 className="text-l font-semibold mb-1 line-clamp-2">
          Emergency Case
        </h3>
        <p className="text-sm line-clamp-2">
          Quick access to emergency medical assistance - available 24/7.
        </p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={screen} alt="Health Checkups & Tests" className="w-5 h-5 mb-2" />
        <h3 className="text-l font-semibold mb-1 line-clamp-2">
          Health Checkups & Tests
        </h3>
        <p className="text-sm line-clamp-2">
          Stay on top of your health with our fast and reliable medical tests.
        </p>
      </HealthGuideCard>
    </div>
  );
};

export default Services;
