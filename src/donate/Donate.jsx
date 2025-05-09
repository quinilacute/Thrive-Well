import React from "react";
import Image11 from "../assets/images/image11.png";
import Button from "../components/Buttont";



const Donate = () => {
    return(
        <div className="" style={{backgroundImage: `{${Image11}}`}}>
              <h2>Together, We can Save Lives</h2>

              <p> We aim to reach underserved communities 
              by funding medical programs, clinics, and essential treatments.</p>

              <Button>DONATE NOW</Button>
        </div>
    )
}

export default Donate;