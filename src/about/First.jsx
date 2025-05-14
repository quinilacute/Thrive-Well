// import React from "react";
// import Nav from "../components/Navbar";
// import Image4 from '../assets/images/image4.png';





// const First = () => {
//     return(
//        <div className="bg-cover bg-no-repeat bg-center h-96  brightness-50 transparent-40" style={{ backgroundImage: `url(${Image4})` }}
//        >
//         <Nav />
//         <p>Bridging gaps between patients and doctors.</p>
//        </div>
//     )
// }


// export default First;



import React from "react";
import Nav from "../components/Navbar";
import Image4 from '../assets/images/image4.png';

const First = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center h-96 brightness-50 transparent-40" style={{ backgroundImage: `url(${Image4})` }}>
            <Nav />
            <p>Bridging gaps between patients and doctors.</p>
        </div>
    );
}

export default First;
