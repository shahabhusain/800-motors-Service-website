import React from 'react'
import skoda from '@/public/brands/skoda.jpg'
import maserati from '@/public/brands/maserati.jpg'
import lamborghini from '@/public/brands/lamborghini.jpg'
import kia from '@/public/brands/kia.jpg'
import hyundai from '@/public/brands/hyundai.jpg'
import geely from '@/public/brands/geely.jpg'
import fiat from '@/public/brands/fiat.jpg'
import ferrari from '@/public/brands/ferrari.jpg'
import mg from '@/public/brands/mg.jpg'
import porsche from '@/public/brands/porsche.jpg'
import Image from 'next/image'
const Others = () => {
    const logos = [
         skoda, maserati, lamborghini, kia, hyundai, geely, fiat, mg,porsche,ferrari
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

export default Others
