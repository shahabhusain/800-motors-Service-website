import Image from 'next/image'
import React from 'react'
import about from '@/public/about/about.png'
const About = () => {
  return (
    <div className=' dark:bg-gray-950 bg-[#F8F8F8] dark:border-b-[#f8f8f82e] dark:border-b-[1px]  py-20'>
       <div className=' md:w-[85%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between'>
         <div className=' md:w-1/2 flex flex-col gap-y-6'>
           <h2 className=' lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold'>What you should know about 800 Motor Guru? </h2>
          <p className=' text-[#00000099] dark:text-gray-300 text-[16px] font-normal'>Welcome to 800 Motor Guru, a trusted provider of onsite car repair and maintenance services in the UAE. Our skilled technicians deliver fast, reliable automotive solutions directly to your location, making car care simple and convenient.</p>
          <p className=' text-[#00000099] dark:text-gray-300 text-[16px] font-normal'>At 800 Motor Guru, we focus on keeping your vehicle safe and running smoothly. From emergency roadside support to routine maintenance, our team provides professional service wherever you are across the UAE. </p>
          <p className=' text-[#00000099] dark:text-gray-300 text-[16px] font-normal'>Welcome to 800 Motor Guru, a trusted provider of onsite car repair and maintenance services in the UAE. Our skilled technicians deliver fast, reliable automotive solutions directly to your location, making car care simple and convenient.</p>
          <p className=' text-[#00000099] dark:text-gray-300 text-[16px] font-normal'>At 800 Motor Guru, we focus on keeping your vehicle safe and running smoothly. From emergency roadside support to routine maintenance, our team provides professional service wherever you are across the UAE. </p>
         </div>
         <div className=' md:w-[40%] mt-12 md:mt-0'>
          <Image src={about} alt='about'/>
         </div>
       </div>
    </div>
  )
}

export default About
