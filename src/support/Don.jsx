import React, { useState } from "react";
import Button from "../components/Button";



const Don = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [donation, setDonation] = useState('');
    const [mes, setMes] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleContact = (e) => {
        e.preventDefault();
    
        if (!name || !email || !phone || !donation || !mes) {
          setError("Please fill in all the fields");
          setSuccess(false);
          return;
        }
    
        if (isNaN(donation) || Number(donation) <= 0) {
          setError("Please enter a valid donation amount.");
          setSuccess(false);
          return;
        }
    
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
          setError("");
          setName("");
          setEmail("");
          setPhone("");
          setDonation("");
          setMes("");
        }, 2000);
      };
    



    return(
        <div className="mt-16">
        <form onSubmit={handleContact} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name:"
              className="p-2 border rounded"
              required
            />

            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email:"
              className="p-2 border rounded"
              required
            />

            <input
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone No:"
              className="p-2 border rounded"
              required
            />

            <input
              id="donation"
              onChange={(e) => setDonation(e.target.value)}
              value={donation}
              placeholder="Donation Amount:"
              className="p-2 border rounded"
              required
            />
          </div>

          <textarea
            id="message"
            onChange={(e) => setMes(e.target.value)}
            value={mes}
            placeholder="Message:"
            cols={20}
            rows={5}
            className="p-2 border rounded w-full"
            required
          />

          <Button type="submit" disabled={loading}>DONATE HERE</Button>

        
          {loading && <p className="text-blue-500">Submitting...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-600">Thank you for your support!</p>}
        </form>
      </div>
    )
}


export default Don;