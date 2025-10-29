import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { question: "What services do you offer?" },
  { question: "How long does a project typically take?" },
  { question: "Do you offer sustainable and energy-efficient designs?" },
  { question: "Can you work with my existing space or renovation project?" },
  { question: "How do I get started?" },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white flex flex-col md:flex-row items-start gap-10">
      {/* Left Title Section */}
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-semibold leading-snug">
          Frequently asked<br />questions
        </h2>
      </div>

      {/* Right Accordion Section */}
      <div className="md:w-1/2 w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition p-4 cursor-pointer"
          >
            <div className="flex items-center gap-4 w-full">
              <div className="bg-slate-900 text-white p-2 rounded-sm w-6 h-6 flex items-center justify-center">
                {openIndex === index ? (
                  <FaMinus size={12} />
                ) : (
                  <FaPlus size={12} />
                )}
              </div>
              <span className="text-sm md:text-base font-medium text-slate-800">
                {faq.question}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;