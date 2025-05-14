import React, { useState } from "react";
import Button from "../components/Button";

const Quest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mes, setMes] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleContact = (e) => {
    e.preventDefault();
    if (!name || !email || !mes) {
      setError("All fields are required");
      return;
    }
    setError("");
    setSuccess(true);
  };

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 7-day free trial for new users.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely. You can upgrade or downgrade anytime.",
    },
    {
      question: "What is the cancellation policy?",
      answer: "You can cancel at any time from your account settings.",
    },
    {
      question: "How do I change my account email?",
      answer: "Go to your profile settings and click on 'Edit Email'.",
    },
    {
      question: "How does billing work?",
      answer: "Billing occurs monthly based on your chosen plan.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* FAQ Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
        <p className="text-gray-600">Have questions? We’re here to help.</p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-3">
            <div
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Still have questions?</h3>
        <p className="text-gray-600 mb-4">
          Can’t find the answer you’re looking for? Ask us below.
        </p>

        <form onSubmit={handleContact} className="flex flex-col gap-4">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your Name"
            className="p-2 border rounded"
          />

          <label htmlFor="email" className="font-bold">
            Your Email
          </label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your Email"
            className="p-2 border rounded"
          />

          <label htmlFor="message" className="font-bold">
            Question
          </label>
          <textarea
            id="message"
            onChange={(e) => setMes(e.target.value)}
            value={mes}
            placeholder="Enter your question..."
            rows={5}
            className="p-2 border rounded"
          />

          <Button type="submit">Send</Button>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-600">Submitted successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Quest;
