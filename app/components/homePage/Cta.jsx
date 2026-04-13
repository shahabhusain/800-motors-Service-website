"use client"
import Image from "next/image"
import React from "react"
import heroImg from "@/public/home/support.webp" // replace with your image
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"

const Cta = () => {
  return (
    <div className="w-full py-20 dark:bg-gray-950">
      
      <div className="bg-orange-500 backdrop-blur-2xl rounded-3xl w-[90%] md:w-[85%] mx-auto px-6 py-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="text-white md:w-[60%] w-full">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
            Contact 800 Motor Guru For Auto Repair Services in Dubai
          </h1>

          <p className="text-white/80 text-sm sm:text-base mb-6">
            800 Motor Guru provides fast contact and booking support for auto repair services across Dubai. The team handles booking, roadside assistance, diagnostics, and workshop repair for all car brands with quick response and clear guidance. 800 Motor Guru assists customers with battery service, engine repair, AC work, tyre change, fuel delivery, jump start, and general maintenance. The team ensures smooth communication from booking to final delivery of the vehicle.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
   <a
              href="tel:80064878"
              className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-md font-medium"
            >
              <FaPhoneAlt />
              Call (80064878)
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/97180064878"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-md text-white font-medium"
            >
              <FaWhatsapp />
               WhatsApp
            </a>

            {/* Call */}
         

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-[40%] w-full flex justify-center">
          <div className="relative w-full max-w-[400px] md:max-w-[450px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={heroImg}
              alt="Car Service"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cta