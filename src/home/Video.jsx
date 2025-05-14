// import React from "react";
// import vid from "../assets/images/vid.png";




// const Video = () => {
//     return(
//         <div>
           
//          <h2>Diabetes & Hypertension What The Experts Are Saying</h2>
//          <img src={vid} alt="" />
//          <div>
//                 <h3>At ThriveWell your health is our priority</h3>
//                         <p>Stay informed with health tips and insights for
//                              managing Diabetes and Hypertension</p>
//          </div>
//         </div>
//     )
// }


// export default Video;



import React from "react";
import vid from "../assets/images/vid.png";

const Video = () => {
  return (
    <div className="bg-white text-black px-6 py-10 flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-semibold text-center">
        Diabetes & Hypertension: What The Experts Are Saying
      </h2>

      <img src={vid} alt="Expert video on health" className="w-full max-w-2xl rounded-lg shadow-md" />

      <div className="text-center">
        <h3 className="text-lg font-medium">At ThriveWell, your health is our priority</h3>
        <p className="text-gray-600 mt-2">
          Stay informed with health tips and insights for managing Diabetes and Hypertension.
        </p>
      </div>
    </div>
  );
};

export default Video;
