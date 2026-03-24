import Image from 'next/image'
import React from 'react'
import bg from '@/public/herobg.jpg'
const Hero = ({about}) => {
  return (
    <div className=' relative'>
        <Image src={bg} alt='bg-image' className=' h-[400px] w-full object-cover ' />
         <div className=' bg-[#0000007a] absolute top-0 h-[400px] w-full '></div>
         <div className=' flex flex-col absolute top-44 left-[41%] text-white gap-y-3 items-center justify-center'>
            <h1 className=' text-[46px] font-[700] uppercase'>{about}</h1>
         </div>
    </div>
  )
}

export default Hero
