import React from "react";
import Core from "./Core";
import Mission from "./Missions";
import Show from "./Show";
import Why from "./Why";
import First from "./First";
import Footer from "../components/Footer";





function About()  {
    return(
        <div> 
            <First />
            <Show />
            <Mission />
            <Why />
            <Core />
            <Footer />
        </div>
    )
}

export default About;