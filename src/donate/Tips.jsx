import React from "react";
import Sun from "../assets/icons/sun.png";



const Tips = () => {
    return(
        <div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

            <div>
                <img src={Sun} alt="Sun" />
                <div>
                    <div>
                        <img src={Love} alt="" />
                        <img src={Love} alt="" />
                        <img src={Love} alt="" />
                        <img src={Love} alt="" />
                    </div>

                    <div>
                        <h2>Choose a cause That Matters to You -</h2>
                        <p>Whether it’s cancer care, maternal health, or mental health, direct your donation where it can make the biggest difference.</p>
                    </div>
                    <div>
                        <h2>Give in Multiple Ways</h2>
                        <p>Consider one-time gifts, monthly contributions, or corporate matching programs to maximize your impact.</p>
                    </div>

                    <div>
                        <h2>Support Medical Supply Donations</h2>
                        <p>Many hospitals and clinics benefit from in-kind donations such as PPE, medical devices, and essential medications.</p>
                    </div>
                    <div>
                        <h2>Encourage Community Giving</h2>
                        <p>Fundraising, peer-to-peer campaigns, and social media sharing can amplify support for healthcare initiatives.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Tips;