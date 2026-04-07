"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { FaMapMarkerAlt, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa'

// Import location images (replace these with your actual images)
import dubaiImg from '@/public/home/auto.jpeg';
import ajmanImg from '@/public/home/auto.jpeg';
import abuDhabiImg from '@/public/home/auto.jpeg';
import sharjahImg from '@/public/home/auto.jpeg';

const HowItWorks = () => {
    const locations = [
        {
            name: "Dubai",
            image: dubaiImg,
            paragraph: "8MG serves all areas of Dubai including Downtown, Marina, JBR, Business Bay, Dubai Hills, Emirates Hills, Palm Jumeirah, JLT, Al Barsha, Mirdif, and Deira. Our mobile team and free pickup service ensure your car gets expert care no matter where you are in Dubai. With our strategically located service centers, we can reach any location within 30-45 minutes.",
        },
        {
            name: "Ajman",
            image: ajmanImg,
            paragraph: "Ajman car owners can now access 8MG's premium auto repair services without traveling to other emirates. We cover all areas including Al Jurf, Al Nuaimiya, Al Rashidiya, and Emirates City. Our team provides prompt service, genuine parts, and expert repairs while offering free vehicle collection and return across Ajman. Experience dealership-quality service at affordable rates.",
        },
        {
            name: "Abu Dhabi",
            image: abuDhabiImg,
            paragraph: "Extending our premium auto repair services to Abu Dhabi and surrounding areas including Yas Island, Saadiyat Island, Khalifa City, Al Reem Island, and Mussafah. Our team regularly services clients in the capital, offering the same quality repairs, free pickup, and drop-off services. We understand the specific needs of Abu Dhabi drivers and provide tailored solutions.",
        },
        {
            name: "Sharjah",
            image: sharjahImg,
            paragraph: "8MG proudly serves Sharjah residents across all major areas including Al Nahda, Al Qasimia, Al Majaz, Al Khan, University City, and Muwaileh. Our team understands the unique traffic patterns and driving conditions in Sharjah, providing efficient, reliable, and affordable auto repair services with the same free pickup and delivery convenience.",
        }
    ];

    return (
        <div className='w-[90%] mx-auto my-20'>
            {/* Header Section */}
            <div className='text-center flex flex-col gap-3 items-center justify-center mb-12'>
                <h2 className='text-3xl md:text-3xl max-w-3xl lg:text-5xl font-bold mb-4 text-gray-800'>
                    How to Find Best Auto Repair Company <span className='text-orange-500'>Near Me?</span>
                </h2>
                <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                    8MG provides professional auto repair services across all locations in the UAE. 
                    No matter where you are, we're just a call away with free pickup and delivery.
                </p>
            </div>

            {/* Locations Grid with Images */}
            <div className='grid grid-cols-1 md:grid-cols-1 gap-8'>
                {locations.map((location, index) => (
                    <div 
                        key={index} 
                        className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col md:flex-row'
                    >
                        {/* Content Section - Left Side */}
                        <div className='p-6 md:w-1/2 lg:w-1/2'>
                            <div className='flex items-center gap-2 mb-3'>
                                <FaMapMarkerAlt className='text-orange-500 text-2xl' />
                                <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                                    {location.name}
                                </h1>
                            </div>
                            <p className='text-gray-700 leading-relaxed mb-4'>
                                {location.paragraph}
                            </p>
                            <div className='flex items-center gap-4 mt-4'>
                                <div className='flex items-center gap-2 text-sm text-gray-600'>
                                    <FaCheckCircle className='text-green-500' />
                                    <span>Free Pickup</span>
                                </div>
                                <div className='flex items-center gap-2 text-sm text-gray-600'>
                                    <FaCheckCircle className='text-green-500' />
                                    <span>Certified Technicians</span>
                                </div>
                            </div>
                        </div>

                        {/* Location Image - Right Side */}
                        <div className='relative md:w-1/2 lg:w-1/2 h-64 md:h-auto overflow-hidden'>
                            <Image
                                src={location.image}
                                alt={`${location.name} location`}
                                fill
                                className='object-cover transition-transform duration-500 group-hover:scale-110'
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay with location name */}
                            <div className='absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                        </div>
                    </div>
                ))}
            </div>

          
        </div>
    )
}

export default HowItWorks