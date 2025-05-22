import React from "react";
import Navbar from "../components/Navbar";
import Nate from "./Nate";
import Tips from "./Tips";
import Goals from "./Goals";
import Togeth from "./Togeth";
import Footer from "../components/Footer";



function Donate() {
     return(
        <div className="py-14">
            <Navbar />
            <Nate />
            <Tips />
            <Goals />
            <Togeth />
            <Footer />
        </div>
     )
}

export default Donate;