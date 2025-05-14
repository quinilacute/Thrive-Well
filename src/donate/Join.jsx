// import React from "react";
// import Image9 from "../assets/images/image 21.png";



// const Join = () => {
//     return(
//         <div className="" style={{backgroundImage: `url{${Image9}}`}}>
//             <h2>JOin Us In Building a Healthier Future</h2>
//             <p>Your donation to Thrivewell isn’t just a gift-it’s a lifeline 
//                 for someone in urgent need. Together, we can ensure that everyone,
//                  regardless of 
//                 their background, has access to quality healthcare</p>
//         </div>
//     )
// }


// export default Join; 


import React from "react";
import Image9 from "../assets/images/image 21.png";

const Join = () => {
    return(
        <div className="" style={{ backgroundImage: `url(${Image9})` }}>
            <h2>Join Us In Building a Healthier Future</h2>
            <p>Your donation to Thrivewell isn’t just a gift—it’s a lifeline 
                for someone in urgent need. Together, we can ensure that everyone,
                regardless of their background, has access to quality healthcare.
            </p>
        </div>
    );
}

export default Join;
