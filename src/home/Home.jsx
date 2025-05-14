import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Avail from "./Avail";
import Video from "./Video";
import Service from "./Service";
import Pro from "./Pro";
import Test from "./Test";
import Arti from "./Article";
import Quest from "./Quest";
import Appoint from "./Appoint";
import Penny from "./Penny";
import Footer from "../components/Footer";


function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Avail />
            <Video />
            <Service />
            <Pro />
            <Test />
            <Arti />
            <Quest />
            <Appoint />
            <Penny />
            <Footer />
        </div>
    )
}


export default Home;