'use client';

import React from "react";
import Form from "./Form";
import userReview1 from "@/public/userb.svg";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";

const Hero = ({ span1, span2, desc, features, img }) => {
    return (
        <div className="w-full relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image 
                    className="w-full h-full object-cover" 
                    src={img}  
                    alt="hero background"
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    style={{ objectPosition: "center" }}
                />
            </div>
            
            {/* Gradient Overlay - More professional */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 w-full h-full"></div>
            
            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="md:w-[90%] w-[95%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 py-20 md:py-24">    
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-y-5 lg:w-[60%] w-full">
                        {/* Headline */}
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-tight text-white">
                            {span1}
                            <span className="text-orange-500 relative inline-block">
                                {" "}
                                {span2}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full opacity-50"></div>
                            </span>
                        </h1>

                        <p className="md:text-lg h-[90px] overflow-y-auto custom-scroll text-base text-gray-200 leading-relaxed max-w-xl">
                            {desc}
                        </p>

                        {/* Feature bullets - Grid layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 max-w-lg">
                            {features?.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2.5 text-gray-100"
                                >
                                    <span className="text-orange-500 flex-shrink-0 text-lg">
                                        {feature.icon}
                                    </span>
                                    <span className="text-sm md:text-base font-medium">
                                        {feature.title}
                                    </span>
                                </div>
                            ))}
                        </div>

 
                                <Image 
                                    className="w-[420px] h-auto" 
                                    src={userReview1} 
                                    alt="Google rating"
                                    width={120}
                                    height={24}
                                />


                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <a 
                                href="tel:80064878" 
                                className="group px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <PhoneCall className="w-4 h-4 group-hover:animate-pulse" />
                                <span>Call 80064878</span>
                            </a>

                            <a 
                                href="https://wa.me/97180064878" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:w-[35%] w-full lg:sticky lg:top-24">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;