import React from "react";
import Button from "../components/Button";
import man from "../assets/images/man.png";

const Front = () => {
  return (
    <div>
      <div>
        <div>
          <img src={man} alt="support image" />
          <p>We are here for you</p>
        </div>
        <h2>
          Empower people living
          with chronic illness
          to thrive and live better
        </h2>
        <p>
          Diabetes or Hypertension doesn’t have to be the end 
          of you. You can conquer it with a little knowledge and skills.
        </p>
      </div>
      <Button>Login</Button>
    </div>
  );
};

export default Front;
