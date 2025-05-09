import React from "react";
import word from "../assets/icons/word.png";


const Clients = () => {
    return(
        <div>
            <div>
                <img src={word} alt="" />
                <h2>Clients Reviews</h2>
                <p>Our patients trust us for fast, reliable, and compassionate healthcare. From seamless doctor consultations to hassle-free appointment booking, we prioritize your well-being. With top-rated medical experts, secure services, and round-the-clock support, we make healthcare simple and stress-free. Join thousands of satisfied clients who choose us for better health every day!”</p>
            </div>

            <div>
                <div>
                    <h3>Martins Charles</h3>
                    <p>Booking an appointment was effortless, and i was able to speak with a doctor within minutes </p>
                </div>

                <div>
                    <h3>Glory Wealth</h3>
                    <p>Consultation was welcoming. I love it</p>
                </div>

                <div>
                    <h3>Peace Michael</h3>
                    <p>Navigating the website was so simple! i found the information i needed in seconds</p>
                </div>
            </div>
        </div>
    )
}

export default Clients;