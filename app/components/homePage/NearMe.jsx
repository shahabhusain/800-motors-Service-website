"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaTools, FaShieldAlt, FaMoneyBillWave, FaTruck, FaClock, FaUserGraduate, FaGoogle, FaStar, FaCheckCircle } from 'react-icons/fa'
import hiddenFee from '@/public/home/hiddenFee.webp';
import skill from '@/public/home/skill.webp';
import garage from '@/public/home/garage.webp';
import autoRepair from '@/public/home/autoRepair.webp';
import drivers from '@/public/home/drivers.webp';
import car from '@/public/home/car.webp';
import issues from '@/public/home/issues.webp';
import tech from '@/public/home/tech.webp';


const NearMe = () => {
    const [selectedFeature, setSelectedFeature] = useState(0); // Default to first feature

    const features = [
        {
            icon: <FaMoneyBillWave className="text-2xl" />,
            title: "Transparent Vehicle Maintenance Pricing Without Hidden Fees",
            desc: "Without Hidden Fees",
            paragraph: "800 Motor Guru provides clear pricing before repair and shares a written estimate with the customer. The company explains service costs and parts details to avoid hidden charges.",
            image: hiddenFee
        },
        {
            icon: <FaUserGraduate className="text-2xl" />,
            title: "Skilled Automotive Professionals for Every Make and Model",
            desc: "for Every Make and Model",
            paragraph: "800 Motor Guru assigns trained technicians for German, Japanese, American, British, and French vehicles. The team handles engine, electrical, AC, and diagnostic work for each brand.",
            image: skill
        },
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Follows International Car Garage Standards",
            desc: "ISO Certified",
            paragraph: "800 Motor Guru follows defined repair procedures and uses proper tools for each service. The team maintains quality standards during inspection, repair, and final check.",
            image: garage
        },
        {
            icon: <FaTools className="text-2xl" />,
            title: "Complete Car and Auto Repair Services Without Needing Anyone Else",
            desc: "without needing anyone else",
            paragraph: "800 Motor Guru provides all car repair and maintenance services under one workshop. The company handles roadside support, mechanical repair, and body work in one place.",
            image: autoRepair
        },
        {
            icon: <FaMoneyBillWave className="text-2xl" />,
            title: "Affordable Service Packages Designed for Dubai Drivers",
            desc: "Designed for Dubai Drivers",
            paragraph: "800 Motor Guru offers service packages with fixed pricing and scheduled maintenance plans. The packages help customers manage repair cost and avoid sudden expenses.",
            image: drivers
        },
        {
            icon: <FaGoogle className="text-2xl" />,
            title: "2,500+ Google Reviews with a 4.9★ Rating by Dubai Residents",
            desc: "with a 4.9★ Rating by Dubai Residents",
            paragraph: "800 Motor Guru has received over 2,500 Google reviews with a 4.9 rating from customers in Dubai. The reviews reflect consistent service quality and customer satisfaction.",
            image: garage
        },
        {
            icon: <FaTruck className="text-2xl" />,
            title: "Free Pick-Up and Drop-Off Across Dubai",
            desc: "Across Dubai",
            paragraph: "800 Motor Guru collects and delivers vehicles from customer locations without extra charge. The service saves time and provides convenience across Dubai.",
            image: car
        },
        {
            icon: <FaClock className="text-2xl" />,
            title: "Same-Day Repairs for Most Common Issues",
            desc: "for Most Common Issues",
            paragraph: "800 Motor Guru completes common repairs such as battery replacement, oil change, and tyre service on the same day. The service reduces waiting time and keeps vehicles running.",
            image: issues
        },
        {
            icon: <FaUserGraduate className="text-2xl" />,
            title: "Certified Technicians with Brand-Specific Training",
            desc: "with Brand-Specific Training",
            paragraph: "800 Motor Guru uses certified technicians trained for different car brands and systems. The team performs repair work based on manufacturer standards and technical knowledge.",
            image: tech
        }
    ];

    const currentFeature = features[selectedFeature];

    return (
         <div className=' bg-[#f8f8f8] dark:bg-gray-950 md:py-20 py-10 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
             <div className='w-[90%] mx-auto '>
            {/* Header Section */}
            <div className='text-center mb-12'>
                <h1 className='text-3xl dark:text-white md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800'>
                    Best Auto Repair Near Me in <span className='text-orange-500 relative inline-block'>
                        Dubai
                    </span>
                </h1>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-6 h-[60px] overflow-y-auto custom-scroll'>
                   800 Motor Guru provides auto repair services near you in Dubai with fast response and reliable support. 800 Motor Guru reaches customer locations across Dubai for roadside assistance and workshop services. Many customers choose 800 Motor Guru as the best auto repair near them in Dubai due to consistent service results and verified reviews. 800 Motor Guru handles battery replacement, fuel delivery, jump start, engine repair, diagnostics, AC service, and tyre work for all vehicle types. The team uses trained technicians and diagnostic tools such as computerized scanners, engine analyzers, and alignment machines to identify and repair vehicle issues. 800 Motor Guru provides clear pricing before repair and keeps the service process simple for customers. 800 Motor Guru ensures quick access to auto repair services near your location and helps keep your vehicle in working condition without delay.
                </p>
             
            </div>

            <div className='flex flex-col lg:flex-row gap-8'>
                {/* Features List - Left Side */}
                <div className='w-full lg:w-[40%]'>
                    <div className='flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar'>
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className={`bg-white dark:bg-gray-900 rounded-xl shadow-md transition-all duration-300 p-5 border-l-4 cursor-pointer ${
                                    selectedFeature === index 
                                        ? 'border-orange-500 bg-orange-50 shadow-lg' 
                                        : 'border-gray-200 hover:shadow-xl'
                                }`}
                                onClick={() => setSelectedFeature(index)}
                            >
                                <div className='flex items-start gap-4'>
      
                                    <div className='flex-1'>
                                        <h3 className={`font-semibold mb-1 ${
                                            selectedFeature === index ? 'text-orange-600' : 'text-gray-800 dark:text-gray-300'
                                        }`}>
                                            {feature.title}
                                        </h3>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Dynamic Content and Image */}
                <div className='w-full lg:w-[60%]'>
                    <div className='bg-orange-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg'>
                        {/* Title */}
                        <h2 className='text-2xl font-bold dark:text-white text-gray-800 mb-4 flex items-center gap-2'>
                            <span>{currentFeature.title}</span>
                        </h2>
                        
                        {/* Dynamic Paragraph */}
                        <div className='mb-6'>
                            <p className='text-gray-700 dark:text-gray-400 leading-relaxed'>
                                {currentFeature.paragraph}
                            </p>
                        </div>

                        {/* Dynamic Image */}
                        <div className='relative h-64 md:h-80 rounded-xl overflow-hidden'>
                            <Image
                                src={currentFeature.image}
                                alt={currentFeature.title}
                                fill
                                className='object-cover'
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                
                    </div>
                </div>
            </div>

            {/* Custom CSS for scrollbar */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #f97316;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #ea580c;
                }
            `}</style>
        </div>
         </div>
    )
}

export default NearMe