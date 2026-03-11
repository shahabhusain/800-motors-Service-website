import React from 'react'
import rollsroyce from '@/public/brands/rolls-royce.jpg'
import mini from '@/public/brands/mini.jpg'
import mg from '@/public/brands/mg.jpg'
import mclaren from '@/public/brands/mclaren.jpg'
import landrover from '@/public/brands/land-rover.jpg'
import jaguar from '@/public/brands/jaguar.jpg'
import bentley from '@/public/brands/bentley.jpg'
import Image from 'next/image'
const British = () => {
    const logos = [
         rollsroyce, mini, mg, mclaren, landrover, jaguar, bentley
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

export default British
