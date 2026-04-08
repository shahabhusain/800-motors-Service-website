"use client"
import Image from "next/image"
import React from "react"
import heroImg from "@/public/home/auto.jpeg" // replace with your image
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"

const Cta = () => {
  return (
    <div className="w-full py-20 dark:bg-gray-950">
      
      <div className="bg-orange-500 backdrop-blur-2xl rounded-3xl w-[92%] md:w-[85%] mx-auto px-6 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="text-white md:w-[55%] w-full">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
            SMM Panel for Resellers: Grow Your Business with Morethanpanel!
          </h1>

          <p className="text-white/80 text-sm sm:text-base mb-6">
            MoreThanPanel isn't just a tool for individuals. It's a complete SMM reseller panel built for agencies, marketers, and entrepreneurs who want to launch or scale a profitable business in social media services.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/971000000000"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-white font-medium"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            {/* Call */}
            <a
              href="tel:+971000000000"
              className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-full font-medium"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-[40%] w-full flex justify-center">
          <div className="relative w-full max-w-[300px] md:max-w-[350px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={heroImg}
              alt="hero"
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