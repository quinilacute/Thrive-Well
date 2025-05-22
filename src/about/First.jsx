import React from "react";
import Navbar from "../components/Navbar";
import bg from '../assets/images/secondbg.png';

const First = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col px-4 bg-no-repeat bg-cover "  style={{
            backgroundImage: ` url(${bg})`
          }}>
    <div className="flex flex-row items-center justify-between py-6 px-4">
      <Navbar />
    </div>

   
<div className="items-center justify-center py-14">
<p className= "mt-14 text-white text-center text-xl font-semibold">
      Bridging gaps between patients and doctors.
    </p>

</div>


</div>
  );
}

export default First;





