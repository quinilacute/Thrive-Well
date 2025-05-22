import React, { useState } from "react";
import mobile from "../assets/icons/mobile.png";

const Support = () => {
  const details = [
    { id: 1, image: mobile, name: "Phone", description: "+234-8011135610" },
    { id: 2, image: mobile, name: "Email", description: "info@Thrivewell.io" },
    { id: 3, image: mobile, name: "Website", description: "www.thrivewell.com" },
    { id: 4, image: mobile, name: "Address", description: "99 Freedom way, Lekki- Lagos" }
  ];

  return (
    <div className="py-20 px-6">
     
      <div className="flex items-center gap-4 mb-10">
        <hr className="w-12 border-gray-400" />
        <p className="text-lg font-semibold">Let's Help</p>
      </div>

     
      <div className="flex flex-col md:flex-row gap-10">
      
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">
            Support ThriveWell: Transform Lives Through Healthcare Donations
          </h2>
          <p>
            At Thrive Well, we believe that access to quality healthcare is a fundamental
            right, not a privilege. Every day, countless individuals struggle to afford
            life-saving treatments, essential medications, and basic medical care.
            With your support, we can bridge this gap and bring hope to those in need.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:w-1/2">
          {details.map(({ id, name, description, image }) => (
            <div key={id} className="flex items-start gap-3 border p-3 rounded bg-white shadow-sm">
              <img src={image} alt={`${name} icon`} className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
