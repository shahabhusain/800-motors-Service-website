"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FaCar, FaStar } from 'react-icons/fa'
import service from '@/public/service.jpg'
import { FaCarBattery } from "react-icons/fa";
import { FaOilCan } from "react-icons/fa6";
import { GiTyre } from "react-icons/gi";
import { FanIcon } from 'lucide-react';
import { GiSuspensionBridge } from "react-icons/gi";

const OurServices = () => {
  const awards = [
    {
      icon: <FaCarBattery className="text-orange-500 text-3xl" />,
      title: "BATTERY CHANGE",
      desc: "Fast & reliable replacement"
    },
    {
      icon: <FaOilCan className="text-orange-500 text-3xl" />,
      title: "OIL CHANGE",
      desc: "Premium synthetic oil"
    },
    {
      icon: <GiTyre className="text-orange-500 text-3xl" />,
      title: "TYRE CHANGE",
      desc: "All brands sizes"
    },
    {
      icon: <FanIcon className="text-orange-500 text-3xl" />,
      title: "AC SERVICE",
      desc: "Gas refill and repair"
    },
    {
      icon: <FaCar className="text-orange-500 text-3xl" />,
      title: "CAR REPAIR",
      desc: "Engine and Diagnostics"
    },
    {
      icon: <GiSuspensionBridge className="text-orange-500 text-3xl" />,
      title: "SUSPENSION REPAIR",
      desc: "Shocks & Struts"
    },
  ]
  
  // Animation variants
  const fromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className='flex items-center flex-col md:flex-row md:gap-32 gap-12 justify-between md:w-[85%] w-[95%] mx-auto my-20 overflow-hidden'
    >
      {/* Left Content */}
      <motion.div 
        variants={staggerContainer}
        className="md:w-1/2"
      >
        <motion.h1 
          variants={fromBottom}
          transition={{ duration: 0.6 }}
          className='md:text-[36px] text-[25px] uppercase font-semibold mb-6'
        >
          <span className='text-orange-500'>Our</span> Services
        </motion.h1>
        
        {/* Awards Grid */}
        <motion.div 
          variants={staggerContainer}
          className='grid grid-cols-2 gap-4 mb-6'
        >
          {awards.map((item, index) => (
            <motion.div
              key={index}
              variants={fromBottom}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 }
              }}
              className='md:p-6 p-3 rounded-md shadow flex flex-col gap-3 items-center justify-center text-center hover:shadow-lg transition-all bg-white dark:bg-gray-800'
            >
              <motion.div 
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FF6E190D] p-3 rounded-full"
              >
                {item.icon}
              </motion.div>
              
              <div className='flex flex-col gap-y-1 leading-[1.5rem] mt-4'>
                <h2 className='font-semibold md:text-[20px] text-[14px] text-gray-900 dark:text-white'>
                  {item.title}
                </h2>
                <p className='md:text-sm text-[12px] text-gray-600 dark:text-gray-400'>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Buttons */}
        <motion.div 
          variants={staggerContainer}
          className='flex gap-4 w-full'
        >
          <motion.button
            variants={fromBottom}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ 
              y: -3,
              boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ y: 0 }}
            className='flex-1 bg-[#eeebeb] dark:bg-gray-700 dark:text-white md:py-3 py-2 px-5 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all'
          >
            MORE DETAILS
          </motion.button>
          
          <motion.button
            variants={fromBottom}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ 
              y: -3,
              boxShadow: "0 10px 20px -5px rgba(249, 115, 22, 0.3)"
            }}
            whileTap={{ y: 0 }}
            className='flex-1 bg-orange-500 text-white md:py-3 py-2 px-5 rounded-md font-medium hover:bg-orange-600 transition-all'
          >
            BOOK NOW
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Right Image */}
      <motion.div 
        variants={fromBottom}
        transition={{ duration: 0.7, delay: 0.3 }}
        className='md:w-1/2'
      >
        <motion.div

        >
          <Image 
            className='h-[650px] rounded-2xl object-cover transition-transform duration-500'
            src={service} 
            alt='service'
            width={500}
            height={650}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default OurServices