import React from "react";
import Navbar from "../components/Navbar";
import Services from "./Services";
import Guides from "./Guides";
import Clients from "./Clients";
import Footer from "../components/Footer";




function Service() {
    return(
        <div>
            <Navbar />
            <Services />
            <Guides />
            <Clients />
            <Footer />
        </div>
    )
}


export default Service;