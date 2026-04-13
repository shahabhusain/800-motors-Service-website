"use client"
import Image from "next/image"
import React from "react"
import leader1 from "@/public/about/leader1.jpg"
import leader2 from "@/public/about/leader2.jpg"
import leader3 from "@/public/about/leader3.jpg"
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"

const Leaders = () => {

  const leaders = [
    {
      image: leader1,
      name: "John Carter",
      role: "CEO",
      social: [FaInstagram, FaYoutube, FaLinkedinIn]
    },
    {
      image: leader2,
      name: "Samin Jan",
      role: "CTO",
      social: [FaInstagram, FaYoutube, FaLinkedinIn]
    },
    {
      image: leader3,
      name: "David Smith",
      role: "Manager",
      social: [FaInstagram, FaYoutube, FaLinkedinIn]
    },
  ]

  return (
    <div className="bg-[#fff] dark:bg-gray-950 md:dark:mt-0 mt-16 py-12 md:py-0 dark:py-16 md:dark:py-20 dark:border-b-[#f8f8f82e] dark:border-b">
      
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 justify-between w-[90%] md:w-[85%] mx-auto">
        
        {/* Text Section - Moved to top on mobile for better UX */}
        <div className="w-full lg:w-[40%] flex flex-col gap-y-4 text-center lg:text-left order-2 lg:order-1">
          
          <h1 className="text-[#121212] dark:text-white 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Meet Our Leaders at 800 Motor Guru
          </h1>

          <p className="text-[#00000099] dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Our leadership team brings years of automotive expertise and
            innovation to deliver reliable and professional services across
            the UAE.
          </p>

          <p className="text-[#00000099] dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            With a strong focus on customer satisfaction, our leaders ensure
            every service maintains the highest quality standards.
          </p>

        </div>

        {/* Leaders Images - Scrollable on mobile */}
        <div className="flex w-full lg:w-[60%] gap-4 md:gap-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide snap-x snap-mandatory order-1 lg:order-2">
          
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-auto lg:flex-1 snap-start"
            >
              
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-all duration-500 lg:group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 33vw"
                />
              </div>

              {/* Gradient Overlay - Always visible on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
              lg:opacity-0 lg:group-hover:opacity-100 transition duration-300" />

              {/* Content - Always visible on mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white 
              lg:opacity-0 lg:group-hover:opacity-100 transition duration-300">
                
                <h1 className="text-base sm:text-lg font-semibold mb-1">
                  {leader.name}
                </h1>
                <p className="text-sm mb-3 opacity-90">{leader.role}</p>

                <div className="flex gap-3">
                  {leader.social.map((Icon, i) => (
                    <a 
                      key={i}
                      href="#"
                      className="text-white text-lg hover:text-orange-400 transition-colors duration-200"
                      aria-label={`${leader.name}'s ${Icon.name}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Leaders