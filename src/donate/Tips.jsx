// import React from "react";
// import sun from "../assets/icons/sun.png";
// import love from "../assets/icons/love.png";
// import man from "../assets/images/man.png";



// const Tips = () => {
//     return(
//         <div>
//             <h2>ThriveWell Donationn Tips</h2>
//             <div>
//                 <img src={sun} alt="" />
//                 <img src={sun} alt="" />
//             </div>

//             <div>
//                 <img src={man} alt="man" />
//                 <div>
//                     <div>
//                         {/* for each of the divs down */}
//                         <img src={love} alt="" />
//                         <img src={love} alt="" />
//                         <img src={love} alt="" />
//                         <img src={love} alt="" />
//                     </div>

//                     <div>
//                         <h2>Choose a cause That Matters to You -</h2>
//                         <p>Whether it’s cancer care, maternal health, or mental health, direct your donation where it can make the biggest difference.</p>
//                     </div>
//                     <div>
//                         <h2>Give in Multiple Ways</h2>
//                         <p>Consider one-time gifts, monthly contributions, or corporate matching programs to maximize your impact.</p>
//                     </div>

//                     <div>
//                         <h2>Support Medical Supply Donations</h2>
//                         <p>Many hospitals and clinics benefit from in-kind donations such as PPE, medical devices, and essential medications.</p>
//                     </div>
//                     <div>
//                         <h2>Encourage Community Giving</h2>
//                         <p>Fundraising, peer-to-peer campaigns, and social media sharing can amplify support for healthcare initiatives.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default Tips;




import React from "react";
import sun from "../assets/icons/sun.png";
import love from "../assets/icons/love.png";
import man from "../assets/images/man.png";

// Reusable TipCard component for each donation tip
const TipCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <img src={icon} alt="tip icon" className="w-10 h-10" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Tips = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">ThriveWell Donation Tips</h2>
      
      <div className="flex gap-4 mb-6">
        <img src={sun} alt="sun" className="w-24 h-24" />
        <img src={sun} alt="sun" className="w-24 h-24" />
      </div>

      <div className="flex gap-6 items-center">
        <img src={man} alt="man" className="w-48 h-48 rounded-full" />
        <div>
          <TipCard
            icon={love}
            title="Choose a Cause That Matters to You"
            description="Whether it’s cancer care, maternal health, or mental health, direct your donation where it can make the biggest difference."
          />
          <TipCard
            icon={love}
            title="Give in Multiple Ways"
            description="Consider one-time gifts, monthly contributions, or corporate matching programs to maximize your impact."
          />
          <TipCard
            icon={love}
            title="Support Medical Supply Donations"
            description="Many hospitals and clinics benefit from in-kind donations such as PPE, medical devices, and essential medications."
          />
          <TipCard
            icon={love}
            title="Encourage Community Giving"
            description="Fundraising, peer-to-peer campaigns, and social media sharing can amplify support for healthcare initiatives."
          />
        </div>
      </div>
    </div>
  );
};

export default Tips;
