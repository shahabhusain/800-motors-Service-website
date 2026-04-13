// app/page.tsx (or components/ContactFaqSection.tsx)
'use client';

import React, { useState } from 'react';

const ContactFaqSection = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // FAQ data with categories
  const faqs = [
    {
      question: "How much does a full car service cost in Dubai?",
      answer: "The cost of a full car service in Dubai depends on the vehicle type, engine size, and service level. A basic service starts from a few hundred AED, while a major service costs more based on parts and labour.",
      category: "Pricing & Billing"
    },
    {
      question: "Will the final bill match the quote I was given?",
      answer: "800 Motor Guru provides a written quote before starting the work. The final bill matches the quote unless additional issues are found and approved by the customer.",
      category: "Pricing & Billing"
    },
    {
      question: "Do you charge a diagnosis fee even if I don't go ahead with the repair?",
      answer: "800 Motor Guru may charge a diagnosis fee if detailed inspection and testing are required. The team informs the customer about this fee before inspection.",
      category: "Pricing & Billing"
    },


     {
      question: "Are labour and parts priced separately on the invoice?",
      answer: "800 Motor Guru lists labour charges and spare parts separately on the invoice. This helps customers understand the full cost clearly.",
      category: "Pricing & Billing"
    },

    {
      question: "Can I get a written quote before any work starts?",
      answer: "800 Motor Guru provides a written quote after vehicle inspection and before starting any repair work. The team waits for customer approval before proceeding.",
      category: "Pricing & Billing"
    },
    {
      question: "Do you charge extra for same-day repairs?",
      answer: "800 Motor Guru does not charge extra for same-day repairs for common services. Charges may apply only if urgent parts or special handling are required.",
      category: "Pricing & Billing"
    },

    {
      question: "Do you charge more for European cars than Japanese cars?",
      answer: "European cars may cost more to repair due to complex systems and higher parts cost. Japanese cars usually have lower repair cost due to easier maintenance and available parts.",
      category: "Pricing & Billing"
    },

     {
      question: "What payment methods do you accept in Dubai?",
      answer: "800 Motor Guru accepts cash, card payments, and digital payment options. The company also provides flexible payment plans where applicable.",
      category: "Pricing & Billing"
    },

     {
      question: "Can you pick up my car from my apartment in Dubai?",
      answer: "800 Motor Guru picks up vehicles from apartments, homes, offices, and roadside locations across Dubai. The team collects the car from the customer's location without delay.",
      category: "Booking & Pick-Up"
    },
     {
      question: "How do I book a car repair in Dubai?",
      answer: "Customers can book a car repair by calling, using WhatsApp, or making an online request. 800 Motor Guru confirms booking after receiving vehicle and location details.",
      category: "Booking & Pick-Up"
    },
      {
      question: "Can I book a same-day repair in Dubai?",
      answer: "800 Motor Guru offers same-day repair for common services based on slot availability. Early booking increases the chance of same-day service.",
      category: "Booking & Pick-Up"
    },
    {
      question: "Do you offer free pick-up and drop-off across Dubai?",
      answer: "800 Motor Guru provides free pick-up and drop-off service across Dubai. The company collects and delivers the vehicle without extra charges.",
      category: "Booking & Pick-Up"
    },
   {
      question: "How long will my car be at the garage?",
      answer: "The repair time depends on the issue and parts availability. 800 Motor Guru completes common repairs on the same day, while major repairs may take longer.",
      category: "Booking & Pick-Up"
    },  
      {
      question: "Can I drop my car off outside working hours?",
      answer: "800 Motor Guru allows flexible drop-off options based on prior arrangement. Customers can coordinate timing with the team before arrival.",
      category: "Booking & Pick-Up"
    },    

       {
      question: "Do you send updates while my car is being repaired?",
      answer: "800 Motor Guru shares updates during the repair process. The team informs customers about inspection results, repair progress, and completion status.",
      category: "Booking & Pick-Up"
    },   
           {
      question: "Can I track the repair status on WhatsApp?",
      answer: "800 Motor Guru provides repair updates through WhatsApp communication. Customers can check the status by contacting the support team.",
      category: "Booking & Pick-Up"
    },    
               {
      question: "What areas of Dubai do you cover for pick-up and delivery?",
      answer: "800 Motor Guru covers all major areas of Dubai for vehicle pick-up and delivery. The team reaches customer locations across residential and commercial areas.",
      category: "Booking & Pick-Up"
    },    

         {
      question: "How do I know what is actually wrong with my car?",
      answer: "800 Motor Guru identifies car problems through inspection and diagnostic testing. The team checks symptoms and uses scanners to find the exact fault.",
      category: "Repairs & Diagnostics"
    },    


     {
      question: "What does a full car diagnostic check include?",
      answer: "A full diagnostic check includes scanning the vehicle system and checking the engine, electrical components, sensors, and fault codes. The process helps detect hidden issues before repair.",
      category: "Repairs & Diagnostics"
    },    

     {
      question: "How do I know if I need a full service or just one repair?",
      answer: "800 Motor Guru inspects the vehicle condition and identifies whether the issue is limited or requires full servicing. The team recommends service based on wear, mileage, and fault type.",
      category: "Repairs & Diagnostics"
    },    

     {
      question: "What does a check engine light mean?",
      answer: "The check engine light indicates a problem in the engine or emission system. The issue can range from minor sensor faults to major engine problems.",
      category: "Repairs & Diagnostics"
    },    

     {
      question: "How long does an engine diagnostic take?",
      answer: "An engine diagnostic usually takes 30 to 60 minutes, depending on the vehicle and fault complexity. Additional inspection may take more time if required.",
      category: "Repairs & Diagnostics"
    },    

     {
      question: "Can you fix a car that another garage already worked on?",
      answer: "800 Motor Guru inspects and repairs vehicles previously handled by other garages. The team rechecks the issue and corrects improper or incomplete repairs.",
      category: "Repairs & Diagnostics"
    },    

     {
      question: "How often should engine oil be changed in Dubai heat?",
      answer: "Engine oil should be changed every 5,000 to 10,000 km in Dubai. High temperature reduces oil performance and requires more frequent changes.",
      category: "Repairs & Diagnostics"
    },    

     {
      question: "Why does my car battery keep dying in the UAE?",
      answer: "Car battery fails due to extreme heat, which reduces battery life and performance. Long parking time and heavy AC use also affect battery charge.",
      category: "Repairs & Diagnostics"
    },   
    
      {
      question: "What to do if a car overheats on Sheikh Zayed Road?",
      answer: "The driver should stop the vehicle safely, turn off the engine, and allow it to cool down. The issue requires inspection before driving again.",
      category: "Repairs & Diagnostics"
    },   

       {
      question: "How often should air filters be replaced in Dubai dust?",
      answer: "Air filters should be replaced every 10,000 to 15,000 km in Dubai. Dust and sand block airflow and reduce engine performance.",
      category: "Dubai-Specific Issues"
    },   

      {
      question: "Does Dubai heat wear tyres faster?",
      answer: "Dubai heat increases tyre wear due to high road temperature. Tyres lose grip and durability faster under continuous heat exposure.",
      category: "Dubai-Specific Issues"
    },   
      {
      question: "How does sand affect the engine over time?",
      answer: "Sand enters the engine through air intake and reduces efficiency. Dust buildup affects engine parts and increases wear over time.",
      category: "Dubai-Specific Issues"
    },   
      {
      question: "How often should brakes be checked with Dubai speed bumps?",
      answer: "Brakes should be checked every 10,000 km or during regular service. Frequent braking on speed bumps increases brake wear.",
      category: "Dubai-Specific Issues"
    },   
      {
      question: "Does stop-start traffic increase transmission wear?",
      answer: "Stop-start traffic increases transmission wear due to constant gear shifting. Heavy traffic conditions reduce transmission life over time.",
      category: "Dubai-Specific Issues"
    },   
      
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
      <div className="md:max-w-4xl  mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:border-b-[#f8f8f82e] dark:border-b-[1px]">
        <div className="text-center mb-10 flex flex-col gap-y-3">
          <h3 className="text-3xl dark:text-white md:text-5xl font-bold text-gray-800 mb-2">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h3>
          <p className="text-gray-500">Everything you need to know about our services</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center bg-[#fff] dark:bg-gray-900 md:py-3 py-1 rounded-md gap-3 mb-10">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`md:px-4 md:py-2 py-1 px-2 md:text-[16px] text-[10px]   rounded-md font-medium transition-all duration-300 ${
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
        <div className="space-y-4 h-[400px] overflow-y-auto custom-scroll">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white dark:bg-gray-900 rounded-xl p-5 cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <summary className="flex dark:text-white justify-between items-center font-semibold text-gray-800 text-lg list-none">
                  <span className=' md:text-[16px] text-[12px]'>{faq.question}</span>
                  <span className="text-orange-500 group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 md:text-[16px] text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed pl-0 border-l-0">
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