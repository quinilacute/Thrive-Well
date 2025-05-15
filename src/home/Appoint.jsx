import React, { useState } from "react";
import Button from "../components/Button";

const Appoint = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numb, setNumb] = useState("");
  const [mes, setMes] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAppointment = (e) => {
    e.preventDefault();
    if (!name || !email || !numb || !mes) {
      setError("Please input all fields");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("true");
  };

  return (
    <div className="bg-blue-600 p-8 min-h-screen flex items-start justify-end">
      {/* Content div aligned right, transparent background */}
      <div className="max-w-md w-full bg-transparent text-white">
        <h3 className="text-2xl font-bold mb-6">Fix Appointment</h3>

        <form onSubmit={handleAppointment} className="flex flex-col gap-4">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your Name"
            className="p-2 border border-blue-300 rounded text-blue-900"
          />

          <label htmlFor="email" className="font-bold">
            Your Email
          </label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your Email"
            className="p-2 border border-blue-300 rounded text-blue-900"
          />

          <label htmlFor="phone" className="font-bold">
            Phone
          </label>
          <input
            id="number"
            onChange={(e) => setNumb(e.target.value)}
            value={numb}
            placeholder="Your Phone Number"
            className="p-2 border border-blue-300 rounded text-blue-900"
          />

          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            id="message"
            onChange={(e) => setMes(e.target.value)}
            value={mes}
            placeholder="Enter your Question..."
            rows={5}
            className="p-2 border border-blue-300 rounded text-blue-900"
          />

          <div className="flex justify-end">
            <Button type="submit">Book Now</Button>
          </div>

          {error && <p className="text-red-300">{error}</p>}
          {success && <p className="text-green-300">Successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Appoint;
