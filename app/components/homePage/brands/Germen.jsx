import React from 'react'
import volkswagen from '@/public/brands/volkswagen.jpg'
import porsche from '@/public/brands/porsche.jpg'
import mercedes from '@/public/brands/mercedes.jpg'
import bmw from '@/public/brands/bmw.jpg'
import audi from '@/public/brands/audi.jpg'
import Image from 'next/image'
const Germen = () => {
    const logos = [
         volkswagen, porsche, mercedes, bmw, audi
    ]
  return (
    <div className=" flex items-center justify-center w-[85%] mx-auto gap-4 flex-wrap ">
    {
           logos.map((item) => (
                 <div className='bg-white dark:bg-gray-800 shadow p-4 rounded-xl'>
                   <Image className=' md:w-[120px] w-[40px] rounded-2xl' src={item} alt='logo' />
                 </div>
           ))
         }
    </div>
  )
}

export default Germen
