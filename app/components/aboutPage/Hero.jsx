import Image from 'next/image'
import React from 'react'
const Hero = ({about, desc, bg}) => {
  return (
    <div className=' relative flex items-center justify-center flex-col '>
        <Image src={bg} alt='bg-image' className=' h-[400px] w-full object-cover ' />
         <div className=' bg-[#00000099] absolute top-0 h-[400px]  w-full '></div>
         <div className=' absolute md:top-32 top-32  text-white flex flex-col gap-y-3 '>
            <h1 className=' lg:text-5xl text-center md:text-4xl  sm:text-3xl text-2xl font-bold max-w-5xl  '>{about}</h1>
            <p className=' text-center max-w-5xl text-center h-[100px] overflow-y-auto custom-scroll'>{desc}</p>
         </div>
    </div>
  )
}

export default Hero
