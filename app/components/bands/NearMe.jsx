"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const NearMe = () => {
    const [visibleCount, setVisibleCount] = useState(8)
    const services = [
        {
            link: "/audi-mechanic-dubai",
            title: "Best Audi Mechanic Near Me in Dubai",
            paragraph: "800 Motor Guru is one of the best Audi mechanics in Dubai, providing complete repair and maintenance solutions for all Audi models. The company is a one-stop solution covering engine repair, transmission service, AC repair, diagnostics, suspension, battery, electrical, and maintenance services with expert handling and proper tools."
        },
        {
            link: "/audi-repair-dubai",
            title: "Audi Battery Replacement Dubai",
            paragraph: "Audi vehicles use advanced electrical systems and AGM batteries that require precise installation and coding. 800 Motor Guru provides accurate battery replacement with proper voltage matching and system reset to avoid warning errors. This ensures stable performance and longer battery life. Regular battery checks and avoiding long idle periods help improve Audi batt"
        },
        {
            link: "/audi-service-center-dubai",
            title: "Audi Engine Repair Dubai",
            paragraph: "Audi engines use turbocharged systems that require precise diagnostics. 800 Motor Guru identifies faults early and performs accurate repair to restore engine performance and efficiency."
        },
        {
            link: "/audi-engine-repair-dubai",
            title: "Audi Transmission Repair Dubai",
            paragraph: "Audi DSG and automatic transmissions need specialized handling. 800 Motor Guru provides proper diagnosis and repair to ensure smooth gear shifting and long transmission life."
        },
        {
            link: "/audi-ac-repair-dubai",
            title: "Audi Suspension Repair Dubai",
            paragraph: "Audi suspension systems are sensitive to road conditions. 800 Motor Guru restores comfort and stability by repairing worn components with precision."
        },
        {
            link: "/audi-brake-repair-dubai",
            title: "Audi AC Repair Dubai",
            paragraph: "Audi AC systems face heavy load in Dubai heat. 800 Motor Guru fixes cooling issues, gas leaks, and compressor faults to maintain strong cooling."
        },
        {
            link: "/audi-transmission-repair-dubai",
            title: "Audi Oil Change Dubai",
            paragraph: "Audi engines require specific oil grades. 800 Motor Guru uses recommended oils to protect engine performance and reduce wear."
        },
        {
            link: "/audi-oil-change-dubai",
            title: "Audi Brake Repair Dubai",
            paragraph: "Audi braking systems need accurate maintenance. 800 Motor Guru ensures safe stopping with proper brake inspection and repair."
        },
        {
            link: "/audi-battery-replacement-dubai",
            title: "Audi Roadside Assistance Dubai",
            paragraph: "800 Motor Guru provides quick roadside support for Audi breakdowns anywhere in Dubai with fast response."
        },
        {
            link: "/audi-tyre-service-dubai",
            title: "Audi Jump Start Dubai",
            paragraph: "Audi vehicles with weak batteries are supported with safe jump start service to restore power instantly."
        },
        {
            link: "/audi-suspension-repair-dubai",
            title: "Audi Fuel Delivery Dubai",
            paragraph: "800 Motor Guru delivers correct fuel type for Audi vehicles during emergency fuel shortage situations."
        },
        {
            link: "/audi-electrical-repair-dubai",
            title: "Audi Tyre Change Dubai",
            paragraph: "Audi tyres are replaced with correct size and specification to ensure safety and performance."
        },
        {
            link: "/audi-diagnostics-dubai",
            title: "Audi Car Diagnostic Dubai",
            paragraph: "800 Motor Guru uses advanced scanning tools to detect Audi system faults accurately."
        },
        {
            link: "/audi-maintenance-dubai",
            title: "Audi Car Electrical Repair Dubai",
            paragraph: "Audi electrical systems require expert handling. 800 Motor Guru fixes wiring and sensor issues properly."
        },
        {
            link: "/audi-body-repair-dubai",
            title: "Audi Engine Cooling Repair Dubai",
            paragraph: "Audi engines are sensitive to overheating. 800 Motor Guru repairs cooling systems to prevent damage."
        },
        {
            link: "/audi-detailing-dubai",
            title: "Audi Wheel Alignment Dubai",
            paragraph: "Proper alignment ensures Audi driving stability and tyre life. 800 Motor Guru provides precision alignment service."
        },
        {
            link: "/audi-pre-purchase-inspection-dubai",
            title: "Audi Car Key Programming Dubai",
            paragraph: "800 Motor Guru programs Audi smart keys and remote systems with proper coding tools."
        },
        {
            link: "/audi-cooling-system-repair-dubai",
            title: "Audi Windshield Repair Dubai",
            paragraph: "Minor cracks are repaired quickly to maintain Audi windshield strength."
        },
        {
            link: "/audi-fuel-system-repair-dubai",
            title: "Audi Windshield Replacement Dubai",
            paragraph: "Damaged windshields are replaced with proper fit and safety standards."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Pre Purchase Car Inspection Dubai",
            paragraph: "800 Motor Guru inspects used Audi vehicles to detect hidden issues before purchase."
        },



        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Alloy Wheel Repair Dubai",
            paragraph: "Damaged Audi alloy wheels are restored to original condition for better appearance and performance"
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Sunroof Repair Dubai",
            paragraph: "800 Motor Guru fixes Audi sunroof issues including leaks and motor faults."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Headlight Restoration Dubai",
            paragraph: "Audi headlights are restored for better visibility and safety."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Car Tuning Dubai",
            paragraph: "800 Motor Guru improves Audi performance through safe tuning and optimization."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Fleet Maintenance Service Dubai",
            paragraph: "Audi fleet vehicles are maintained regularly to ensure performance and reduce downtime."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Car Detailing Dubai",
            paragraph: "800 Motor Guru provides detailing service to maintain Audi interior and exterior condition."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Interior Repair Dubai",
            paragraph: "Audi interiors are repaired to restore comfort and premium look."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Ceramic Coating Dubai",
            paragraph: "Ceramic coating protects Audi paint from heat, dust, and scratches."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Window Tinting Dubai",
            paragraph: "Window tinting reduces heat and improves driving comfort in Dubai climate."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Car Audio System Dubai",
            paragraph: "800 Motor Guru installs and upgrades Audi audio systems for better sound experience."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Pre Purchase Car Inspection Dubai",
            paragraph: "800 Motor Guru inspects used Audi vehicles to detect hidden issues before purchase."
        },
        {
            link: "/audi-exhaust-repair-dubai",
            title: "Audi Pre Purchase Car Inspection Dubai",
            paragraph: "800 Motor Guru inspects used Audi vehicles to detect hidden issues before purchase."
        },
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
                   Get Your Audi Auto Repair Services in Dubai
                </h1>
                <p className='text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                    Audi vehicles in Dubai face issues like overheating, AC performance drop, DSG transmission stress, and electrical faults due to heat and traffic. 800 Motor Guru diagnoses these issues using advanced tools and trained technicians with Audi-specific expertise. The team provides accurate solutions with fast service, making 8MG a reliable and expert choice for Audi repair in Dubai.

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