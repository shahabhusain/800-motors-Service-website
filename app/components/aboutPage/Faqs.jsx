"use client"
import React, { useState, useRef, useEffect } from 'react'

const Faqs = () => {
   const faqs = [
    {
        question:"What services do you offer?",
        answer:"Our leadership team brings extensive experience in the automotive industry, ensuring reliable and high-quality services. With a strong commitment to innovation and customer satisfaction, they guide our team to deliver fast and efficient solutions."
    },
    {
        question:"How can I contact support?",
        answer:"You can reach our support team via phone, email, or our live chat system. We ensure prompt responses to all inquiries."
    },
    {
        question:"Do you offer international services?",
        answer:"Yes, we provide services globally and can cater to clients in multiple countries."
    },
    {
        question:"What payment methods are accepted?",
        answer:"We accept all major credit cards, PayPal, and bank transfers."
    },
    {
        question:"Do you offer warranties?",
        answer:"Yes, we provide warranties on selected services and products. Please check specific details per service."
    },
   ]

   const [openFaqs, setOpenFaqs] = useState(null) // store index of open FAQ

   const toggleFaqs = (index) => {
      setOpenFaqs(openFaqs === index ? null : index)
   }

  return (
    <div className='w-[85%] mx-auto max-w-7xl my-20'>
      <h1 className='uppercase text-[46px] font-bold text-center mb-10'>Frequently Asked Questions</h1>
      <div className='flex flex-col gap-y-4'>
        {faqs.map((item, index) => (
            <div key={index} className='bg-[#F8F8F8] dark:bg-gray-950 p-5 rounded-lg'>
                <div 
                  className='flex items-center justify-between cursor-pointer'
                  onClick={() => toggleFaqs(index)}
                >
                    <h1 className='text-[18px] font-semibold text-[#434343] dark:text-gray-300'>{item.question}</h1>
                    <span className='text-[24px] font-bold'>{openFaqs === index ? "-" : "+"}</span>
                </div>

                {/* Smooth collapsing */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{ maxHeight: openFaqs === index ? "500px" : "0" }}
                >
                    <p className='mt-3 text-[#555] dark:text-gray-400'>{item.answer}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs