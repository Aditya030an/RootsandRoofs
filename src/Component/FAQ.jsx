import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What types of properties do you offer?",
    answer:
      "We offer a wide range of residential and commercial properties including apartments, villas, duplex homes, studio units, plots, and office spaces. Whether you're looking for a dream home or an investment, we have options tailored to different budgets and lifestyles."
  },
  {
    question: "Are site visits available? How do I schedule one?",
    answer:
      "Yes! Site visits are available throughout the week. You can book a visit via phone, email, or directly through our website’s scheduling tool. A dedicated team member will guide you during the tour and answer all your questions."
  },
  {
    question: "What documents do I need to register a property?",
    answer:
      "You’ll need the sale deed, identity proof, address proof, PAN card, passport-size photos, and proof of payment for stamp duty and registration charges."
  },
  {
    question: "What services does Roots and Roofs offer?",
    answer:
      "At Roots and Roofs, we specialize in helping you find your dream space — whether it’s a bungalow, luxury villa, modern flat, or commercial property. From discovery to possession, we offer end-to-end real estate solutions including consultation, site visits, documentation support, and post-sale service."
  },
  {
    question: "Are all properties listed on Roots and Roofs verified?",
    answer:
      "Yes, absolutely. We ensure every property listed on our platform is verified for legal documentation, ownership, and authenticity. Your peace of mind is our top priority."
  },
  {
    question: "I live outside India. Can I still invest in property through Roots and Roofs?",
    answer:
      "Absolutely. We work with several NRI clients and offer virtual tours, video consultations, and digital document processing to make your investment process seamless, no matter where you are."
  },
  {
    question: "How do I list my property on Roots and Roofs?",
    answer:
      "It’s easy! Just head to the 'List Your Property' section, fill in the details, and our team will get in touch for verification and onboarding. You can also call us directly for assistance."
  }
];


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full sticky top-100 px-6 md:px-20 py-20 bg-white flex flex-col md:flex-row items-start gap-10">
      {/* Left Title Section */}
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-semibold leading-snug">
          Frequently asked<br />questions
        </h2>
      </div>

      {/* Right Accordion Section */}
      <div className="md:w-1/2 w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 hover:bg-gray-200 transition rounded p-4">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="bg-slate-900 text-white p-2 rounded-sm w-6 h-6 flex items-center justify-center">
                  {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </div>
                <span className="text-sm md:text-base font-medium text-slate-800">
                  {faq.question}
                </span>
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-2 text-sm md:text-base text-slate-700 px-10">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
