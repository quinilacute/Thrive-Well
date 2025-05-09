import React from "react";
import Button from "../components/Buttont";
import Image3 from "../assets/images/image 21 (1).png"


const Service = () => {
    return(
        <div>
            <h3>At ThriveWell your health is our priority</h3>
            <p>Stay informed with health tips and insights for managing Diabetes and Hypertension</p>


            <div> 
                <img src={Image3} alt=""  className=""/>
                <div>
                    <img src="" alt="" />
                    <h3>Virtual Care</h3>
                </div>
                <div>
                <h2>Medical Services</h2>
                <ul>
                    <li>Talk to a specialist</li>
                    <li>24/7 Medical Support</li>
                    <li>Virtual Consultation from Home</li>
                </ul>
                </div>
            </div>
            <Button>Book Now</Button>
        </div>
    )
}

export default Service;