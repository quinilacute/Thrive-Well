import React from "react";
import Button from "../components/Button";

const Health = () => {
    return (
        <section className="max-w-3xl mx-auto p-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
                You Deserve to be Physically Healthy
            </h2>
            <p className="text-lg text-gray-700 mb-6">
                Get instant medical advice, book appointments, and receive prescriptions from certified doctors
            </p>
            <Button>Watch Now</Button>
        </section>
    );
}

export default Health;
