// app/page.tsx (or components/ContactFaqSection.tsx)
import React from 'react';

const ContactFaqSection = () => {
  // Card data array
  const cards = [
    {
      title: "Pricing & Billing",
      description: "Transparent pricing with no hidden fees. Get upfront quotes for all repairs and services.",
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Booking & Pick-Up",
      description: "Easy online booking and free vehicle pick-up & delivery across Dubai. Save time and hassle.",
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Repairs & Diagnostics",
      description: "Advanced diagnostic tools and expert repairs for all makes and models. Fast turnaround.",
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 5h-6L8 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16a2 2 0 002-2V8a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Dubai-Specific Issues",
      description: "Expertise in Dubai's unique driving conditions: heat, sand, humidity, and traffic wear.",
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How do I get a quote for my car repair?",
      answer: "You can contact us via phone, WhatsApp, or our online booking form. We'll provide a free, no-obligation quote based on your vehicle's issue."
    },
    {
      question: "Do you offer pick-up and delivery service?",
      answer: "Yes! We offer free vehicle pick-up and delivery across Dubai. Simply schedule your service and we'll handle the logistics."
    },
    {
      question: "Are your repair services covered by warranty?",
      answer: "All our repairs come with a comprehensive warranty. Parts and labor are covered as per our service guarantee."
    },
    {
      question: "How do Dubai's weather conditions affect my car?",
      answer: "Dubai's heat and sand can accelerate wear on batteries, tires, AC systems, and engine components. We specialize in addressing these specific issues."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, bank transfers, and all major digital payment methods in the UAE."
    },
    {
      question: "How long does a typical repair take?",
      answer: "Most repairs are completed within 24-48 hours. We'll provide an accurate timeline during the diagnostic phase."
    }
  ];

  return (
    <div className="w-full bg-white">
          {/* Contact Heading Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <h2 className="text-3xl text-center md:text-4xl lg:text-4xl font-bold mb-4 text-gray-800">
          Contact <span className="text-orange-500">800 Motor Guru</span> For Auto Repair Services in Dubai?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get in touch with us for professional auto repair services across Dubai
        </p>
      </div>
      {/* Four Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h3>
          <p className="text-gray-500">Everything you need to know about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-gray-50 rounded-xl p-5 cursor-pointer transition-all hover:bg-gray-100"
            >
              <summary className="flex justify-between items-center font-semibold text-gray-800 text-lg list-none">
                <span>{faq.question}</span>
                <span className="text-orange-500 group-open:rotate-180 transition-transform duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed pl-0 border-l-0">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFaqSection;