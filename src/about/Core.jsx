// import React from "react";
// import Button from "../components/Button";


// const Core = () => {
//     const values =[
//         { id: 1 , image: "", name: "Compassion", description: "We prioritize the well-being of individuals living with chronic illnesses by offering"},

//         { id: 2 , image: "", name: "Innovation", description: "We leverage technology and modern healthcare solutions to provide seamless, accessible, and effective health management tools."},


//         { id: 3, image: "", name: "Education", description: "We equip our users with knowledge, resources, and community support to help them take charge of their health with confidence."},


//         { id: 4, image: "", name: "Empowerment", description: "We are committed to transparency, trust, and excellence, ensuring that every service we provide meets the highest ethical and medical standards"}
//     ]
//     return(
//         <div>
//             <div>
//             <div>
//                 <img src="" alt="" />
//                 <h3>Core Values</h3>
//             </div>
//             <h2>Your Journey to Better Health Starts Here"</h2>
           
//             </div>

//             <div>
//                  {values.map((value) => (
//                         <div key={value.id}>
//                             <img src={value.image} alt={value.name} />
//                             <h3>{value.name}</h3>
//                             <p>{value.description}</p>
//                         </div>
//                     ))}  
//             </div>
//             <Button>Get Started</Button>
//         </div>
//     )
// }
// export default Core;



import React from "react";
import Button from "../components/Button";

const Core = () => {
    const values = [
        { id: 1, image: "", name: "Compassion", description: "We prioritize the well-being of individuals living with chronic illnesses by offering" },
        { id: 2, image: "", name: "Innovation", description: "We leverage technology and modern healthcare solutions to provide seamless, accessible, and effective health management tools." },
        { id: 3, image: "", name: "Education", description: "We equip our users with knowledge, resources, and community support to help them take charge of their health with confidence." },
        { id: 4, image: "", name: "Empowerment", description: "We are committed to transparency, trust, and excellence, ensuring that every service we provide meets the highest ethical and medical standards" }
    ];

    return (
        <div>
            <div>
                <div>
                    <img src="placeholder-image.png" alt="Core Values" />
                    <h3>Core Values</h3>
                </div>
                <h2>Your Journey to Better Health Starts Here</h2>
            </div>

            <div>
                {values.map((value) => (
                    <div key={value.id}>
                        <img src={value.image || "placeholder-image.png"} alt={value.name} />
                        <h3>{value.name}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
            <Button>Get Started</Button>
        </div>
    );
}

export default Core;
