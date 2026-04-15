import React from 'react'
import battery from '@/public/home/battery.webp'
import Image from 'next/image'

const CarBattery = () => {
  return (
    <div className=' dark:bg-gray-950 dark:py-20 md:dark:py-10 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
    <div className='w-[85%] mx-auto md:my-20 py-10 dark:my-0 flex flex-col md:flex-row items-center gap-8 md:gap-12'>

     
      {/* Left Side - Content */}
      <div className='w-full md:w-[60%] space-y-6'>
        
        <h1 className='text-3xl dark:text-white md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
           <span className='text-orange-500'>Service Your Car Battery   </span> at Home in Dubai
        </h1>
        
        <p className='text-gray-600 leading-relaxed'>
         800 Motor Guru provides car battery service at home in Dubai with complete on-site support for all vehicle types. The company offers battery replacement, battery repair, and battery installation at your location without the need to visit a workshop. Customers can get service at home, office, parking area, or even on the road during a breakdown. The technician arrives with the required tools and correct battery type, performs battery testing, identifies the issue, and completes the service on-site. This saves time, avoids towing, and ensures quick vehicle recovery. 800 Motor Guru makes battery service easy, fast, and convenient anywhere in Dubai.
        </p>
        
      </div>

             {/* Right Side - Image */}
      <div className='w-full md:w-[40%]'>
          <Image 
            src={battery} 
            alt='Car Service Dubai' 
            className='w-full rounded-bl-[20%] border-[6px] border-white shadow h-auto object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      
  
        
      
    </div>
    </div>
  )
}

export default CarBattery