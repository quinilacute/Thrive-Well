import React from "react";
import Button from "../components/Button";
import start from "../assets/images/start.png";

const Show = () => {
  return (
    <div>
      <div className="p-6 flex flex-col justify-end items- max-w-xl mx-auto text-center py-14">
        <h2 className="text-2xl font-semibold">About ThriveWell</h2>
        <p className="">
          At ThriveWell, we are committed to helping individuals with diabetes and hypertension take control of their health through personalized tools, expert resources, and a strong support community.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Show;
 