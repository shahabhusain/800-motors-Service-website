"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const NearMe = () => {
    const [visibleCount, setVisibleCount] = useState(8)
    const services = [
        {
            link: "/audi-mechanic-dubai",
            title: "Best Audi Mechanic Near Me in Dubai",
            paragraph: "Looking for a reliable Audi mechanic in Dubai? Our certified experts provide professional diagnostics, repairs, and maintenance for all Audi models."
        },
        {
            link: "/audi-repair-dubai",
            title: "Audi Repair Specialist in Dubai",
            paragraph: "We offer complete Audi repair services using advanced tools and genuine parts to ensure top performance and reliability."
        },
        {
            link: "/audi-service-center-dubai",
            title: "Audi Service Center in Dubai",
            paragraph: "Visit our trusted Audi service center for routine maintenance, inspections, and high-quality servicing across Dubai."
        },
        {
            link: "/audi-engine-repair-dubai",
            title: "Audi Engine Repair in Dubai",
            paragraph: "Expert Audi engine diagnostics and repair services to restore power, efficiency, and smooth performance."
        },
        {
            link: "/audi-ac-repair-dubai",
            title: "Audi AC Repair Dubai",
            paragraph: "Stay cool with our professional Audi AC repair services designed for UAE's extreme weather conditions."
        },
        {
            link: "/audi-brake-repair-dubai",
            title: "Audi Brake Repair Services",
            paragraph: "Ensure safety with our reliable Audi brake inspection, repair, and replacement services."
        },
        {
            link: "/audi-transmission-repair-dubai",
            title: "Audi Transmission Repair Dubai",
            paragraph: "We specialize in diagnosing and fixing Audi transmission issues for smooth and responsive driving."
        },
        {
            link: "/audi-oil-change-dubai",
            title: "Audi Oil Change Service Dubai",
            paragraph: "Premium oil change service using manufacturer-approved oils for maximum engine protection."
        },
        {
            link: "/audi-battery-replacement-dubai",
            title: "Audi Battery Replacement Dubai",
            paragraph: "Quick and efficient Audi battery replacement with high-performance batteries suited for UAE climate."
        },
        {
            link: "/audi-tyre-service-dubai",
            title: "Audi Tyre Replacement & Repair",
            paragraph: "Professional tyre replacement, balancing, and repair services for all Audi vehicles."
        },
        {
            link: "/audi-suspension-repair-dubai",
            title: "Audi Suspension Repair Dubai",
            paragraph: "Improve ride comfort with expert suspension diagnostics and repair services."
        },
        {
            link: "/audi-electrical-repair-dubai",
            title: "Audi Electrical Repair Services",
            paragraph: "Advanced electrical diagnostics and repair solutions for all Audi models."
        },
        {
            link: "/audi-diagnostics-dubai",
            title: "Audi Computer Diagnostics Dubai",
            paragraph: "Accurate fault detection using advanced diagnostic tools for Audi vehicles."
        },
        {
            link: "/audi-maintenance-dubai",
            title: "Audi Maintenance Services Dubai",
            paragraph: "Comprehensive maintenance packages to keep your Audi running like new."
        },
        {
            link: "/audi-body-repair-dubai",
            title: "Audi Body Repair & Paint",
            paragraph: "High-quality body repair and paint services to restore your Audi's original look."
        },
        {
            link: "/audi-detailing-dubai",
            title: "Audi Car Detailing Dubai",
            paragraph: "Premium interior and exterior detailing services for a showroom finish."
        },
        {
            link: "/audi-pre-purchase-inspection-dubai",
            title: "Audi Pre-Purchase Inspection",
            paragraph: "Thorough inspection services before buying a used Audi in Dubai."
        },
        {
            link: "/audi-cooling-system-repair-dubai",
            title: "Audi Cooling System Repair",
            paragraph: "Prevent overheating with expert radiator and cooling system services."
        },
        {
            link: "/audi-fuel-system-repair-dubai",
            title: "Audi Fuel System Repair",
            paragraph: "Efficient fuel system diagnostics and repair for optimal performance."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Exhaust System Repair",
            paragraph: "Improve efficiency and reduce emissions with our exhaust repair services."
        }
    ]

    const visibleService = services.slice(0, visibleCount)

    const loadMore = () => {
        setVisibleCount((prev) => prev + 4)
    }
    const loadLess = () => {
        setVisibleCount((prev) => prev - 4)
    }

    return (
         <div className=' dark:bg-gray-950 dark:py-20  dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
             <div className='flex flex-col items-center justify-center my-20 dark:my-0 gap-y-8 w-[90%] mx-auto'>
            <div className='text-center space-y-4'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold '>
                    Best Audi Mechanic Near Me in Dubai
                </h1>
                <p className='text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, molestias veniam adipisci, voluptate laboriosam cupiditate quisquam nobis voluptates dolorem id quae facilis nam consequatur. Sequi impedit repellendus nihil mollitia nam?
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                {visibleService.map((item, index) => (
                    <div key={index} className='group border dark:border-gray-700 border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-y-4 p-6 hover:-translate-y-1 bg-white dark:bg-gray-900'>
                        <h2 className='text-xl font-bold text-orange-500 text-center group-hover:text-orange-600 transition-colors'>
                            {item.title}
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed'>
                            {item.paragraph}
                        </p>
                        <Link 
                            href={item.link} 
                            className='mt-2 py-2.5 px-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg'
                        >
                            View More →
                        </Link>
                    </div>
                ))}
            </div>

            <div className='flex items-center gap-4 justify-center mt-4'>
                {visibleCount < services.length && (
                    <button onClick={loadMore} className='py-3 px-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg'>
                        Load More
                    </button>
                )}
                {visibleCount > 8 && (
                    <button onClick={loadLess} className='py-3 px-8 rounded-lg bg-gray-600 text-white font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg'>
                        Show Less
                    </button>
                )}
            </div>
        </div>
         </div>
    )
}

export default NearMe