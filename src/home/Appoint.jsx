import React, { useState } from "react";
import Button from "../components/Button";

const Appoint = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numb, setNumb] = useState("");
  const [mes, setMes] = useState("");
  const [serv, setServ] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAppointment = (e) => {
    e.preventDefault();
    if (!name || !email || !numb || !mes || !serv) {
      setError("Please input all fields");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("true");
  };

  return (
    <div className="bg-blue-600 min-h-screen flex items-start justify-end p-6">
      {/* Container aligned right with max width and responsive padding */}
      <div className="max-w-sm w-full bg-transparent">
        <h3 className="text-2xl mb-6 text-white">Fix Appointment</h3>

        <form onSubmit={handleAppointment} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your Name"
              className="p-2 w-full border border-blue-300 rounded text-blue-900 placeholder:text-black placeholder:text-xs"
            />

            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your Email"
              className="p-2 w-full border border-blue-300 rounded text-blue-900 placeholder:text-black placeholder:text-xs"
            />

            <input
              id="number"
              onChange={(e) => setNumb(e.target.value)}
              value={numb}
              placeholder="Your Phone Number"
              className="p-2 w-full border border-blue-300 rounded text-blue-900 placeholder:text-black placeholder:text-xs"
            />

            <input
              id="service"
              onChange={(e) => setServ(e.target.value)}
              value={serv}
              placeholder="Type of Service"
              className="p-2 w-full border border-blue-300 rounded text-blue-900 placeholder:text-black placeholder:text-xs"
            />
          </div>

          <textarea
            id="message"
            onChange={(e) => setMes(e.target.value)}
            value={mes}
            placeholder="Enter your Question..."
            rows={5}
            className="w-full p-2 border border-blue-300 rounded text-blue-900 placeholder:text-black placeholder:text-xs resize-none"
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
