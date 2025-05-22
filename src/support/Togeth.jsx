import React from "react";
import Button from "../components/Button";

const Togeth = () => {
  return (
    <div className="p-8 text-black items-center justify-center text-center">
      <h2 className="text-3 font-bold">Together, We can Save Lives</h2>

   
      <p className="mt-4 mb-6 text-base max-w-2xl mx-auto block:inline">
        Your support fuels our mission to create a world where healthcare is accesible to all. Join us in making a difference-every donation, big or small, brings hope and healing.
      </p>

      <Button className="w-30 h-40">DONATE NOW</Button>
    </div>
  );
};

export default Togeth;
