import React from "react";
import Navbar from "../components/Navbar";
import Trust from "./Trust";
import Health from "./Health";
import Meet from "./Meet";
import Footer from "../components/Footer";
import our from "../assets/images/our.png"




function Expert() {
    return(
        <div className="bg-blue-200">
           <div style={backgrondimage our}>
           <Navbar />
           </div>
            <Trust />
            <Health />
            <Meet />
            <Footer />
        </div>
    )
}

export default Expert;