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
    <div className="bg-[#F8F8F8] mt-20">
      <div className="flex items-center gap-12 max-w-7xl justify-between w-[85%] mx-auto">

        {/* Leaders Images */}
        <div className="flex w-[60%] ">

          {leaders.map((leader, index) => (
            <div key={index} className="relative group overflow-hidden">

              <Image
                src={leader.image}
                alt="leader"
                className="w-[230px] h-[600px] object-cover transition-all duration-500 group-hover:w-[350px]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-lg font-semibold">{leader.name}</h1>
                <p className="text-sm mb-3">{leader.role}</p>

                <div className="flex gap-3">
                  {leader.social.map((Icon, i) => (
                    <Icon key={i} className="text-white text-lg cursor-pointer hover:text-orange-400" />
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Text */}
        <div className="w-[40%] flex flex-col gap-y-3">
          <h1 className="text-[#121212] text-[40px] font-bold">
            Meet Our Leaders at 800 Motor Guru
          </h1>

          <p className="text-[#00000099] text-[16px]">
            Our leadership team brings years of automotive expertise and
            innovation to deliver reliable and professional services across
            the UAE.
          </p>

          <p className="text-[#00000099] text-[16px]">
            With a strong focus on customer satisfaction, our leaders ensure
            every service maintains the highest quality standards.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Leaders