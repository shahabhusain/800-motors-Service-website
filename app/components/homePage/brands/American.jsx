import React from 'react'
import tesla from '@/public/brands/tesla.jpg'
import lincoln from '@/public/brands/lincoln.jpg'
import jeep from '@/public/brands/jeep.jpg'
import hummer from '@/public/brands/hummer.jpg'
import gmc from '@/public/brands/gmc.jpg'
import ford from '@/public/brands/ford.jpg'
import dodge from '@/public/brands/dodge.jpg'
import chevrolet from '@/public/brands/chevrolet.jpg'
import cadillac from '@/public/brands/cadillac.jpg'
import Image from 'next/image'
const American = () => {
    const logos = [
         tesla, lincoln, jeep, hummer, gmc, ford, dodge, chevrolet,cadillac
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

export default American
