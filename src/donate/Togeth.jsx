// import React from "react";
// import Image11 from "../assets/images/image11.png";
// import Button from "../components/Button";



// const Togeth = () => {
//     return(
//         <div className="" style={{backgroundImage: `url{${Image11}}`}}>
//               <h2>Together, We can Save Lives</h2>

//               <p> We aim to reach underserved communities 
//               by funding medical programs, clinics, and essential treatments.</p>

//               <Button>DONATE NOW</Button>
//         </div>
//     )
// }

// export default Togeth;



import React from "react";
import Image11 from "../assets/images/image11.png";
import Button from "../components/Button";

const Togeth = () => {
  return (
    <div
      className="p-8 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${Image11})` }}
    >
      <h2 className="text-3xl font-bold">Together, We can Save Lives</h2>
      <p className="mt-4 mb-6">
        We aim to reach underserved communities by funding medical programs,
        clinics, and essential treatments.
      </p>
      <Button>DONATE NOW</Button>
    </div>
  );
};

export default Togeth;
