// import React from "react";
// import Button from "../components/Button";



// const Rights = () => {
//     return(
//         <div>
//             <h2>User Rights & Choices</h2>

//             <div>
//                 <p>At THRIVE WELL, we value your privacy and are committed 
//                     to ensuring you have control over your personal information. 
//                     This section outlines your rights
//                      and the choices you have when using our services</p>
//                      <Button>I Agree</Button>
//             </div>

//             <div>
//                 <h4>You have the right to:</h4>
//                 <ul>
//                     <li>✔️ Access, update, or delete your personal data</li>
//                     <li>✔️ Opt-out of non-essential data collection and marketing communications.</li>
//                     <li>✔️ Request a copy of the information we store about you.</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Rights;



import React from "react";
import Button from "../components/Button";

const Rights = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-8">User Rights & Choices</h1>

      <section className="mb-8">
        <p className="text-lg">
          At THRIVE WELL, we value your privacy and are committed to ensuring you have control over your personal information. 
          This section outlines your rights and the choices you have when using our services.
        </p>
        <div className="mt-6 text-center">
          <Button>I Agree</Button>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">You have the right to:</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>✔️ Access, update, or delete your personal data</li>
          <li>✔️ Opt-out of non-essential data collection and marketing communications.</li>
          <li>✔️ Request a copy of the information we store about you.</li>
        </ul>
      </section>
    </div>
  );
};

export default Rights;
