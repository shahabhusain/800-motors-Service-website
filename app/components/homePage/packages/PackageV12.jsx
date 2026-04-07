import Image from 'next/image'
import React from 'react'
import payment from '@/public/tabe.svg'
import { FaCheck } from "react-icons/fa6";

const PackageV12 = ({data}) => {
  // Create a reversed copy for mobile
  const mobileData = [...data].reverse();
  
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 w-full'>
      {/* Desktop View - Original Order */}
      <div className="hidden md:grid md:grid-cols-3 gap-4 md:col-span-3">
        {data.map((item, index) => (
          <PackageCard key={index} item={item} index={index} />
        ))}
      </div>
      
      {/* Mobile View - Reversed Order */}
      <div className="grid md:hidden grid-cols-1 gap-4">
        {mobileData.map((item, index) => {
          // Calculate original index to maintain disabled states
          const originalIndex = data.findIndex(d => d.title === item.title);
          return (
            <PackageCard key={originalIndex} item={item} index={originalIndex} />
          );
        })}
      </div>
    </div>
  )
}

// Extract card component to avoid code duplication
const PackageCard = ({ item, index }) => {
  const isDisabled = index < 2;
  
  return (
    <div 
      className={`w-full p-4 flex flex-col gap-y-2 rounded-2xl border transition-all duration-300 ${
        isDisabled 
          ? 'pointer-events-none opacity-60' 
          : 'hover:shadow-lg'
      } ${
        isDisabled
          ? 'bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800'
          : 'bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-800'
      }`}
    >
      <h1 className={`md:md:text-[24px] text-[20px] text-[20px] font-bold ${
        isDisabled 
          ? 'text-gray-400 dark:text-gray-600' 
          : 'text-[#121212] dark:text-white'
      }`}>
        {item.title}
      </h1>
      
      <p className={`md:md:text-[16px] text-[14px] text-[14px] font-normal mt-1 ${
        isDisabled 
          ? 'text-gray-400 dark:text-gray-600' 
          : 'text-[#00000099] dark:text-gray-400'
      }`}>
        {item.desc}
      </p>
      
      <div className={`h-[1px] w-full my-3 ${
        isDisabled 
          ? 'bg-gray-200 dark:bg-gray-800' 
          : 'bg-[#00000017] dark:bg-gray-800'
      }`}></div>
      
      <h3 className={`md:text-[24px] text-[20px] font-bold ${
        isDisabled 
          ? 'text-gray-400 dark:text-gray-600' 
          : 'text-[#121212] dark:text-white'
      }`}>
        {item.price} 
        <span className={`md:text-[18px] text-[14px] ml-1 ${
          isDisabled 
            ? 'text-orange-300 dark:text-orange-800' 
            : 'text-orange-500 dark:text-orange-500'
        }`}>
          AED
        </span>
      </h3>
      
      <p className={`md:text-[16px] text-[14px] font-normal ${
        isDisabled 
          ? 'text-gray-400 dark:text-gray-600' 
          : 'text-[#00000099] dark:text-gray-400'
      }`}>
        {item.kilo}
      </p>
      
      {/* Payment Section */}
      <div className={`flex items-center justify-between border p-3 rounded-xl mt-4 ${
        isDisabled 
          ? 'border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-900/30' 
          : 'border-[#0000001a] bg-white dark:border-gray-800 dark:bg-gray-900/50'
      }`}>
        <div className='flex flex-col gap-y-1'>
          <h1 className={`flex items-center md:text-[16px] text-[14px] font-normal ${
            isDisabled 
              ? 'text-gray-400 dark:text-gray-600' 
              : 'text-[#00000099] dark:text-gray-400'
          }`}>
            {item.paymentBy.name} - {item.paymentBy.time}
          </h1>
          <p className={`md:text-[24px] text-[20px] font-bold ${
            isDisabled 
              ? 'text-gray-400 dark:text-gray-600' 
              : 'text-[#121212] dark:text-white'
          }`}>
            AED {item.paymentBy.price}
          </p>
        </div>
        <Image 
          src={payment} 
          alt='payment' 
          className={`${
            isDisabled 
              ? 'opacity-40 dark:opacity-30' 
              : 'opacity-100 dark:opacity-70'
          }`} 
        />
      </div>
      
      {/* Services List */}
      <div className='flex flex-col gap-y-4 mt-4'>
        {item.services.map((service, i) => (
          <div key={i} className='flex items-center gap-3'>
            <span className={`p-1 rounded-full ${
              isDisabled 
                ? 'bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-600' 
                : 'bg-[#6DD176] text-white dark:bg-green-600/30 dark:text-green-500'
            }`}>
              <FaCheck size={12} />
            </span>
            <p className={`md:text-[16px] text-[14px] font-normal ${
              isDisabled 
                ? 'text-gray-400 dark:text-gray-600' 
                : 'text-[#00000099] dark:text-gray-400'
            }`}>
              {service}
            </p>
          </div>
        ))}
      </div>
      

    </div>
  );
}

export default PackageV12