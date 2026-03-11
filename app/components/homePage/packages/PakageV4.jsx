import Image from 'next/image'
import React from 'react'
import payment from '@/public/tabe.svg'
import { FaCheck } from "react-icons/fa6";

const PakageV4 = ({data}) => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full'>
      {data.map((item, index) => (
        <div 
          key={index} 
          className='bg-white dark:bg-gray-900 w-full p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow'
        >
          <h1 className='md:text-[24px] text-[20px] font-bold text-[#121212] dark:text-white'>
            {item.title}
          </h1>
          
          <p className='text-[#00000099] dark:text-gray-400 md:text-[16px] text-[14px] font-normal mt-1'>
            {item.desc}
          </p>
          
          <div className='h-[1px] w-full bg-[#00000017] dark:bg-gray-800 my-3'></div>
          
          <h3 className='md:text-[24px] text-[20px] font-bold text-[#121212] dark:text-white'>
            {item.price} 
            <span className='text-orange-500 dark:text-orange-500 md:text-[18px] text-[16px] ml-1'>
              AED
            </span>
          </h3>
          
          <p className='text-[#00000099] dark:text-gray-400 md:text-[16px] text-[14px] font-normal'>
            {item.kilo}
          </p>
          
          {/* Payment Section */}
          <div className='flex items-center justify-between border p-3 rounded-xl border-[#0000001a] dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 mt-4'>
            <div className='flex flex-col gap-y-1'>
              <h1 className='flex items-center text-[#00000099] dark:text-gray-400 md:text-[16px] text-[14px] font-normal'>
                {item.paymentBy.name} - {item.paymentBy.time}
              </h1>
              <p className='md:text-[24px] text-[20px] font-bold text-[#121212] dark:text-white'>
                AED {item.paymentBy.price}
              </p>
            </div>
            <Image 
              src={payment} 
              alt='payment'
              className='dark:opacity-80'
            />
          </div>
          
          {/* Services List */}
          <div className='flex flex-col gap-y-3 mt-4'>
            {item.services.map((service, i) => (
              <div key={i} className='flex items-center gap-3'>
                <span className='bg-[#6DD176] dark:bg-green-600/30 p-1 rounded-full text-white dark:text-green-500'>
                  <FaCheck size={12} />
                </span>
                <p className='md:text-[16px] text-[14px] font-normal text-[#00000099] dark:text-gray-400'>
                  {service}
                </p>
              </div>
            ))}
          </div>
          
          {/* Button */}
          <button className='bg-orange-500 dark:bg-orange-600 w-full md:text-[18px] text-[16px] font-semibold text-white py-2 mt-6 px-6 rounded-xl hover:bg-orange-600 dark:hover:bg-orange-500 transition-colors'>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default PakageV4