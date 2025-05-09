import React from "react";
import Button from "../components/Buttont";
import Container from "./Procon";
import Image4 from "../assets/images/ image 27.png";



const Pro = () => {
    return(
        <div>

          <div>
            <h3>Pro Wellness</h3>
            <h2>Pro Subscribers Services</h2>
            <div>
                <div>
                    <img src="" alt="" />
                    <p>Custom Nutrition Plan</p>
                </div>

                <div>
                    <img src="" alt="" />
                    <p>Community Support & Forum</p>
                </div>

                <div>
                    <img src="" alt="" />
                    <p>Insurrance HMO</p>
                </div>
            </div>
            <Button>Subscribe</Button>
          </div>

          <img src={Image4} alt="" className="" />


          <div>
            <Container>
                <div>
                    <p>1 Months Plan</p>
                    <p>Up to 5% Discount</p>
                </div>
                <hr  className="text-white hover:text-blue-400"/>

                <h2>#5000</h2>

                <button type="submit">Suscribe</button>
            </Container>

            <Container>
                <div>
                    <p>3 Months Plan</p>
                    <p>Up to 5% Discount</p>
                </div>

                <hr  className="text-white hover:text-blue-400"/>

                <h2>#12000</h2>

                <button type="submit">Suscribe</button>
            </Container>

            <Container>
                <div>
                    <p>6 Months Plan</p>
                    <p>Up to 5% Discount</p>
                </div>

                <hr  className="text-white hover:text-blue-400"/>

                <h2>#25000</h2>

                <button type="submit">Suscribe</button>
            </Container>
          </div>

          <p>Includes 7-day free trial. Cancel anytime</p>

          <button>Continue for free</button>
        </div>
    )
}


export default Pro;