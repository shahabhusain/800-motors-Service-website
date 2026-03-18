import React from 'react'
import { FaCalendar, FaCar, FaOilCan } from 'react-icons/fa'

const HowItWorks = () => {
  const work = [
    {
      id: 1,
      icon: <FaCalendar className="text-orange-500 dark:text-orange-500 text-3xl" />,
      title: "You Book",
      desc: "Call our dedicated line 800 2665 464 (Sat-Thu, 8AM-9PM). Book online through our website in just a few clicks, or download our app for instant booking on the go."
    },
    {
      id: 2,
      icon: <FaCar className="text-orange-500 dark:text-orange-500 text-3xl" />,
      title: "We Collect",
      desc: "Our driver arrives at your preferred location, inspects your car, and sends a detailed report via SMS/email. All staff follow strict safety protocols for your peace of mind."
    },
    {
      id: 3,
      icon: <FaOilCan className="text-orange-500 dark:text-orange-500 text-3xl" />,
      title: "We Service",
      desc: "Comprehensive health check with images. Quotation sent for your approval — no work without consent. We source the best parts at the best prices."
    },
    {
      id: 4,
      icon: <FaCalendar className="text-orange-500 dark:text-orange-500 text-3xl" />,
      title: "We Deliver",
      desc: "Your car is thoroughly cleaned inside and out. A secure online payment link is sent via SMS/email, followed by final inspection and delivery report at your doorstep."
    },
  ]

  return (
    <div className='flex md:w-[90%] w-[95%] max-w-7xl mx-auto flex-col items-center justify-center my-20'>
      <h1 className='md:text-[36px] text-[26px] uppercase font-semibold mb-6 text-center dark:text-white'>
        <span className='text-orange-500 dark:text-orange-500'>How it</span> Works
        <p className='text-[#00000099] dark:text-gray-400 md:text-[16px] text-[14px] font-normal text-center mt-3'>
          Choose the plan that fits your needs · flexible engine options
        </p>
      </h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6'>
        {work.map((item) => (
          <div 
            key={item.id} 
            className='bg-white dark:bg-gray-900 border border-[#0000001d] dark:border-gray-800 p-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/5 dark:hover:shadow-orange-600/10 transition-all duration-300'
          >
            <h1 className='bg-[#FF6E190D] dark:bg-orange-900/20 py-1 px-4 rounded-md text-orange-500 dark:text-orange-500 w-fit font-medium'>
              0{item.id}
            </h1>
            
            <div className='flex flex-col items-center gap-y-3 justify-center mt-4'>
              <p className='bg-[#FF6E190D] dark:bg-orange-900/20 p-4 rounded-full text-orange-500 dark:text-orange-500'>
                {item.icon}
              </p>
              
              <h2 className='text-[24px] font-bold text-[#121212] dark:text-white'>
                {item.title}
              </h2>
              
              <p className='text-center text-[#21212D99] dark:text-gray-400 text-sm leading-relaxed'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks