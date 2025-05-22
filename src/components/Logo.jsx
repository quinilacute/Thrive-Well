import React from "react";
import logo from "../assets/icons/Thrivewell.png";
import logo1 from "../assets/icons/ThriveWell.png";





const Logo = () => {
    return(
        <div>
            <div className="flex flex-col">
                <img src={logo} alt="logo first part" />
                <img src={logo1} alt="logo second part" />
            </div>
        </div>
    )
}

export default Logo;