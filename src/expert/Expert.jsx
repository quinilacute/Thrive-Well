import React from "react";
import Navbar from "../components/Navbar";
import Trust from "./Trust";
import Health from "./Health";
import Meet from "./Meet";
import Footer from "../components/Footer";




function Expert() {
    return(
        <div>
            <Navbar />
            <Trust />
            <Health />
            <Meet />
            <Footer />
        </div>
    )
}

export default Expert;