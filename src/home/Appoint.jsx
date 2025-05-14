import React, { useEffect, useState } from "react";

import Button from "../components/Button";




const Appoint = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numb, setNumb] = useState('');
    const [mes, setMes] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleAppointment = (e) => {
        e.preventDefault();
        if (!name || !email || !numb || !mes ) {
            setError('pleasse input all fields');
            return;
        }
        setError('');
        setSuccess('true'); 
    }
    

    return(
        <div>
            <h3>Fix Appointment</h3>

            <div>
                <form onSubmit={handleAppointment} className="flex flex-col gap-4">
            <label htmlFor="name" className="font-bold">Name</label>
            <input id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Your Name" className="p-2 border rounded" />
            <label htmlFor="email" className="font-bold">Your Email</label>
            <input id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Your Email" className="p-2 border rounded" />

            <label htmlFor="phone" className="font-bold">Phone</label>
            <input id="number" onChange={(e) => setNumb(e.target.value)} value={name} placeholder="Your Name" className="p-2 border rounded" />
            <label htmlFor="message" className="font-bold">Message</label>
            <textarea id="message" onChange={(e) => setMes(e.target.value)} value={mes} placeholder="Enter your Question..." cols={20} rows={5} className="p-2 border rounded" />
            <Button type="submit">Book Now</Button>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">Successfully!</p>}
          </form>
               </div>

              
        </div>
    )
}

export default Appoint;