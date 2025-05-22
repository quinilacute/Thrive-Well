import React from "react";
import Button from "../components/Button";
import des from "../assets/images/des.png";

const Health = () => {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center bg-white justify-end text-center">
      <h2 className="text-3xl font-bold mt-14 sm:inline">
        You Deserve to be Physically Healthy
      </h2>
      <p className="text-lg text-gray-700 py-14 mt-13 opacity-50">
        Get instant medical advice, book appointments,<br />
        and receive prescriptions from certified doctors
      </p>
      <Button></Button>

      <img src={des} alt="" />
    </section>
  );
};

export default Health;
