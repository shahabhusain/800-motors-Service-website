import Image from 'next/image'
import React from 'react'
import about from '@/public/home/autoRepair.webp'
const About = () => {
  return (
    <div className=' dark:bg-gray-950 bg-[#F8F8F8] dark:border-b-[#f8f8f82e] dark:border-b-[1px]  py-20'>
       <div className=' md:w-[85%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between'>
         <div className=' md:w-1/2 flex flex-col gap-y-6'>
           <h2 className=' lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>What you should know about 800 Motor Guru?</h2>
          <p className=' text-[#00000099] dark:text-gray-300 text-[16px] font-normal'>800 Motor Guru serves automotive customers across Dubai with certified and professional technicians who specialize in engine repair, electrical systems, AC service, tires, batteries, painting, and denting. The company provides a smooth experience through affordable prices, strong customer ratings, honest guidance, and prompt support. 800 Motor Guru uses advanced diagnostic tools to correct faults. 800 Motor Guru selects quality parts that meet vehicle standards. The company has received 4,500 positive reviews with a record of satisfied and returning customers over 12 years in Dubai. 800 Motor Guru builds long-term relationships through consistent service and clear communication. The company provides honest advice and confirms prices before work starts. These actions build trust, show professionalism, and ensure reliable service for every customer.</p>
          
         </div>
         <div className=' md:w-[40%] mt-12 md:mt-0 '>
          <Image className='rounded-2xl' src={about} alt='about'/>
         </div>
       </div>
    </div>
  )
}

export default About
