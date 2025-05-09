import React from "react";
import Button from "../components/Buttont";



const Support = () =>{
    return(
        <div>

            <div>
                <img src="" alt="" />
                <p>Let's Help</p>
            </div>

            <div>
                <h2>Support ThriveWell:
                 Transform Lives Through
                Healthcare Donations</h2>
                <p>At Thrive Well, we believe that access to quality healthcare 
                    is a fundamental right, not a privilege. Every day, countless individuals struggle to afford life-saving treatments, essential medications, and basic medical care. With your support, we can bridge this
                     gap and bring hope to those in need.</p>
            </div>

            <div>
                <div>
                    <img src="" alt="" />
                    <h3>Phone</h3>
                    <p>+234-8011135610</p>
                </div>

                <div>
                    <img src="" alt="" />
                    <h3>Email</h3>
                    <p>info@Thrivewell.io</p>
                </div>

                <div>
                    <img src="" alt="" />
                    <h3>Website</h3>
                    <p>www.thrivewell.com</p>
                </div>

                <div>
                    <img src="" alt="" />
                    <h3>Address</h3>
                    <p>99 Freedom way, Lekki- Lagos</p>
                </div>
            </div>


            <div>
                <form onSubmit={handleContact} className="flex flex-col gap-4">
           
            <input id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name:" className="p-2 border rounded" />
          
            <input id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email:" className="p-2 border rounded" />
         
            <input id="phone" onChange={(e) => setPhone(e.target.value)} value={name} placeholder="Phone No:" className="p-2 border rounded" />

            <input id="donation" onChange={(e) => setDonation(e.target.value)} value={name} placeholder="Donation Amount:" className="p-2 border rounded" />
        
            <textarea id="message" onChange={(e) => setMas(e.target.value)} value={mas} placeholder="Message:" cols={20} rows={5} className="p-2 border rounded" />
            <Button type="submit">DONATE HERE</Button>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">Successfully!</p>}
          </form>
          </div>
        </div>
    )
}


export default Support;