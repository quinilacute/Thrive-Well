import React from "react";
import Button from "../components/Button";

const Show = () => {
  return (
    <div>
      <div className="p-6 flex flex-col justify-center items-center max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About ThriveWell</h2>
        <p className="mb-6">
          At ThriveWell, we are committed to helping individuals with diabetes and hypertension take control of their health through personalized tools, expert resources, and a strong support community.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Show;
