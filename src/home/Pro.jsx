// import React from "react";
// import Button from "../components/Button";
// import Procard from "./Procard";
// import image4 from "../assets/images/image4.png";



// const Pro = () => {
//     return(
//         <div>

//           <div>
//             <h3>Pro Wellness</h3>
//             <h2>Pro Subscribers Services</h2>
//             <div>
//                 <div>
//                     <img src={image4} alt="" />
//                     <p>Custom Nutrition Plan</p>
//                 </div>

//                 <div>
//                 <img src={image4} alt="" />
//                     <p>Community Support & Forum</p>
//                 </div>

//                 <div>
//                 <img src={image4} alt="" />
//                     <p>Insurrance HMO</p>
//                 </div>
//             </div>
//             <Button>Subscribe</Button>
//           </div>

//           <img src={image4} alt="" className="" />


//           <div>
//             <Procard>
//                 <div>
//                     <p>1 Months Plan</p>
//                     <p>Up to 5% Discount</p>
//                 </div>
//                 <hr  className="text-white hover:text-blue-400"/>

//                 <h2>#5000</h2>

//                 <button type="submit">Suscribe</button>
//             </Procard>

//             <Procard>
//                 <div>
//                     <p>3 Months Plan</p>
//                     <p>Up to 5% Discount</p>
//                 </div>

//                 <hr  className="text-white hover:text-blue-400"/>

//                 <h2>#12000</h2>

//                 <button type="submit">Suscribe</button>
//             </Procard>

//             <Procard>
//                 <div>
//                     <p>6 Months Plan</p>
//                     <p>Up to 5% Discount</p>
//                 </div>

//                 <hr  className="text-white hover:text-blue-400"/>

//                 <h2>#25000</h2>

//                 <button type="submit">Suscribe</button>
//             </Procard>
//           </div>

//           <p>Includes 7-day free trial. Cancel anytime</p>

//           <button>Continue for free</button>
//         </div>
//     )
// }


// export default Pro;




import React from "react";
import Button from "../components/Button";
import Procard from "./Procard";
import image4 from "../assets/images/image4.png";

const plans = [
  {
    duration: "1 Month Plan",
    discount: "Up to 5% Discount",
    price: "#5000"
  },
  {
    duration: "3 Months Plan",
    discount: "Up to 8% Discount",
    price: "#12000"
  },
  {
    duration: "6 Months Plan",
    discount: "Up to 12% Discount",
    price: "#25000"
  }
];

const services = [
  "Custom Nutrition Plan",
  "Community Support & Forum",
  "Insurance HMO"
];

const Pro = () => {
  return (
    <section className="px-6 py-12 bg-gray-50 text-center space-y-12">
      <div>
        <h3 className="text-lg font-semibold text-blue-500 mb-2">Pro Wellness</h3>
        <h2 className="text-3xl font-bold mb-8">Pro Subscriber Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center mb-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              <img src={image4} alt={service} className="w-20 h-20" />
              <p className="text-gray-700 font-medium">{service}</p>
            </div>
          ))}
        </div>
        <Button>Subscribe</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <Procard key={idx}>
            <div>
              <p className="font-semibold">{plan.duration}</p>
              <p className="text-sm text-gray-500">{plan.discount}</p>
            </div>
            <hr className="my-4 w-full" />
            <h2 className="text-xl font-bold">{plan.price}</h2>
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Subscribe
            </button>
          </Procard>
        ))}
      </div>

      <div className="text-sm text-gray-600 mt-4">
        <p>Includes 7-day free trial. Cancel anytime.</p>
        <button className="mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
          Continue for free
        </button>
      </div>
    </section>
  );
};

export default Pro;
