import React from "react";
import Form from "./Form";
import userReview1 from "@/public/userb.svg";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";

const Hero = ({ span1, span2, desc, features, img }) => {
  return (
    <div className="w-full relative md:h-screen h-[1300px]">
        {/* Background Image - Fixed height issues */}
        <div className="absolute inset-0 w-full h-full">
            <Image 
                className="w-full h-full object-cover" 
                src={img}  
                alt="hero-bg"
                fill
                priority
                sizes="100vw"
                quality={90}
                style={{ objectPosition: "center" }}
            />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000b0] w-full h-full"></div>
        
        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center w-full">
            <div className="md:w-[90%] w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between md:pt-32 pt-24 pb-20">    
                {/* LEFT CONTENT */}
                <div className="flex flex-col gap-y-4 lg:w-[65%] w-full">
                    
                    {/* Headline */}
                    <h1 className="lg:text-[45px] md:text-[34px] leading-tight max-w-[54rem] md:leading-[3.2rem] lg:leading-[3.8rem] text-[30px] sm:text-[34px]  font-bold text-white">
                        {span1}
                        <span className="text-orange-600">
                            {" "}
                            {span2}
                        </span>
                    </h1>

                    <p className="md:text-xl custom-scroll text-base sm:text-lg max-w-2xl font-medium text-gray-200 md:h-[60px] h-[50px] overflow-y-auto">
                        {desc}
                    </p>

                    {/* Feature bullets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-2 w-full max-w-[605px]">
                        {features?.map((feature, idx) => (
                            <span
                                key={idx}
                                className="flex items-center md:text-[16px] text-sm gap-2 text-gray-100 font-medium"
                            >
                                <span className="text-orange-500 flex-shrink-0">{feature.icon}</span>
                                <span className="flex-1">{feature.title}</span>
                            </span>
                        ))}
                    </div>

                    {/* Review */}
                    <div className="mt-2">
                        <Image 
                            className="w-auto h-auto" 
                            src={userReview1} 
                            alt="review"
                            width={200}
                            height={40}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                        <a href="tel:80064878" className="px-6 sm:px-8 md:py-3 py-2.5 bg-[#CE0E0F] hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition flex items-center gap-2 text-sm sm:text-base">
                            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" /> 80064878
                        </a>

                     <a 
  href="https://wa.me/97180064878" 
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 sm:px-8 md:py-3 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base group hover:scale-105 active:scale-95"
>
  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
  <span>WhatsApp</span>
</a>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="lg:w-[35%] w-full mt-8 lg:mt-0">
                    <Form />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;