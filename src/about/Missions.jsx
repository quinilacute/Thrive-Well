import React from "react";
import Button from "../components/Buttont";
import Image7 from "../assets/images/image 32.png";


const Value = () => {
    return(
        <div>
            <img src={Image7} alt="" className="" />

            <div>
                <div>
                    <h2>Mission</h2>
                    <p>At ThriveWell, our mission is to empower individuals 
                        living with chronic illnesses by providing accessible 
                        healthcare solutions, expert guidance, and a supportive 
                        community. We are dedicated to improving health outcomes 
                        through technology, education, and personalized care,
                         ensuring that every individual can 
                        manage their condition with confidence and ease.</p>
                </div>


                <div>
                    <h2>Vision</h2>
                    <p>Our vision is to revolutionize chronic disease 
                        management by creating a world where individuals
                         with diabetes and hypertension have the tools, knowledge, 
                         and support needed to thrive. We aim to bridge healthcare
                          gaps by making affordable, patient-centered solutions 
                          available to everyone,
                         anytime, anywhere.</p>
                </div>

                <Button>About Us</Button>
            </div>
        </div>
    )
}

export default Value;