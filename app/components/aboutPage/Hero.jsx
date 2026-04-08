import Image from 'next/image'
import React from 'react'
import bg from '@/public/herobg.jpg'
const Hero = ({about}) => {
  return (
    <div className=' relative '>
        <Image src={bg} alt='bg-image' className=' h-[400px] w-full object-cover ' />
         <div className=' bg-[#0000007a] absolute top-0 h-[400px] w-full '></div>
         <div className=' absolute md:top-44 top-32 md:left-20 left-4 right-2 md:right-[50%] text-white '>
            <h1 className=' lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold  uppercase'>{about}</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad, molestias rem perferendis autem asperiores cum. Accusamus blanditiis illum, ad, minus consequatur commodi consequuntur harum deleniti vero voluptas sequi illo?</p>
         </div>
    </div>
  )
}

export default Hero
