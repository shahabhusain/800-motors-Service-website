"use client"
import Image from "next/image"
import React from "react"
import heroImg from "@/public/home/auto.jpeg" // replace with your image
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"

const Cta = () => {
  return (
    <div className="w-full py-20 dark:bg-gray-950">
      
      <div className="bg-orange-500 backdrop-blur-2xl rounded-3xl w-[90%] md:w-[85%] mx-auto px-6 py-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="text-white md:w-[60%] w-full">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
            Reliable Car Service at Your Doorstep with 800 Motoguru
          </h1>

          <p className="text-white/80 text-sm sm:text-base mb-6">
            800 Motoguru provides professional car repair and maintenance services you can trust. From routine servicing to emergency repairs, our expert mechanics ensure your vehicle stays in top condition—quickly, efficiently, and affordably.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
   <a
              href="tel:+971000000000"
              className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-md font-medium"
            >
              <FaPhoneAlt />
              Call Now
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/971000000000"
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