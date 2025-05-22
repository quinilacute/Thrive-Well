import React from "react";
import ph from "../assets/images/ph.png";
import ph1 from "../assets/images/ph.png";
import ph2 from "../assets/images/ph.png";

const App = () => {
  return (
    <div
      className="flex justify-center items-center text-center">
      <div className="bg-center bg-cover p-8 text-center" style={{ backgroundImage: `url(${ph})` }}>
      <h2 className="text-3xl font-bold mb-4 text-white">Download Mobile App</h2>
     <div>
     <p className="mb-6 text-white uppercase tracking-widest">DOWNLOAD HERE</p>
    <div>
    <img src={ph2} alt="" />
    <img src={ph2} alt="" />
    </div>
     </div>
      <img src={ph1} alt="Phone" className="mx-auto w-36 py-12 px-10" />
      </div>
    </div>
  );
};

export default App;
