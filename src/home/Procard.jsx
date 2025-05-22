



import React from "react";

const Procard = ({ children }) => {
  return (
    <div className="bg-white text-center hover:border-blue-400 border p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-black">
      {children}
    </div>
  );
};

export default Procard;
