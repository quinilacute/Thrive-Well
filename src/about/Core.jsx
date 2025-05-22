import React from "react";
import Button from "../components/Button";
import span from "../assets/icons/span.png";
import check from "../assets/icons/check.png";

const Core = () => {
  const values = [
    {
      id: 1,
      image: "",
      name: "Compassion",
      description:
        "We prioritize the well-being of individuals living with chronic illnesses by offering",
    },
    {
      id: 2,
      image: "",
      name: "Innovation",
      description:
        "We leverage technology and modern healthcare solutions to provide seamless, accessible, and effective health management tools.",
    },
    {
      id: 3,
      image: "",
      name: "Education",
      description:
        "We equip our users with knowledge, resources, and community support to help them take charge of their health with confidence.",
    },
    {
      id: 4,
      image: "",
      name: "Empowerment",
      description:
        "We are committed to transparency, trust, and excellence, ensuring that every service we provide meets the highest ethical and medical standards",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto p-6 text-center">
       <div className="flex flex-col">
       <img
          src="span.png"
          alt="Core V"
          className=""
        />
        <h3 className="text-2xl font-semibold">Core Values</h3>
       </div>
      <header className="mb-10">
      
        <h2 className="text-3xl font-bold">
          Your Journey to Better Health Starts Here
        </h2>
      </header>

      <div className="">
        {values.map((value) => (
          <article
            key={value.id}
            className=" flex flex-col"
          >
            <img
              src={value.image || "placeholder-image.png"}
              alt={value.name}
              className=""
            />
            <div>
            <h4 className="text-xl font-semibold mb-2">{value.name}</h4>
            <p>{value.description}</p>
            </div>
          </article>
        ))}
      </div>

      <Button>Get Started</Button>
    </section>
  );
};

export default Core;
