import React from "react";
import Container from "../home/Procard";
import edu from "../assets/icons/edu.png";

const Why = () => {
  const benefits = [
    {
      id: 1,
      image: edu,
      name: "Wellness & Fitness Programs",
      description:
        "Wellness & Fitness Programs Stress management and mental wellness tools",
      more: "Learn More",
    },
    {
      id: 2,
      image: edu,
      name: "Stress management and mental wellness tools",
      description:
        "Quick-access emergency response guide Hotline for urgent medical questions",
      more: "Learn More",
    },
    {
      id: 3,
      image: edu,
      name: "Educational Resources",
      description:
        "Symptom and health tracking (e.g., blood sugar, blood pressure)",
      more: "Learn More",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="bg-blue-400 p-2">
      <h2 className="text-2xl font-semibold mb-8 text-center mt-6">Why Choose Us</h2>
      </div>

      <div className="flex flex-col md:flex-row md:justify-around px-2 py-14 gap-8">
        <article className="flex flex-col  text-center w-80 bg-blue-800 p-5 ">
          <img src={edu} alt="Personalized Health Management Icon" className="mb-4 w-16 h-16" />
          <h3 className="text-xl font-bold mb-2">Personalized Health Management</h3>
          <p>Symptom and health tracking (e.g., blood sugar, blood pressure)</p>
          <p className="mt-2 text-blue-600 font-medium cursor-pointer hover:underline">
            Learn More
          </p>
        </article>

        <article className="flex flex-col  text-center w-80 bg-blue-800 p-5">
          <img src={edu} alt="Educational Resources Icon" className="mb-4 w-16 h-16" />
          <h3 className="text-xl font-bold mb-2">Educational Resources & Expert Insights</h3>
          <p>Articles, guides, and videos on diabetes and hypertension</p>
          <p className="mt-2 text-blue-600 font-medium cursor-pointer hover:underline">
            Learn More
          </p>
        </article>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <Container key={benefit.id} className="p-4 border rounded shadow-sm flex flex-col items-center text-center">
            <img src={benefit.image} alt={benefit.name} className="mb-4 w-20 h-20 object-contain" />
            <h3 className="text-lg font-semibold mb-2">{benefit.name}</h3>
            <p className="mb-4">{benefit.description}</p>
            <button type="button" className="text-blue-600 hover:underline font-medium">
              {benefit.more}
            </button>
          </Container>
        ))}
      </div>
    </section>
  );
};

export default Why;
