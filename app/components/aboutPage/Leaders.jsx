"use client"
import Image from "next/image"
import React from "react"
import leader1 from "@/public/about/leader2.jpg"
import leader2 from "@/public/about/akhtar.jpg"
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"

const Leaders = () => {

  const leaders = [
    {
      image: leader1,
      name: "Samin Jan",
      role: "CEO",
      social: [
        { icon: FaLinkedinIn, link: "" }
      ]
    },
    {
      image: leader2,
      name: "Akhtar Ali",
      role: "Director",
      social: [
        { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/akhtar-ali-a6a28034b/" }
      ]
    }
  ]

  return (
    <div className="bg-[#fff] mb-12 dark:mb-0 dark:bg-gray-950 md:dark:mt-0 mt-16 py-12 md:py-0 dark:py-16 md:dark:py-20 dark:border-b-[#f8f8f82e] dark:border-b">
      
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 justify-between w-[90%] md:w-[85%] mx-auto">
        
        {/* Text Section - Moved to top on mobile for better UX */}
        <div className="w-full lg:w-[50%] flex flex-col gap-y-4 text-center lg:text-left order-2 lg:order-1">
          
          <h1 className="text-[#121212] dark:text-white 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Meet Our CEO at 800 Motor Guru
          </h1>

          <p className="text-[#00000099] dark:text-gray-300 text-sm sm:text-base leading-relaxed">
Samin Jan is the owner and founder of 800 Motor Guru. Samin Jan has eight years of experience in the automotive industry, which supports his role as a founder of 800 Motor Guru. Samin Jan established 800 Motor Guru on Monday, 23rd March 2022 to provide reliable and customer-focused car repair services in Dubai. 800 Motor Guru operates under his leadership with a focus on quality service and clear communication. <br /> The company offers vehicle repair, maintenance, diagnostics, and roadside assistance across Dubai. Samin Jan developed an early interest in cars, which shaped his career in the automotive field. Samin Jan studied automotive technology and business management to handle vehicle repair and run workshop operations. Samin Jan sets company standards for transparent pricing and professional service. 800 Motor Guru provides more than 20 auto repair and maintenance services under its direction. Samin Jan reviews service quality, guides technicians, and ensures clear pricing for every repair in Dubai.

          </p>

          <p className="text-[#00000099] dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            With a strong focus on customer satisfaction, our leaders ensure
            every service maintains the highest quality standards.
          </p>

        </div>

        {/* Leaders Images - Scrollable on mobile */}
        <div className="flex w-full lg:w-[40%] gap-4 md:gap-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide snap-x snap-mandatory order-1 lg:order-2">
          
            <div 
              
              className="relative group overflow-hidden flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-auto lg:flex-1 snap-start"
            >
              
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src={leaders[0].image}
                  alt={leaders[0].name}
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
                  {leaders[0].name}
                </h1>
                <p className="text-sm mb-3 opacity-90">{leaders[0].role}</p>

                <div className="flex gap-3">
                  {leaders[0].social.map((socialItem, i) => {
                    const IconComponent = socialItem.icon
                    return socialItem.link ? (
                      <a 
                        key={i}
                        href={socialItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-lg hover:text-orange-400 transition-colors duration-200"
                        aria-label={`${leaders[0].name}'s LinkedIn`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    ) : (
                      <span 
                        key={i}
                        className="text-white/50 text-lg cursor-not-allowed"
                        aria-label={`${leaders[0].name}'s LinkedIn (not available)`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </span>
                    )
                  })}
                </div>
              </div>

            </div>

        </div>

      </div>


        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 justify-between w-[90%] md:w-[85%] mx-auto">
        
        {/* Text Section - Moved to top on mobile for better UX */}
        <div className="w-full lg:w-[50%] flex flex-col gap-y-4 text-center lg:text-left order-2 lg:order-1">
          
          <h1 className="text-[#121212] dark:text-white 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Meet Our Director at 800 Motor Guru
          </h1>

          <p className="text-[#00000099] dark:text-gray-300 text-sm sm:text-base leading-relaxed">
               Akhtar Ali is the Director of 800 Motor Guru. He brings years of experience in the automotive industry, supporting his role in leading daily operations and business growth at 800 Motor Guru. Under his direction, the company focuses on quality service, operational efficiency, and customer satisfaction across Dubai.
                 <br />
800 Motor Guru offers vehicle repair, maintenance, diagnostics, and roadside assistance. Akhtar Ali ensures transparent pricing, guides the technical team, and maintains professional service standards for every repair.



          </p>

          <p className="text-[#00000099] dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            With a strong focus on customer satisfaction, our leaders ensure
            every service maintains the highest quality standards.
          </p>

        </div>

        {/* Leaders Images - Scrollable on mobile */}
        <div className="flex w-full lg:w-[40%] gap-4 md:gap-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide snap-x snap-mandatory order-1 lg:order-2">
          
            <div 
              
              className="relative group overflow-hidden flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-auto lg:flex-1 snap-start"
            >
              
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src={leaders[1].image}
                  alt={leaders[1].name}
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
                  {leaders[1].name}
                </h1>
                <p className="text-sm mb-3 opacity-90">{leaders[0].role}</p>

                <div className="flex gap-3">
                  {leaders[1].social.map((socialItem, i) => {
                    const IconComponent = socialItem.icon
                    return socialItem.link ? (
                      <a 
                        key={i}
                        href={socialItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-lg hover:text-orange-400 transition-colors duration-200"
                        aria-label={`${leaders[0].name}'s LinkedIn`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    ) : (
                      <span 
                        key={i}
                        className="text-white/50 text-lg cursor-not-allowed"
                        aria-label={`${leaders[1].name}'s LinkedIn (not available)`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </span>
                    )
                  })}
                </div>
              </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default Leaders