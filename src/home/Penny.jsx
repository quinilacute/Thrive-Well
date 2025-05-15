import React from "react";
import Button from "../components/Button";

const Penny = () => {
  return (
    <div className="relative bg-gray-200 p-4 rounded max-w-md mx-auto" style={{ minHeight: "120px" }}>
      <p className="text-blue-600 text-lg">
        Any amount helps take care of one patient, <br />
        Every Penny Counts...
      </p>

      <div className="absolute bottom-4 right-4">
        <Button>Donate</Button>
      </div>
    </div>
  );
};

export default Penny;
