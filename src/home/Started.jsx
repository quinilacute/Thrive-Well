import React from "react";
import { Router } from "react-router-dom";
import Button from "../components/Buttont";
import back1 from "../assets/images/image 27.png";
import Avail from "./Avail";


const Started = () =>{
    return(
        <div className=" bg-cover bg-no-reepeat bg-center h-96" 
        style={{backgroundImage: `url(${back1})`}}>  
                <Button>Get Started</Button>
                <Avail/>
        </div>
    )
}

export default Started;