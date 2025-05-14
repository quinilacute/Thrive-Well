import React from "react";
import Navbar from "../components/Navbar";
import Support from "./Support";
import Tips from "./Tips";
import Goals from "./Goals";
import Togeth from "./Togeth";
import Footer from "../components/Footer";



function Donate() {
     return(
        <div>
            <Navbar />
            <Support />
            <Tips />
            <Goals />
            <Togeth />
            <Footer />
        </div>
     )
}

export default Donate;