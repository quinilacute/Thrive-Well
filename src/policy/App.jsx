import React from "react";
import phone from "../assets/images/phone.png";
import bg from "../assets/images/phone2.png";

const App = () => {
  return (
    <div
      className="bg-center bg-cover p-8 text-center"
      style={{ backgroundImage: `url(${phone})` }}
    >
      <h2 className="text-3xl font-bold mb-4 text-white">Download Mobile App</h2>
      <p className="mb-6 text-white uppercase tracking-widest">DOWNLOAD HERE</p>
      <img src={bg} alt="Phone" className="mx-auto w-36" />
    </div>
  );
};

export default App;
