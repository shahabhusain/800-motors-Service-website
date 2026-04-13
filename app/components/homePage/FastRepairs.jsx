import React from 'react'
import battery from '@/public/home/battery.webp'
import Image from 'next/image'

const FastRepairs = () => {
  return (
    <div className=' dark:bg-gray-950 dark:py-20 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
    <div className='w-[85%] mx-auto my-20 dark:my-0 flex flex-col md:flex-row items-center gap-8 md:gap-12'>

     
      {/* Left Side - Content */}
      <div className='w-full md:w-[60%] space-y-6'>
        
        <h1 className='text-3xl dark:text-white md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
           <span className='text-orange-500'>Fast Repairs for All Major Car Brands  </span> Before Summer Heat
        </h1>
        
        <p className='text-gray-600 leading-relaxed'>
         800 Motor Guru provides fast repair services in Dubai for all major car brands, including German, Japanese, American, British, and French vehicles. High summer heat in Dubai increases the risk of engine overheating, AC failure, battery issues, and brake wear. Many vehicles develop sudden faults during peak heat, and service demand increases, which fills repair slots quickly. 800 Motor Guru inspects vehicle systems with diagnostic tools and assigns trained technicians for each brand. The team repairs faults quickly and restores vehicle performance for safe driving. Early booking helps customers avoid breakdown, reduce repair cost, and secure fast service before peak season demand.
        </p>
        
      </div>

             {/* Right Side - Image */}
      <div className='w-full md:w-[40%]'>
          <Image 
            src={battery} 
            alt='Car Service Dubai' 
            className='w-full rounded-2xl h-auto object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      
  
        
      
    </div>
    </div>
  )
}

export default FastRepairs