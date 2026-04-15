"use client";
import React, { useState } from "react";

const RoadingSide = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

   const serviceData = [
        {
            buttonName: "Emergency Roadside Assistance & Breakdown Services",
            desc:"800 Motor Guru provides fast emergency roadside assistance across Dubai for all vehicle types. The service ensures quick on-site solutions for breakdowns, battery issues, and fuel emergencies with professional mobile support.",
            options: [
                {
                    title: "Car Battery Replacement",
                    description: "Our technicians provide fast, on-site battery replacement for all car brands, ensuring minimal downtime wherever you are in Dubai.",
                },
                {
                    title: "Battery Cover Repair",
                    description: "A damaged battery cover can expose terminals to corrosion and safety risks. We restore proper protection quickly and affordably.",
                },
                {
                    title: "Jump Start Service",
                    description: "Our team responds promptly to jump-start your vehicle at any location across Dubai, getting you moving without unnecessary delays.",
                },
                {
                    title: "Fuel Delivery (Petrol & Diesel)",
                    description: "If your vehicle runs out of fuel, we deliver the correct fuel type directly to your location safely and efficiently.",
                },
                {
                    title: "Roadside Assistance",
                    description: "Our roadside assistance team is equipped to handle a wide range of vehicle breakdowns, providing reliable on-ground support across Dubai.",
                },
                {
                    title: "Emergency Tyre Change",
                    description: "A flat tyre no longer means a long wait. Our team arrives at your location and performs a safe professional tyre change on the spot.",
                }
            ]
        },
        {
            buttonName: "Car Engine, Transmission & Mechanical Repair",
            desc:"800 Motor Guru provides full mechanical repair solutions with accurate diagnostics and professional repair methods for all car brands.",
            options: [
                {
                    title: "Car Engine Repair",
                    description: "Our certified technicians accurately diagnose and repair engine faults across all car makes and models, restoring full vehicle performance.",
                },
                {
                    title: "Car Oil Change",
                    description: "We perform timely oil and filter replacements using manufacturer-recommended premium lubricants suited to your vehicle.",
                },
                {
                    title: "Car Brake Repair",
                    description: "Our brake service includes inspection, pad replacement, and rotor servicing to ensure safe stopping performance."
                },
                 {
                    title: "Car Suspension Repair",
                    description: "We restore ride comfort and stability by repairing worn suspension components with precision."
                },
                 {
                    title: "Transmission Repair",
                    description: "We diagnose and repair automatic and manual transmission faults to prevent further mechanical damage."
                },
                 {
                    title: "Engine Cooling System Repair",
                    description: "We service radiators, coolant lines, and thermostats to prevent overheating and engine failure."
                },
                {
                    title: "Car Electrical Repair",
                    description: "We fix wiring faults and electrical system issues using advanced diagnostic tools."
                },
            ]
        },
        {
            buttonName: "Tyres, Wheels & Alignment Services",
            desc:"800 Motor Guru ensures safe driving through professional tyre and wheel maintenance services.",
            options: [
                {
                    title: "Car Tyre Change",
                    description: "We provide professional tyre fitting suitable for UAE road and weather conditions.",
                },
                {
                    title: "Wheel Alignment",
                    description: "Precision alignment improves steering control, tyre life, and driving comfort.",
                },
                {
                    title: "Alloy Wheel Repair",
                    description: "We restore damaged alloy wheels to a clean factory finish using professional refinishing methods.",
                }
            ]
        },
        {
            buttonName: "Car AC & Climate Control Repair",
            desc:"",
            options: [
                {
                    title: "Car AC Repair",
                    description: "We repair all AC system issues, including gas leaks, compressor faults, and cooling failures, to ensure strong cooling performance in Dubai heat.",

                },
               
            ]
        },
        {
            buttonName: "Car Diagnostics, Tuning & Pre-Purchase Inspection",
            desc:"800 Motor Guru provides advanced diagnostic and inspection services to ensure accurate fault detection and smart buying decisions.",
            options: [
                {
                    title: "Car Diagnostic",
                    description: "We use OBD scanning tools to identify faults across all vehicle systems.",
                },
                {
                    title: "Car Tuning Shop & Service",
                    description: "We improve engine performance through ECU remapping and tuning for better power and efficiency.",
                },
                {
                    title: "Pre-Purchase Car Inspection",
                    description: "We inspect used vehicles before purchase to detect hidden mechanical and electrical issues.",
                }
            ]
        },
        {
            buttonName: "Car Glass, Windshield & Headlight Repair",
            desc:"",
            options: [
                {
                    title: "Windshield Repair",
                    description: "We fix minor cracks and chips to prevent spreading and restore glass strength.",
                },
                {
                    title: "Windshield Replacement",
                    description: "We replace damaged windshields with OEM-quality glass for safety and durability.",
                },
                {
                    title: "Headlight Restoration",
                    description: "We restore cloudy headlights to improve night visibility and road safety.",
                }
            ]
        },
        {
            buttonName: "Car Detailing, Ceramic Coating & Paint Protection",
            desc:"",
            options: [
                {
                    title: "Car Detailing",
                    description: "We deep clean and polish your car inside and out for a showroom finish.",
                },
                {
                    title: "Car Ceramic Coating",
                    description: "We apply protective ceramic coating to protect paint from UV, dust, and scratches.",
                },
                {
                    title: "Car Window Tinting",
                    description: "We provide heat-reducing and UV-protection tinting that meets Dubai regulations.",
                }
            ]
        },
        {
            buttonName: "Car Wrapping & Exterior Transformation",
            desc:"",
            options: [
                {
                    title: "Car Wrapping",
                    description: "We offer full and partial vinyl wrapping for color change and paint protection.",
                },
            ]
        },
        {
            buttonName: "Car Interior Repair, Leather Upholstery & Accessories",
            desc:"",
            options: [
                {
                    title: "Car Interior Repair",
                    description: "We restore damaged interior parts to improve appearance and resale value.",
                },
                 {
                    title: "Car Leather Seat Repair",
                    description: "We repair cracks and damage in leather seats for a clean finish.",
                },
                 {
                    title: "Car Seat Covers Installation",
                    description: "We install custom seat covers for protection and style improvement.",
                },
                 {
                    title: "Car Sunroof Repair",
                    description: "We fix sunroof leaks and mechanical issues for smooth operation.",
                },
            ]
        },

         {
            buttonName: "Car Audio, GPS, Camera & Electronics Installation",
            desc:"",
            options: [
                {
                    title: "Car Audio System Installation",
                    description: "We install high-quality sound systems to improve the audio experience.",
                },
                 {
                    title: "Car Camera Installation",
                    description: "We install front, rear, and 360 cameras for better driving safety.",
                },
                 {
                    title: "Car GPS Tracker",
                    description: "We install GPS tracking systems for real-time vehicle monitoring.",
                },
                 {
                    title: "Car Key Programming",
                    description: "We program smart keys and remote fobs for all major car brands.",
                },
            ]
        },
          {
            buttonName: "Fleet Maintenance & Corporate Car Service",
            desc:"",
            options: [
                {
                    title: "Car Fleet Maintenance Service",
                    description: "We provide scheduled maintenance for corporate fleets to reduce downtime and ensure smooth operations.",
                },
            ]
        },
    ];

  const selectedService = serviceData[activeButtonIndex];

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
    setVisibleCount(3); // reset load more on change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
       <div className=" dark:bg-gray-950 dark:border-b-[1px] dark:border-b-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Header Section */}
                <div className="text-center mb-10 md:mb-12 lg:mb-16">

                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                       Car Repair Services in Dubai
                    </h1>
                    <p className='text-gray-600 dark:text-gray-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed'>
800 Motor Guru provides a full spectrum of car repair and maintenance solutions designed to keep your vehicle performing at its best. From minor fixes to major overhauls, our skilled team handles everything under one roof  saving you time, money, and effort.
                    </p>
                </div>
      {/* Horizontal Scroll Buttons */}
      <div className="mb-8 overflow-x-auto custom-scroll">
        <div className="flex gap-3 w-max pb-2">
          {serviceData.map((service, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`whitespace-nowrap px-5 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                activeButtonIndex === index
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 dark:border-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {service.buttonName}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-6">
        <p className="text-md font-medium text-gray-800 dark:text-gray-400 mb-6">
          {selectedService.desc}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedService.options
            .slice(0, visibleCount)
            .map((option, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {option.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {option.description}
                  </p>


                  <button className="mt-5 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
                    View Service
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Load More Button */}
        {visibleCount < selectedService.options.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-black dark:bg-orange-500 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      
    </div>
       </div>
  );
};

export default RoadingSide;