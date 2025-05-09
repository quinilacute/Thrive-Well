import React from "react";

import Button from "../components/Button";




const Appoint = () => {
    return(
        <div>
            <h3>Fix Appointment</h3>

            <div>
                <form onSubmit={handleContact} className="flex flex-col gap-4">
            <label htmlFor="name" className="font-bold">Name</label>
            <input id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Your Name" className="p-2 border rounded" />
            <label htmlFor="email" className="font-bold">Your Email</label>
            <input id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Your Email" className="p-2 border rounded" />

            <label htmlFor="phone" className="font-bold">Phone</label>
            <input id="number" onChange={(e) => setNumb(e.target.value)} value={name} placeholder="Your Name" className="p-2 border rounded" />
            <label htmlFor="message" className="font-bold">Message</label>
            <textarea id="message" onChange={(e) => setMes(e.target.value)} value={mas} placeholder="Enter your Question..." cols={20} rows={5} className="p-2 border rounded" />
            <Button type="submit">Send</Button>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">Successfully!</p>}
          </form>
               </div>

            <Button>Book Now</Button>   
        </div>
    )
}