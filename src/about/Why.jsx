// import React from "react";
// import Container from "../home/Procard";



// const Why = () => {

//     const benefits = [
//         {id: 1 , image: "", name: "Wellness & Fitness Programs", description: "Wellness & Fitness Programs Stress management and mental ", more:""},


//         {id: 2, image: "", name: "Stress management and mental wellness tools", description: "Quick-access emergency response guide Hotline for urgent medical questions", more:""},

//         {id:3, image: "", name: "Educational Resources", description: "Symptom and health tracking (e.g., blood sugar, blood pressure)", more:""}
//     ]
//     return(
//         <div>
           
//             <div>
//             <h2>Why Choose Us</h2>
//                 <div>
//                     icon
//                     <h3> Personalized Health Management</h3>
//                     <p>Symptom and health tracking (e.g., blood sugar, blood pressure)</p>
//                     <p>Learn More</p>
//                 </div>

//                 <div>
//                     icon
//                     <h3>Educational Resources & Expert Insights</h3>
//                     <p>Articles, guides, and videos on diabetes and hypertension</p>
//                     <p>Learn More</p>
//                 </div>
//             </div>

//             <div>
//             {benefits.map((benefit) => (

//                  <Container key={benefit.id} >
//                  <img src={benefits.image} alt={benefit.name} />  
//                  <h3>{benefit.name}</h3>
//                  <p>{benefit.name}</p>
//                  <button>{benefit.more}</button>
//              </Container>
//             ))}
               
//             </div>
//         </div>
//     )
// }


// export default Why;




import React from "react";
import Container from "../home/Procard";

const Why = () => {
    const benefits = [
        { id: 1, image: "placeholder-image.png", name: "Wellness & Fitness Programs", description: "Wellness & Fitness Programs Stress management and mental wellness tools", more: "Learn More" },
        { id: 2, image: "placeholder-image.png", name: "Stress management and mental wellness tools", description: "Quick-access emergency response guide Hotline for urgent medical questions", more: "Learn More" },
        { id: 3, image: "placeholder-image.png", name: "Educational Resources", description: "Symptom and health tracking (e.g., blood sugar, blood pressure)", more: "Learn More" }
    ];

    return (
        <div>
            <div>
                <h2>Why Choose Us</h2>
                <div>
                    <img src="icon.png" alt="Icon" />
                    <h3>Personalized Health Management</h3>
                    <p>Symptom and health tracking (e.g., blood sugar, blood pressure)</p>
                    <p>Learn More</p>
                </div>

                <div>
                    <img src="icon.png" alt="Icon" />
                    <h3>Educational Resources & Expert Insights</h3>
                    <p>Articles, guides, and videos on diabetes and hypertension</p>
                    <p>Learn More</p>
                </div>
            </div>

            <div>
                {benefits.map((benefit) => (
                    <Container key={benefit.id}>
                        <img src={benefit.image} alt={benefit.name} />
                        <h3>{benefit.name}</h3>
                        <p>{benefit.description}</p>
                        <button>{benefit.more}</button>
                    </Container>
                ))}
            </div>
        </div>
    );
}

export default Why;
