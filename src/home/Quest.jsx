import React, { useState } from "react";
import Button from "../components/Button";
import pur from "../assets/images/pur.png";
import white from '../assets/images/white.png';
import red from "../assets/images/red.png";


const UpArrow = () => (
  <svg
    className="w-4 h-4 text-red-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
  </svg>
);

const DownArrow = () => (
  <svg
    className="w-4 h-4 text-red-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

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
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    //  clear form
    setName(""); setEmail(""); setMes("");
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
  
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
        <p className="text-gray-600">Have questions? We’re here to help.</p>
      </div>

     
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-3">
            <div
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span className="flex items-center">
                {openIndex === index ? <UpArrow /> : <DownArrow />}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold">Still have questions?</h3>
        <p className="text-gray-600 mb-4">
          Can’t find the answer you’re looking for? Ask us below.
        </p>

        <form onSubmit={handleContact} className="flex flex-col gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="p-2 border border-gray-400 rounded-md focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="p-2 border border-gray-400 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium mb-1">
              Your Question
            </label>
            <textarea
              id="message"
              rows="5"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              placeholder="Enter your question..."
              className="p-2 border border-gray-400 rounded-md focus:outline-none resize-none"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Send</Button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm">Submitted successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Quest;
