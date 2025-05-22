import React from "react";
import Button from "../components/Button";
import Procard from "./Procard";
import image4 from "../assets/icons/Kidneys.png";
import insure from "../assests/icons/insure.png";
import com from "../assets/icons/com.png";
import cus from "../assets/icons/cus.png";
import sub from "../assets/images/sub.png";

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
    <section className="px-6 md:px-14 py-12 bg-gray-50 space-y-12">
      <div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-blue-500 mb-2">Pro Wellness</h3>
          <h2 className="font-bold mb-8 text-sm md:text-3xl whitespace-nowrap">
            Pro Subscriber Services
          </h2>
        </div>

        <div className="grid gap-4">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-center space-x-4 px-10">
              <img src={image4} alt={service} className="w-4 h-4" />
              <p className="text-gray-700 font-medium">{service}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:px-10">
          <Button>Subscribe</Button>
        </div>
      </div>
      <img src={sub} alt="" />

      <div className="flex flex-col items-center">
        <h2 className="py-6 text-center font-semibold text-lg">SUBSCRIPTION PLAN</h2>

        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 
            w-full 
            max-w-4xl 
            justify-items-center
          "
        >
          {plans.map((plan, idx) => (
            <Procard
              key={idx}
              className={`
                w-full max-w-xs 
                ${idx === 2 ? "sm:col-span-2 sm:col-start-1 sm:justify-self-center lg:col-span-1 lg:col-start-auto" : ""}
              `}
            >
              <div>
                <p className="font-semibold">{plan.duration}</p>
                <p className="text-sm text-gray-500">{plan.discount}</p>
              </div>
              <hr className="my-4 w-full border-gray-300" />
              <h2 className="text-xl font-bold">{plan.price}</h2>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </Procard>
          ))}
        </div>

        <div className="text-sm text-gray-600 mt-4 text-center">
          <p>Includes 7-day free trial. Cancel anytime.</p>
          <button className="mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
            Continue for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pro;
