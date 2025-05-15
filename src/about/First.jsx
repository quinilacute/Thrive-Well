import React from "react";
import Nav from "../components/Navbar";
import Image4 from '../assets/images/image4.png';

const First = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Image4})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Nav />

      <p className="relative z-10 text-white text-center mt-20 text-xl font-semibold">
        Bridging gaps between patients and doctors.
      </p>
    </div>
  );
}

export default First;
