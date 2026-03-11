"use client";

import React, { useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { FaCrown, FaTrophy, FaStar, FaCar } from 'react-icons/fa'
import { IoHourglassSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";

// Counter Component
const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration * 60) // 60fps
      let current = start
      
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 1000 / 60) // 60fps

      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}

const About = () => {

  const awards = [
    {
      icon: <FaCrown className="text-orange-500 text-3xl" />,
      title: "Best Onsite Car Care",
      desc: "Dubai Auto Expo 2024"
    },
    {
      icon: <FaTrophy className="text-orange-500 text-3xl" />,
      title: "Mobility Excellence",
      desc: "RTA Award 2023"
    },
    {
      icon: <FaStar className="text-orange-500 text-3xl" />,
      title: "Customer Choice",
      desc: "UAE Business Awards 2025"
    }
  ]

  const awards2 = [
    {
      icon: <FaCar className="text-orange-500 text-3xl" />,
      title: "45+",
      value: 45,
      desc: "On-Road Vehicles",
      hasPlus: true
    },
    {
      icon: <FaCalendarAlt className="text-orange-500 text-3xl" />,
      title: "15+",
      value: 15,
      desc: "Years Of Experience",
      hasPlus: true
    },
    {
      icon: <IoHourglassSharp className="text-orange-500 text-3xl" />,
      title: "20",
      value: 20,
      desc: "Minutes Turnaround"
    },
    {
      icon: <FaHeadset className="text-orange-500 text-3xl" />,
      title: "24/7",
      desc: "Custom Support",
      is247: true
    },
    {
      icon: <GrGoogle className="text-orange-500 text-3xl" />,
      title: "17K+",
      value: 17,
      desc: "Google Reviews",
      hasK: true
    },
    {
      icon: <FaStar className="text-orange-500 text-3xl" />,
      title: "4.7",
      value: 4.7,
      desc: "Google Rating",
      isDecimal: true
    },
  ]

  // Animation variants - all from bottom
  const fromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300 overflow-hidden"
    >
      <div className="md:w-[85%] w-[95%]  mx-auto flex flex-col md:flex-row items-center justify-between gap-x-26">

        {/* Left Section */}
        <motion.div 
          variants={staggerContainer}
          className="md:w-1/2 flex flex-col gap-y-4"
        >
          <motion.h1 
            variants={fromBottom}
            transition={{ duration: 0.6 }}
            className="md:text-[36px] text-[25px] font-semibold uppercase text-gray-900 dark:text-white"
          >
            About 800 <span className="text-orange-500">MOTOR</span> GURU
          </motion.h1>

          <motion.p 
            variants={fromBottom}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 md:text-[16px] text-[14px]"
          >
            Welcome to 800 Motor Guru, a trusted provider of onsite car repair and maintenance services in the UAE. Our skilled technicians deliver fast, reliable automotive solutions directly to your location, making car care simple and convenient.
          </motion.p>

          <motion.p 
            variants={fromBottom}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 md:text-[16px] text-[14px]"
          >
            At 800 Motor Guru, we focus on keeping your vehicle safe and running smoothly. From emergency roadside support to routine maintenance, our team provides professional service wherever you are across the UAE.
          </motion.p>

          <motion.h3 
            variants={fromBottom}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-semibold md:text-lg text-[16px] mt-2 text-gray-900 dark:text-white"
          >
            AWARD WINNING SERVICE IN DUBAI
          </motion.h3>

          {/* Awards Section */}
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-4 mt-2"
          >
            {awards.map((item, index) => (
              <motion.div
                key={index}
                variants={fromBottom}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col gap-y-3 bg-white dark:bg-gray-800 p-5 w-full rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#FF6E190D] p-3 rounded-sm w-fit"
                >
                  {item.icon}
                </motion.div>

                <h2 className="font-semibold text-[16px] text-gray-900 dark:text-white">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          variants={staggerContainer}
          className="md:w-[38%]"
        >
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 md:mt-0 mt-4"
          >
            {awards2.map((item, index) => (
              <motion.div
                key={index}
                variants={fromBottom}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center  justify-center gap-y-2 bg-white dark:bg-gray-800 md:h-[180px] md:w-[220px] h-[140px] w-[160px] rounded-md shadow-sm hover:shadow-md transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#FF6E190D] p-3 rounded-sm"
                >
                  {item.icon}
                </motion.div>

                <h2 className="font-semibold md:text-[32px] text-[25px] text-gray-900 dark:text-white">
                  {item.is247 ? (
                    "24/7"
                  ) : item.isDecimal ? (
                    <Counter end={item.value} duration={2} />
                  ) : item.hasK ? (
                    <>
                      <Counter end={item.value} duration={2} />K+
                    </>
                  ) : item.hasPlus ? (
                    <>
                      <Counter end={item.value} duration={2} />+
                    </>
                  ) : (
                    <Counter end={item.value} duration={2} />
                  )}
                </h2>

                <p className="md:text-[16px] text-[14px] text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default About