import React from "react";
import face from "../assets/icons/Facebook.png";
import insta from "../assets/icons/Instagram.png";
import twit from "../assets/icons/Twitter.png";
import link from "../assets/icons/Linkedin.png";
import thrive from "../assets/icons/ThriveWell.png";
import send from "../assets/icons/send.png"



const Footer = () => {
    return(
        <div>
            <div>
                <img src={thrive} alt="" />
                <div className="flex space-x-4">
  <a href="#" aria-label="Facebook">
    <img src={face} alt="Facebook icon" />
  </a>
  <a href="#" aria-label="Instagram">
    <img src={insta} alt="Instagram icon" />
  </a>
  <a href="#" aria-label="Twitter">
    <img src={twit} alt="Twitter icon" />
  </a>
  <a href="#" aria-label="LinkedIn">
    <img src={link} alt="LinkedIn icon" />
  </a>
</div>

               <p>2025 Medical. All Rights Reserved.</p>
            </div>

            <div>
                <h3>Subscribe Newsletter</h3>
                <p>Join our mailing list for the latest news and events. we assure you that we will not
                send unnecessary emails.</p>
                <div>
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <button type="submit" aria-label="Send Newsletter"><img src={send} alt="" /></button>
                </div>
            </div>

            <div>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our services </a></li>
                    <li><a href="">Article</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>

            <div>
                <h3>Resources </h3>
                <ul>
                    <li><a href="">FaQs</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                </ul>
            </div>

            <div>
                <h3>Company Info</h3>
                <ul>
                    <li> Email :info@Thrivewell.io</li>
                    <li>Work Hours <br />
                    Monday - Friday. 9AM - 6PM EST</li>
                </ul>
            </div>
        </div>
    )
}


export default Footer;