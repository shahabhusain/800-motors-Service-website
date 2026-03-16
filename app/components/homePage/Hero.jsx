import React from "react";
import Form from "./Form";
import {
  Car,
  Clock,
  MapPin,
  Toolbox,
  Phone,
  PhoneCall,
} from "lucide-react";
import { useTranslations } from "next-intl";
import userReview from "@/public/user.svg";
import userReview1 from "@/public/userb.svg";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const t = useTranslations("landingPage");
  const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs"},
  ];

  return (
    <section className="w-full bg-white dark:bg-black transition-colors duration-300 mt-6">
      <div className=" md:w-[85%] max-w-7xl w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between md:pt-28 pt-16 pb-16">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-y-6 lg:w-[60%]">
          
          {/* Headline */}
          <h1 className="lg:text-[40px] md:text-[30px] text-[25px] max-w-[655px] uppercase font-bold p   text-gray-900 dark:text-white">
           Auto Repair Service in Dubai
            <span className="text-orange-600">
              {" "}
24/7 Mobile & Workshop
            </span>
          </h1>

          <p className="md:text-xl text-sm p font-medium text-gray-800 dark:text-gray-200">
            Your Roadside Lifeline - Faster Than You Expect!
          </p>

          <p className="text-gray-600 text-xs md:text-[16px] p dark:text-gray-400 text-base">
            Dead Battery, Flat Tire, or Breakdown? We’ll Get You Back on the Road!
          </p>

          {/* Feature bullets */}
          <div className="grid grid-cols-2 gap-6 mt-2 p max-w-[455px]">
            {features.map((feature, idx) => (
              <span
                key={idx}
                className="flex items-center md:text-[16px] text-xs gap-2 text-gray-700 dark:text-gray-100 font-medium"
              >
                <span className="text-orange-500 ">{feature.icon}</span>
                {feature.title}
              </span>
            ))}
          </div>

          {/* Review */}
          <div className="mt-2">
            <Image className=" dark:hidden" src={userReview} alt="review" />
             <Image className=" dark:block hidden" src={userReview1} alt="review" />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="px-7 md:py-3 py-2 bg-[#CE0E0F] hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> 80064878
            </button>

           <button className="px-7 md:py-3 py-2 border-2 bg-green-500 text-white  text-gray-800 hover:bg-[#12e32339] dark:text-white hover:text-black dark:hover:text-white font-semibold rounded-lg transition flex items-center gap-2">
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
    </section>
  );
};

export default Hero;