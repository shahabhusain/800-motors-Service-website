// app/page.tsx (or components/ContactFaqSection.tsx)
'use client';

import React, { useState } from 'react';

const ContactFaqSection = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // FAQ data with categories
  const faqs = [
    {
      question: "How do I get a quote for my car repair?",
      answer: "You can contact us via phone, WhatsApp, or our online booking form. We'll provide a free, no-obligation quote based on your vehicle's issue.",
      category: "Pricing & Billing"
    },
    {
      question: "Do you offer pick-up and delivery service?",
      answer: "Yes! We offer free vehicle pick-up and delivery across Dubai. Simply schedule your service and we'll handle the logistics.",
      category: "Booking & Pick-Up"
    },
    {
      question: "Are your repair services covered by warranty?",
      answer: "All our repairs come with a comprehensive warranty. Parts and labor are covered as per our service guarantee.",
      category: "Pricing & Billing"
    },
    {
      question: "How do Dubai's weather conditions affect my car?",
      answer: "Dubai's heat and sand can accelerate wear on batteries, tires, AC systems, and engine components. We specialize in addressing these specific issues.",
      category: "Dubai-Specific Issues"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, bank transfers, and all major digital payment methods in the UAE.",
      category: "Pricing & Billing"
    },
    {
      question: "How long does a typical repair take?",
      answer: "Most repairs are completed within 24-48 hours. We'll provide an accurate timeline during the diagnostic phase.",
      category: "Repairs & Diagnostics"
    }
  ];

  const filterCategories = [
    "All",
    "Pricing & Billing",
    "Booking & Pick-Up", 
    "Repairs & Diagnostics",
    "Dubai-Specific Issues"
  ];

  // Filter FAQs based on active category
  const filteredFaqs = activeFilter === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeFilter);

  return (
    <div className="w-full bg-[#f8f8f8] dark:bg-gray-950">
      {/* FAQ Section */}
      <div className="md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10 flex flex-col gap-y-3">
          <h3 className="text-4xl dark:text-white md:text-5xl font-bold text-gray-800 mb-2">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h3>
          <p className="text-gray-500">Everything you need to know about our services</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center bg-[#f8f8f8] dark:bg-gray-900 py-3 rounded-md gap-3 mb-10">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2  rounded-md font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-200 dark:shadow-gray-800"
                  : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-5 cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <summary className="flex dark:text-white justify-between items-center font-semibold text-gray-800 text-lg list-none">
                  <span>{faq.question}</span>
                  <span className="text-orange-500 group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed pl-0 border-l-0">
                  {faq.answer}
                </p>
              </details>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No questions found in this category.
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

export default ContactFaqSection;