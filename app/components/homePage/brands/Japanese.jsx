import React from 'react'
import honda from '@/public/brands/honda.jpg'
import infiniti from '@/public/brands/infiniti.jpg'
import lexus from '@/public/brands/lexus.jpg'
import mazda from '@/public/brands/mazda.jpg'
import mitsubishi from '@/public/brands/mitsubishi.jpg'
import nissan from '@/public/brands/nissan.jpg'
import suzuki from '@/public/brands/suzuki.jpg'
import toyota from '@/public/brands/toyota.jpg'
import Image from 'next/image'
const Japanese = () => {
    const logos = [
         honda, infiniti, lexus, mazda, mitsubishi, nissan, suzuki, toyota,
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

export default Japanese
