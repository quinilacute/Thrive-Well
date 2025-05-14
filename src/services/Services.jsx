import React from "react";
import Container from "./HealthGuideCard";
import mobile from "../assets/icons/mobile.png";
import book from "../assets/icons/book.png";
import roll from "../assets/icons/roll.png";
import screen from "../assets/icons/screen.png";




const Services = () => {
    return(
        <div>
            <Container>
                <img src={mobile} alt="" />
                <h3>Consult a Doctor</h3>
                <p>Get expert opinions, prescription, and health guidance anytime, anywhere.</p>
            </Container>

            <Container>
                <img src={book} alt="" />
                <h3>Medical Appointments</h3>
                <p>Schedule a visit with a trusted healthcare professional at your convenience</p>
            </Container>

            <Container>
                <img src={roll} alt="" />
                <h3>Emergency Case</h3>
                <p>Quick access to emergency medical assistance - available 24/7.</p>
            </Container>

            <Container>
                <img src={screen} alt="" />
                <h3>Health Checkups & Tests</h3>
                <p>Stay on top of your health with our fast and reliable medical tests.</p>
            </Container>
        </div>
    )
}

export default Services;