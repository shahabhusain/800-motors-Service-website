"use client"
import React, { useState } from 'react'
import { FaCableCar } from 'react-icons/fa6'
import {
  FaTools,
  FaCarSide,
  FaTruck,
  FaCarBattery,
  FaBolt,
  FaCogs
} from "react-icons/fa"
import Link from 'next/link'

const TyreAndBatteryService = () => {
  const [filter, setFilter] = useState("all")

  const services = [
    // TYRE SERVICES
    {
      category: "tyre",
      icon: <FaCarSide size={20} />,
      title: "Tyre Replacement",
      link: "/services/tyre-replacement",
      desc: "Professional tyre replacement with top-quality brands suitable for UAE roads."
    },
    {
      category: "tyre",
      icon: <FaTools size={20} />,
      title: "Flat Tyre Repair",
      link: "/services/flat-tyre-repair",
      desc: "Quick puncture repair service to get you back on the road safely."
    },
    {
      category: "tyre",
      icon: <FaTruck size={20} />,
      title: "Mobile Tyre Service",
      link: "/services/mobile-tyre-service",
      desc: "On-site tyre repair and replacement anywhere in the UAE."
    },
    {
      category: "tyre",
      icon: <FaCogs size={20} />,
      title: "Wheel Balancing",
      link: "/services/wheel-balancing",
      desc: "Precision balancing to ensure smooth driving and extended tyre life."
    },
    // BATTERY SERVICES
    {
      category: "battery",
      icon: <FaCarBattery size={20} />,
      title: "Battery Installation",
      link: "/services/battery-installation",
      desc: "Professional installation ensuring proper connections and safety."
    },
    {
      category: "battery",
      icon: <FaTruck size={20} />,
      title: "Truck Battery Service",
      link: "/services/truck-battery-service",
      desc: "Heavy-duty battery solutions for trucks and commercial vehicles."
    },
    {
      category: "battery",
      icon: <FaTools size={20} />,
      title: "Battery Terminal Cleaning",
      link: "/services/battery-terminal-cleaning",
      desc: "Cleaning and maintenance to prevent corrosion and power loss."
    },
    {
      category: "battery",
      icon: <FaBolt size={20} />,
      title: "Hybrid Battery Service",
      link: "/services/hybrid-battery-service",
      desc: "Specialized service for hybrid and electric vehicle batteries."
    }
  ]

  const data = filter === "all" ? services : services.filter((item) => item.category === filter)

  return (
    <div className='bg-[#fff] dark:bg-gray-950 py-12 md:py-16 lg:py-20 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
      <div className='w-[90%] md:w-[85%] mx-auto flex flex-col gap-y-8 md:gap-y-10 items-center justify-center'>
        
        {/* Header Section */}
        <div className='text-center max-w-3xl mx-auto'>

          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Car Repair Services in Dubai
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veniam mollitia facere, 
            quas quis fugiat? Magni repellat cumque unde ab vel magnam non ex totam repudiandae. 
            Ratione qui accusantium est.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className='flex flex-wrap bg-[#f8f8f8] dark:bg-gray-900 px-6 py-3 rounded-2xl items-center justify-center gap-3 md:gap-4'>
          <button 
            onClick={() => setFilter("all")} 
            className={`px-5 md:px-6 py-2.5 rounded-md font-semibold transition-all duration-300 ${
              filter === "all" 
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105" 
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            All Services
          </button>
          <button 
            onClick={() => setFilter("tyre")} 
            className={`px-5 md:px-6 py-2.5 rounded-md font-semibold transition-all duration-300 ${
              filter === "tyre" 
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105" 
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Tyre Services
          </button>
          <button 
            onClick={() => setFilter("battery")} 
            className={`px-5 md:px-6 py-2.5 rounded-md font-semibold transition-all duration-300 ${
              filter === "battery" 
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105" 
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Battery Services
          </button>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full mt-4'>
          {data.map((item, index) => (
            <div 
              key={index} 
              className='group relative flex flex-col items-center text-center gap-y-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
            >
              {/* Icon */}
              <div className='absolute -top-6 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg text-white w-14 h-14 rounded-2xl group-hover:rounded-full transition-all duration-300 group-hover:scale-110'>
                <span className='text-2xl'>{item.icon}</span>
              </div>
              
              {/* Content */}
              <div className='mt-8'>
                <h2 className='text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-500 transition-colors'>
                  {item.title}
                </h2>
                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                  {item.desc}
                </p>
              </div>
                
               <Link href={item.link} className=' mt-4 py-2 px-5 rounded-md bg-orange-500 text-white'>View more</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TyreAndBatteryService