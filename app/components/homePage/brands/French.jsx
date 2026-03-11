import React from 'react'
import renault from '@/public/brands/renault.jpg'
import peugeot from '@/public/brands/peugeot.jpg'
import citroen from '@/public/brands/citroen.jpg'
import bugatti from '@/public/brands/bugatti.jpg'
import Image from 'next/image'
const French = () => {
    const logos = [
         renault, peugeot, citroen, bugatti
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

export default French
