"use client"
import Image from "next/image"
import React from "react"
import heroImg from "@/public/home/support.webp" // replace with your image
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"

const Cta = () => {
  return (
    <div className="w-full md:py-20 py-10 dark:bg-gray-950">
      
      <div className="bg-orange-500 backdrop-blur-2xl rounded-3xl w-[90%] md:w-[85%] mx-auto px-6 py-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="text-white md:w-[60%] w-full">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
Contact 800 Motor Guru for Complete car (auto) repair services in Dubai
          </h2>

          <p className="text-white/80 text-sm sm:text-base mb-6">
800 Motor Guru provides complete car repair services in Dubai with fast booking and reliable support for all vehicle types. The company offers engine repair, AC service, battery replacement, tyre service, diagnostics, and full maintenance with certified technicians. Customers can contact 800 Motor Guru through a call, on WhatsApp at +971 800 64878, or online at 80064878 to book a service quickly and receive professional assistance. The team ensures clear communication, transparent pricing, and free pick-up and drop-off across Dubai for convenient car repair service.

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