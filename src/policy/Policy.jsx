import React from "react";
import Navbar from "../components/Navbar";
import Oval from "./Oval";
import Poly from "./Poly";
import Rights from "./Rights";
import App from "./App";
import Footer from "../components/Footer";





function Policy() {
    return(
        <div>
            <div className="relative">
            <Oval />   
            <Navbar />
            </div>
            <Poly />
            <Rights />
            <App />
            <Footer />
        </div>
    )
}

export default Policy;