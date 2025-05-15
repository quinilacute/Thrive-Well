import React from "react";
import HealthGuideCard from "./HealthGuideCard";
import mobile from "../assets/icons/mobile.png";
import book from "../assets/icons/book.png";
import roll from "../assets/icons/roll.png";
import screen from "../assets/icons/screen.png";

const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
      <HealthGuideCard>
        <img src={mobile} alt="Consult a Doctor" className="w-10 h-10 mb-2" />
        <h3 className="text-lg font-semibold mb-1">Consult a Doctor</h3>
        <p>Get expert opinions, prescription, and health guidance anytime, anywhere.</p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={book} alt="Medical Appointments" className="w-10 h-10 mb-2" />
        <h3 className="text-lg font-semibold mb-1">Medical Appointments</h3>
        <p>Schedule a visit with a trusted healthcare professional at your convenience.</p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={roll} alt="Emergency Case" className="w-10 h-10 mb-2" />
        <h3 className="text-lg font-semibold mb-1">Emergency Case</h3>
        <p>Quick access to emergency medical assistance - available 24/7.</p>
      </HealthGuideCard>

      <HealthGuideCard>
        <img src={screen} alt="Health Checkups & Tests" className="w-10 h-10 mb-2" />
        <h3 className="text-lg font-semibold mb-1">Health Checkups & Tests</h3>
        <p>Stay on top of your health with our fast and reliable medical tests.</p>
      </HealthGuideCard>
    </div>
  );
};

export default Services;
