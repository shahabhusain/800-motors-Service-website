import React from 'react'
import auto from '@/public/home/auto.jpeg'
import Image from 'next/image'
import { FaCheckCircle, FaCar, FaTools, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa'

const FastRepairs = () => {
  return (
    <div className='w-[85%] mx-auto my-20 flex flex-col md:flex-row items-center gap-8 md:gap-12'>

     
      {/* Left Side - Content */}
      <div className='w-full md:w-[60%] space-y-6'>
        
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
           <span className='text-orange-500'>Fast Repairs for All Major Car Brands  </span> Before Summer Heat
        </h1>
        
        <p className='text-gray-600 leading-relaxed'>
          At 8MG, we offer a complete range of automotive services to keep your vehicle running at its best. 
          From routine maintenance to complex repairs, our certified technicians use state-of-the-art equipment 
          and genuine parts to deliver exceptional results. Whether you drive a luxury European car, a reliable 
          Japanese sedan, or a powerful American SUV, we have the expertise to handle all your automotive needs.
        </p>
        
      </div>

             {/* Right Side - Image */}
      <div className='w-full md:w-[40%]'>
          <Image 
            src={auto} 
            alt='Car Service Dubai' 
            className='w-full rounded-2xl h-auto object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      
  
        
      
    </div>
  )
}

export default FastRepairs