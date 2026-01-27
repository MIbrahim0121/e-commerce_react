import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-sm md:text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-red-500' : 'text-gray-800'}`}>
          {question}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : 'text-gray-400'}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100 mb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const faqData = [
    {
      category: "Returns & Exchanges",
      questions: [
        { q: "What is your return policy?", a: "You can return any unworn item within 30 days of delivery for a full refund." },
        { q: "How do I start a return or exchange?", a: "Log in to your account, go to 'My Orders', and select the 'Return' option for the specific item." },
        { q: "When will I get my refund?", a: "Refunds are processed within 5-7 business days after we receive your returned item." }
      ]
    },
    {
      category: "Ordering & Payment",
      questions: [
        { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay." },
        { q: "Can I apply a promo code at checkout?", a: "Yes, you can enter your promo code in the 'Discount Code' field during the final step of checkout." }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        { q: "Where do you ship?", a: "We currently ship worldwide with dedicated hubs in Pakistan, Dubai, and the USA." },
        { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days, while international shipping may take 7-12 days." }
      ]
    }
  ];

  return (
    <div className="bg-[#fdf6f6] min-h-screen font-sans">
      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-500">Explore our most commonly asked questions below.</p>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        {faqData.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 border-red-500 pl-4">
              {section.category}
            </h2>
            <div className="bg-white rounded-2xl shadow-sm px-6 md:px-8">
              {section.questions.map((faq, fIdx) => (
                <FAQItem key={fIdx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Newsletter Section (Reused from previous pages) */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-8">Get 10% Off on Your First Order</h2>
        <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL *" 
            className="flex-1 p-4 border border-gray-200 focus:outline-none focus:border-red-400"
          />
          <button className="bg-red-600 text-white px-10 py-4 font-bold hover:bg-black transition-all">
            SUBSCRIBE
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;