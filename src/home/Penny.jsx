import React from "react";
import Button from "../components/Button";

const Penny = () => {
  return (
    <div className="bg-gray-200 p-4 rounded max-w-md mx-auto min-h-[120px] flex items-center justify-between">
      <p className="text-blue-600 text-lg leading-snug max-w-[70%]">
        Any amount helps take care of one patient, <br />
        Every Penny Counts...
      </p>

      <div>
        <Button>Donate</Button>
      </div>
    </div>
  );
};

export default Penny;
