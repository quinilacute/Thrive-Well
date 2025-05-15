import React from "react";
import Button from "../components/Button";

const Rights = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-8">User Rights & Choices</h1>

      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          At <span className="font-bold">THRIVE WELL</span>, we deeply value your privacy and are committed to empowering you 
          with control over your personal information. Below, you'll find an overview of your rights and options when using our services.
        </p>
        <div className="mt-6 text-center">
          <Button>I Agree</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">You have the right to:</h2>
        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>✔️ Access, update, or delete your personal data.</li>
          <li>✔️ Opt-out of non-essential data collection and marketing communications.</li>
          <li>✔️ Request a copy of the information we store about you.</li>
        </ul>
      </section>
    </div>
  );
};

export default Rights;
