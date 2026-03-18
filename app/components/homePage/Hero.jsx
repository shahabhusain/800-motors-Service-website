import React from "react";
import Form from "./Form";
import userReview from "@/public/user.svg";
import userReview1 from "@/public/userb.svg";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import herobg from '@/public/herobg.jpg'
const Hero = ({span1, span2, desc, desc1, features}) => {
  return (
    <section className="w-full relative">
        <Image className=" h-screen" src={herobg}  alt="hero-bg"/>
         <div className=" bg-[#000000b0] w-full h-screen absolute top-0"></div>
        <div className=" absolute top-4 flex items-center justify-center w-full">
            <div className=" md:w-[90%] max-w-7xl w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between md:pt-28 pt-16 pb-16">    
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-y-6 lg:w-[60%]">
          
          {/* Headline */}
          <h1 className="lg:text-[40px] md:text-[30px] text-[25px] max-w-[655px] uppercase font-bold p   text-white">
            {span1}
            <span className="text-orange-600">
              {" "}
              {span2}
            </span>
          </h1>

          <p className="md:text-xl text-sm p font-medium text-gray-200">
            {desc}
          </p>

          <p className=" max-w-xl text-xs md:text-[16px] p text-gray-100 text-base">
            {desc1}
          </p>

          {/* Feature bullets */}
          <div className="grid grid-cols-2 gap-6 mt-2 p max-w-[455px]">
            {features.map((feature, idx) => (
              <span
                key={idx}
                className="flex items-center md:text-[16px] text-xs gap-2 text-gray-100 font-medium"
              >
                <span className="text-orange-500 ">{feature.icon}</span>
                {feature.title}
              </span>
            ))}
          </div>

          {/* Review */}
          <div className="mt-2">
             <Image className="" src={userReview1} alt="review" />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="px-7 md:py-3 py-2 bg-[#CE0E0F] hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> 80064878
            </button>

           <button className="px-7 md:py-3 py-2  bg-green-500 text-white  text-gray-800 hover:bg-[#12e32339] dark:text-white hover:text-black dark:hover:text-white font-semibold rounded-lg transition flex items-center gap-2">
  <FaWhatsapp className="w-5 h-5 " />
  Whatsapp
</button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-[40%] w-full">
          <Form />
        </div>
      </div>
        </div>
    </section>
  );
};

export default Hero;