// import React from "react";
// import Button from "../components/Button";
// import Image7 from "../assets/images/image 32.png";


// const Value = () => {
//     const abouts = [
//     {id: 1, name: "Mission", description: "At ThriveWell, our mission is to empower individuals living with chronic illnesses by providing accessible healthcare solutions, expert guidance, and a supportive community. We are dedicated to improving health outcomes through technology, education, and personalized care, ensuring that every individual can manage their condition with confidence and ease."},

//     {id: 2, name: "Vission", description: "Our vision is to revolutionize chronic disease management by creating a world where individualswith diabetes and hypertension have the tools, knowledge, and support needed to thrive. We aim to bridge healthcare gaps by making affordable, patient-centered solutions available to everyone, anytime, anywhere."}
//     ]
//     return(
//         <div className="items-center flex flex-col justify-center">
//             <img src={Image7} alt="" className="" />

//             <div >
//                 <div className="items-center flex flex-col justify-center">
//                     {abouts.map((about) => (
//                         <div key={about.id}>
//                             <h2>{about.name}</h2>
//                             <p>{about.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <Button>About Us</Button>
//             </div>
//         </div>
//     )
// }

// export default Value;




import React from "react";
import Button from "../components/Button";
import Image7 from "../assets/images/image 32.png";

const Value = () => {
    const abouts = [
        { id: 1, name: "Mission", description: "At ThriveWell, our mission is to empower individuals living with chronic illnesses by providing accessible healthcare solutions, expert guidance, and a supportive community. We are dedicated to improving health outcomes through technology, education, and personalized care, ensuring that every individual can manage their condition with confidence and ease." },
        { id: 2, name: "Vision", description: "Our vision is to revolutionize chronic disease management by creating a world where individuals with diabetes and hypertension have the tools, knowledge, and support needed to thrive. We aim to bridge healthcare gaps by making affordable, patient-centered solutions available to everyone, anytime, anywhere." }
    ];

    return (
        <div className="items-center flex flex-col justify-center">
            <img src={Image7} alt="ThriveWell Vision" className="w-full" />
            <div>
                <div className="items-center flex flex-col justify-center">
                    {abouts.map((about) => (
                        <div key={about.id}>
                            <h2>{about.name}</h2>
                            <p>{about.description}</p>
                        </div>
                    ))}
                </div>
                <Button>About Us</Button>
            </div>
        </div>
    );
}

export default Value;
