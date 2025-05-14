// import React from "react";
// import Container from "../components/ContainerM";
// import Dia from "../assets/images/Dia.png";
// import Rhe from "../assets/images/Rhe.png";
// import you from "../assets/images/you.png";
// import depres from "../assets/images/depres.png";
// import Card from "../assets/images/Card.png";
// import Heart from "../assets/images/Heart.png";



// const Guides = () => {
//     return(
//         <div>
//             <div>
//                 <Container>
//                     <img src={Dia} alt="" />
//                     <h3>Diabetes</h3>
//                     <p>More than 30 million people have diabetes; yet, millions don't know they do. Learn why</p>
//                 </Container>

//                 <Container>
//                     <img src={Heart} alt="" />
//                     <h3>Heart Disease</h3>
//                     <p>Heart disease covers many ailments, but they all add up to the top killer of men and women.</p>
//                 </Container>

//                 <Container>
//                     <img src={depres} alt="" />
//                     <h3>Depression</h3>
//                     <p>More than just a passing sadness, depression can undermine quality of life.</p>
//                 </Container>

//                 <Container>
//                     <img src={Card} alt="" />
//                     <h3>Cardiac Arrest</h3>
//                     <p>More than 30 million Americans have diabetes; yet, millions don't know they do. Learn why</p>
//                 </Container>

//                 <div>
//                     <img src={Rhe} alt="" />
//                     <h3>Rhematoid Arthritis</h3>
//                     <p>Rheumatoid arthritis causes more than aching joints.</p>
//                 </div>

//                 <Container>
//                     <img src={you} alt="" />
//                     <p>More than just a passing sadness, depression can undermine quality of life.</p>
//                 </Container>
//             </div>
//         </div>
//     )
// }

// export default Guides;



import React from "react";
import HealthGuideCard from "./HealthGuideCard"; // renamed

import Dia from "../assets/images/Dia.png";
import Rhe from "../assets/images/Rhe.png";
import you from "../assets/images/you.png";
import depres from "../assets/images/depres.png";
import Card from "../assets/images/Card.png";
import Heart from "../assets/images/Heart.png";

const Guides = () => {
    return (
        <div>
            <div>
                <HealthGuideCard>
                    <img src={Dia} alt="" />
                    <h3>Diabetes</h3>
                    <p>More than 30 million people have diabetes; yet, millions don't know they do. Learn why</p>
                </HealthGuideCard>

                <HealthGuideCard>
                    <img src={Heart} alt="" />
                    <h3>Heart Disease</h3>
                    <p>Heart disease covers many ailments, but they all add up to the top killer of men and women.</p>
                </HealthGuideCard>

                <HealthGuideCard>
                    <img src={depres} alt="" />
                    <h3>Depression</h3>
                    <p>More than just a passing sadness, depression can undermine quality of life.</p>
                </HealthGuideCard>

                <HealthGuideCard>
                    <img src={Card} alt="" />
                    <h3>Cardiac Arrest</h3>
                    <p>More than 30 million Americans have diabetes; yet, millions don't know they do. Learn why</p>
                </HealthGuideCard>

                <div>
                    <img src={Rhe} alt="" />
                    <h3>Rheumatoid Arthritis</h3>
                    <p>Rheumatoid arthritis causes more than aching joints.</p>
                </div>

                <HealthGuideCard>
                    <img src={you} alt="" />
                    <p>More than just a passing sadness, depression can undermine quality of life.</p>
                </HealthGuideCard>
            </div>
        </div>
    );
};

export default Guides;
