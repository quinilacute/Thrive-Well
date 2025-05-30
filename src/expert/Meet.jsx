import React from "react";
import Button from "../components/Button";
import doc1 from "../assets/images/doc1.png";
import doc from "../assets/images/doc.png";
import doc2 from "../assets/images/doc2.png";
import doc3 from "../assets/images/doc3.png";


const Meet = () => {
    return (
        <section className="max-w-3xl mx-auto p-6 text-center justify-start opacity-50">
            <div>
                <hr className="mb-4 border-gray-300" />
                <h3 className="text-xl font-semibold mb-2">Meet a Doctor</h3>

                <h2 className="text-3xl font-bold mb-4">
                    We’re Dedicated To Your Well-Being
                </h2>



                <p className="text-lg text-gray-700 mb-6">
                    What’s your biggest concern when it comes to online healthcare consultations? Let’s talk!
                </p>
            </div>
            <Button>Contact Us</Button>

            <div>
                <img src={doc} alt="" />
                <img src={doc1} alt="" />
                <img src={doc2} alt="" />
                <img src={doc3} alt="" />
            </div>
        </section>
    );
}

export default Meet;
