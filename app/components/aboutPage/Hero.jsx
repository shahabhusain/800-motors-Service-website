import Image from 'next/image'
import React from 'react'
import bg from '@/public/herobg.jpg'
const Hero = ({about}) => {
  return (
    <div className=' relative'>
        <Image src={bg} alt='bg-image' className=' h-[400px] w-full object-cover ' />
         <div className=' bg-[#0000007a] absolute top-0 h-[400px] w-full '></div>
         <div className=' absolute top-44 left-12 right-[50%] text-white '>
            <h1 className=' text-[46px] font-[700] uppercase'>{about}</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad, molestias rem perferendis autem asperiores cum. Accusamus blanditiis illum, ad, minus consequatur commodi consequuntur harum deleniti vero voluptas sequi illo?</p>
         </div>
    </div>
  )
}

export default Hero
