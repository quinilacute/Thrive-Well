import React from "react";
import sun from "../assets/icons/sun.png";
import love from "../assets/icons/love.png";
import tip from "../assets/images/tip.png";



const TipCard = ({ icon, title, description, size = "w-10 h-10" }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <img src={icon} alt="tip icon" className={`${size}`} />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Tips = () => {
  return (
    <div className="container mx-auto p-4 bg-blue-500 justify-end">
      <div className="flex gap-4 mb-6 justify-center items-center">
        <h2 className="text-lg font-bold">ThriveWell Donation Tips</h2>
        <img src={sun} alt="sun" className="w-12 h-12" />
      </div>
             
      <div className=" flex gap-6 items-end justify-end py-12">
        <div className="text-2">
          <TipCard
            icon={love}
            size="w-7 h-7"
            title="Choose a Cause That Matters to You"
            description="Whether it’s cancer care, maternal health, or mental health, direct your donation where it can make the biggest difference."
          />
          <TipCard
            icon={love}
              size="w-7 h-7"
            title="Give in Multiple Ways"
            description="Consider one-time gifts, monthly contributions, or corporate matching programs to maximize your impact."
          />
          <TipCard
            icon={love}
              size="w-7 h-7"
            title="Support Medical Supply Donations"
            description="Many hospitals and clinics benefit from in-kind donations such as PPE, medical devices, and essential medications."
          />
          <TipCard
            icon={love}
              size="w-7 h-7"
            title="Encourage Community Giving"
            description="Fundraising, peer-to-peer campaigns, and social media sharing can amplify support for healthcare initiatives."
          />
        </div>
        <img src={tip} alt="" />
      </div>
    </div>
  );
};

export default Tips;
