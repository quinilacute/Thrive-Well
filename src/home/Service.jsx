import React from "react";

const Service = () => {
  return (
    <div className="px-6 md:px-14 py-12 bg-gray-50 space-y-12 min-h-screen">
      {/* Section Header */}
      <div>
        <div className="py-4 flex items-center space-x-4">
          <hr className="w-10 border-blue-600 border-t-4" />
          <h3 className="text-2xl font-semibold text-gray-800">Virtual Care</h3>
        </div>

        {/* Medical Services */}
        <div className="flex flex-col py-4 space-y-4">
          <h2 className="text-xl text-blue-600 font-semibold">Medical Services</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Talk to a specialist</li>
            <li>24/7 Medical Support</li>
            <li>Virtual Consultation from Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
