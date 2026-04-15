"use client"
import React, { useState } from "react";

const Faqs = ({ faqs = [] }) => {
  const [openFaqs, setOpenFaqs] = useState(null);

  const toggleFaqs = (index) => {
    setOpenFaqs(openFaqs === index ? null : index);
  };

  return (
    <div className="bg-[#f8f8f8] dark:bg-gray-950 dark:border-b-[#f8f8f82e] dark:border-b-[1px] py-20">
      <div className="w-[85%] mx-auto">
        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
            >
              <div
                className="flex items-center justify-between cursor-pointer p-5"
                onClick={() => toggleFaqs(index)}
              >
                <h3 className="text-[18px] font-semibold text-[#434343] dark:text-gray-300">
                  {item.question}
                </h3>

                <span className="text-[24px] font-bold">
                  {openFaqs === index ? "−" : "+"}
                </span>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFaqs === index ? "max-h-[200px] px-5 pb-5" : "max-h-0 px-5"
                }`}
              >
                <p className="text-[#555] dark:text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;