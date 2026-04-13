import React from 'react'
import support from '@/public/home/support.webp'
import Image from 'next/image'

const CarServices = () => {
  return (
      <div className=' dark:bg-gray-950 dark:py-20 md:dark:py-10 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
         <div className='w-[85%] mx-auto md:my-20 my-10  dark:my-0 flex flex-col md:flex-row items-center gap-8 md:gap-12'>
      {/* Left Side - Content */}
      <div className='w-full md:w-[60%] space-y-6'>
        
        <h1 className='text-3xl md:text-4xl lg:text-5xl dark:text-white font-bold text-gray-800 leading-tight'>
           <span className='text-orange-500'>Book Your Car Service in Dubai Today</span>  Before Slots Run Out
        </h1>
        
        <p className='text-gray-600 dark:text-gray-500 leading-relaxed'>
800 Motor Guru provides fast and reliable auto repair services in Dubai for all car brands, including German, Japanese, American, British, and French vehicles. Many customers book daily for battery service, engine repair, AC work, and roadside assistance, which fills service slots quickly. Early booking helps customers avoid delays and secure timely repair support. 800 Motor Guru inspects vehicle problems with diagnostic tools and assigns trained technicians for each repair. The team provides clear pricing, quick response, and complete solutions for every car issue. Customers who book in advance receive faster service and reduce the risk of breakdown or waiting time.

        </p>
        
      </div>
      
      {/* Right Side - Image */}
      <div className='w-full md:w-[40%]'>
          <Image 
            src={support} 
            alt='Car Service Dubai' 
            className='w-full rounded-2xl h-auto object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        
      
    </div>
      </div>
  )
}

export default CarServices