import React from "react";
import ArtCon from "./ArtCon";



const Article = () => {
    return(
        <div>
            <h2>Articles and Resources</h2>

            <div>
                <ArtCon>
                    <p>icon here</p>
                    <h2>Hypetension</h2>
                    <p>Uncontrolled high blood pressure can 
                        lead to stroke, heart failure, 
                        and kidney disease...Read more</p>
                </ArtCon>

                <ArtCon>
                    <p>icon here</p>
                    <h2>Diabetes</h2>
                    <p>Diabetes can feel overwhelming, 
but small daily habits make a 
big difference...Read more</p>
                </ArtCon>

                <ArtCon>
                    <p>icon here</p>
                    <h2>Cardiac Arrest</h2>
                    <p>A heart attack can lead to cardiac arrest
 if untreated. Quick response with
CPR and defibrillation can save lives</p>
                </ArtCon>

                <ArtCon>
                    <p>icon here</p>
                    <h2>Emergency</h2>
                    <p>Medical emergencies like heart attacks,
strokes, and diabetic crises require
immediate action to prevent it... </p>
                </ArtCon>


                <ArtCon>
                    <p>icon here</p>
                    <h2>Exercises</h2>
                    <p>The best exercises include brisk 
walking, cycling, swimming, and 
strength training...Read More</p>
                </ArtCon>


                <ArtCon>
                    <p>icon here</p>
                    <h2>Nutrition</h2>
                    <p>What you eat directly impacts 
your risk for diseases like diabetes 
and hypertension...Read MorE</p>
                </ArtCon>
            </div>
        </div>
    )
}


export default Article;