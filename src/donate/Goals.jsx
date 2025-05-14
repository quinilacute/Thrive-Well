// import React from "react";
// import eben from "../assets/images/eben.png";
// import mart from "../assets/images/mart.png";
// import amb from "../assets/images/amb.png";
// import mich from "../assets/images/mich.png";



// const Goals = () => {
//     const goals = [
//         {
//             name: "Dr Ward Brenda",  image:{eben}, description: "We aim to reach underserved communities by funding medical programs, clinics, and essential treatments."
//         },
    
    
//         {
//             name: "Dr. Martins Austin ", image:{mart}, description: ".We offer financial assistance to help peoeple who don’t have funds for treatments receive the care they deserve."
//             },
    
    
//         {
//             name: "Dr. Amber Chopp", image:{amb}, description: "Education, screenings, and wellness programs help prevent diseases and improve overall health outcomes."
//         },
    
    
//         {
//             name: "Dr. Michelle Ambrose", image:{mich}, description: "By funding training and resources, we support doctors, nurses, and caregivers in delivering high-quality care."
//         }
//     ]
//     return(
//         <div>
//             <div>
//                 <h2>Our Goals</h2>
//                 <hr className="bg-black text-black" />
//             </div>
//             <div className="bg-gray-200 text-black text-left p-4 rounded-md my-4">
//                 {goals.map((goal) => (
//                     <div key={goal.id}>
//                         <p>{goal.description} </p>

//                         <div className="bg-blue-300">
//                             <h2>{goal.name}</h2>
//                             <img src={goal.image} alt="" />
//                         </div>
//                     </div>
//                 ))}
               
//             </div>
//         </div>
//     )
// }

// export default Goals;




import React from "react";
import eben from "../assets/images/eben.png";
import mart from "../assets/images/mart.png";
import amb from "../assets/images/amb.png";
import mich from "../assets/images/mich.png";

const Goals = () => {
  const goals = [
    {
      name: "Dr. Ward Brenda",
      image: eben,
      description:
        "We aim to reach underserved communities by funding medical programs, clinics, and essential treatments.",
    },
    {
      name: "Dr. Martins Austin",
      image: mart,
      description:
        "We offer financial assistance to help people who don’t have funds for treatments receive the care they deserve.",
    },
    {
      name: "Dr. Amber Chopp",
      image: amb,
      description:
        "Education, screenings, and wellness programs help prevent diseases and improve overall health outcomes.",
    },
    {
      name: "Dr. Michelle Ambrose",
      image: mich,
      description:
        "By funding training and resources, we support doctors, nurses, and caregivers in delivering high-quality care.",
    },
  ];

  return (
    <div>
      <div>
        <h2>Our Goals</h2>
        <hr className="bg-black text-black" />
      </div>
      <div className="bg-gray-200 text-black text-left p-4 rounded-md my-4">
        {goals.map((goal, index) => (
          <div key={index} className="my-6 flex flex-col items-center bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              <img src={goal.image} alt={goal.name} className="w-16 h-16 rounded-full mr-4" />
              <h3 className="text-xl font-semibold">{goal.name}</h3>
            </div>
            <p>{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
