"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaTools, FaShieldAlt, FaMoneyBillWave, FaTruck, FaClock, FaUserGraduate, FaGoogle, FaStar, FaCheckCircle } from 'react-icons/fa'
import autoRepairImg from '@/public/home/auto.jpeg'; // Replace with your actual image path

const NearMe = () => {
    const [selectedFeature, setSelectedFeature] = useState(0); // Default to first feature

    const features = [
        {
            icon: <FaMoneyBillWave className="text-2xl" />,
            title: "Transparent Vehicles Maintenance Pricing",
            desc: "Without Hidden Fees",
            paragraph: "At 8MG, we believe in complete transparency when it comes to pricing. You'll receive a detailed estimate before any work begins, with absolutely no hidden fees or surprise charges. Our pricing structure is clear, competitive, and designed to give you peace of mind. We break down every cost - from parts to labor - so you know exactly what you're paying for. No hidden diagnosis fees, no unexpected add-ons, just honest pricing you can trust.",
            image: autoRepairImg
        },
        {
            icon: <FaUserGraduate className="text-2xl" />,
            title: "Skilled Automotive Professionals",
            desc: "for Every Make and Model",
            paragraph: "Our team consists of highly trained and certified automotive professionals with expertise across all vehicle makes and models. From German luxury cars like BMW, Mercedes, and Audi to Japanese reliability from Toyota, Honda, and Nissan - our mechanics have brand-specific training. We continuously invest in our team's education, ensuring they stay updated with the latest automotive technologies and repair techniques.",
            image: autoRepairImg
        },
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Follows International Car Garage Standards",
            desc: "ISO Certified",
            paragraph: "8MG operates under strict international garage standards and holds ISO certifications that guarantee quality service. Our facility meets global benchmarks for equipment, safety protocols, and service delivery. We follow manufacturer-recommended procedures and use industry-best practices for every repair. This commitment to international standards ensures your vehicle receives the same level of care as it would at a dealership, but at more affordable rates.",
            image: autoRepairImg
        },
        {
            icon: <FaTools className="text-2xl" />,
            title: "Complete Car and Auto Repair Services",
            desc: "without needing anyone else",
            paragraph: "Why go to multiple shops when 8MG offers everything under one roof? From engine diagnostics and transmission repair to AC service, electrical work, brake replacement, suspension repair, and routine maintenance - we do it all. Our comprehensive service offering means you don't need to take your car to different specialists for different problems. Save time, money, and hassle by choosing 8MG for all your auto repair needs.",
            image: autoRepairImg
        },
        {
            icon: <FaMoneyBillWave className="text-2xl" />,
            title: "Affordable Service Packages",
            desc: "Designed for Dubai Drivers",
            paragraph: "We understand that Dubai drivers have unique needs, which is why we've created affordable service packages tailored to local driving conditions. Choose from our basic, standard, or premium maintenance packages that include everything from oil changes to comprehensive inspections. Our packages are designed to save you up to 40% compared to individual services. Perfect for fleet owners, families with multiple cars, or anyone looking for cost-effective vehicle maintenance.",
            image: autoRepairImg
        },
        {
            icon: <FaGoogle className="text-2xl" />,
            title: "2,500+ Google Reviews",
            desc: "with a 4.9★ Rating by Dubai Residents",
            paragraph: "Join over 2,500 satisfied Dubai residents who have rated us 4.9 stars on Google! Our stellar reputation is built on years of consistent quality service, honest dealings, and customer satisfaction. Reading our reviews will show you why Dubai drivers trust us with their vehicles. From prompt service to quality repairs and friendly staff - our customers love what we do, and we're proud of every 5-star review we receive.",
            image: autoRepairImg
        },
        {
            icon: <FaTruck className="text-2xl" />,
            title: "Free Pick-Up and Drop-Off",
            desc: "Across Dubai",
            paragraph: "Enjoy the convenience of our complimentary vehicle collection and delivery service anywhere in Dubai. Whether you're in Downtown, Marina, JBR, Dubai Hills, or anywhere else in the city, we'll pick up your car and return it after service - completely free of charge. This service saves you valuable time and eliminates the hassle of waiting at the garage. Just book your service, and we'll handle the logistics.",
            image: autoRepairImg
        },
        {
            icon: <FaClock className="text-2xl" />,
            title: "Same-Day Repairs",
            desc: "for Most Common Issues",
            paragraph: "Need your car fixed quickly? Our efficient team handles most common repairs on the same day. From brake pad replacement and oil changes to AC repairs and electrical diagnostics - we work fast without compromising quality. We understand that being without your car in Dubai is inconvenient, so we prioritize quick turnaround times. Drop your car in the morning, and it's often ready by evening.",
            image: autoRepairImg
        },
        {
            icon: <FaUserGraduate className="text-2xl" />,
            title: "Certified Technicians",
            desc: "with Brand-Specific Training",
            paragraph: "Our technicians don't just have general automotive knowledge - they have brand-specific certifications and ongoing training. Whether it's BMW, Mercedes, Audi, Porsche, Lexus, or any other brand, our mechanics understand the unique engineering and requirements of your vehicle. We invest heavily in continuous education, sending our team to manufacturer training programs and keeping them updated on the latest diagnostic tools and repair techniques.",
            image: autoRepairImg
        }
    ];

    const currentFeature = features[selectedFeature];

    return (
         <div className=' dark:bg-gray-950 dark:py-20'>
             <div className='w-[90%] mx-auto my-20 dark:my-0'>
            {/* Header Section */}
            <div className='text-center mb-12'>
                <h1 className='text-4xl dark:text-white md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800'>
                    Best Auto Repair Near Me in <span className='text-orange-500 relative inline-block'>
                        Dubai
                        <span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full'></span>
                    </span>
                </h1>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-6'>
                    The best auto repair near you in Dubai is <span className='text-orange-500 font-bold text-2xl'>800MG</span>
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