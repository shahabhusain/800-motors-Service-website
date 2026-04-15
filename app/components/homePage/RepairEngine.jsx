import React from 'react'
import ac from '@/public/home/Ac.webp'
import Image from 'next/image'
import { FaCheckCircle, FaCar, FaTools, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa'

const RepairEngine = () => {
  return (
    <div className=' dark:bg-gray-950 bg-[#f8f8f8] py-20 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
    <div className='w-[85%] mx-auto  flex flex-col md:flex-row items-center gap-8 md:gap-12'>

            {/* Right Side - Image */}
      <div className='w-full md:w-[40%]'>
          <Image 
            src={ac} 
            alt='Car Service Dubai' 
            className='w-full rounded-br-[20%] border-[6px] border-white shadow h-auto object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      {/* Left Side - Content */}
      <div className='w-full md:w-[60%] space-y-6'>
        
        <h1 className='text-3xl dark:text-white md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
           <span className='text-orange-500'>Repair Engine, AC, Brakes, and Suspension </span>  Before Dubai Heat Causes Damage
        </h1>
        
        <p className='text-gray-600 leading-relaxed'>
          800 Motor Guru provides complete repair services in Dubai for engine, AC, brakes, and suspension systems for all car brands. High temperature in Dubai increases engine heat, reduces AC cooling, wears brake components, and affects suspension performance. Many vehicles develop major faults when these issues are not repaired on time. 800 Motor Guru inspects these systems with diagnostic tools and identifies faults before damage increases. The team repairs or replaces worn parts and restores vehicle performance for safe driving. Early service helps customers avoid costly repairs and prevents sudden breakdown during extreme weather conditions.

        </p>
        
      </div>
      
  
        
      
    </div>
    </div>
  )
}

export default RepairEngine