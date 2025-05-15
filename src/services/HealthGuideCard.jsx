import React from "react";



const HealthGuideCard = ({ children }) => {
    return (
      <div className="bg-white text-black flex flex-col items-start p-4 rounded shadow-md">
        {/* children content */}
        {children}
      </div>
    );
  };
  
  export default HealthGuideCard;
  