import React from "react";
import Button from "../components/Buttont";



const Rights = () => {
    return(
        <div>
            <h2>User Rights & Choices</h2>

            <div>
                <p>At THRIVE WELL, we value your privacy and are committed 
                    to ensuring you have control over your personal information. 
                    This section outlines your rights
                     and the choices you have when using our services</p>
                     <Button>I Agree</Button>
            </div>

            <div>
                <h4>You have the right to:</h4>
                <ul>
                    <li>✔️ Access, update, or delete your personal data</li>
                    <li>✔️ Opt-out of non-essential data collection and marketing communications.</li>
                    <li>✔️ Request a copy of the information we store about you.</li>
                </ul>
            </div>
        </div>
    )
}

export default Rights;