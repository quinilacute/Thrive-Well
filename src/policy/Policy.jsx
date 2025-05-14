import React from "react";
import Navbar from "../components/Navbar";
import Poly from "./Poly";
import Rights from "./Rights";
import App from "./App";
import Footer from "../components/Footer";





function Policy() {
    return(
        <div>
            <Navbar />
            <Poly />
            <Rights />
            <App />
            <Footer />
        </div>
    )
}

export default Policy;