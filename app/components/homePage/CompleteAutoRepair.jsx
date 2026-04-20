"use client";
import React, { useState } from 'react';
import { FaCar, FaTools, FaOilCan, FaSnowflake, FaTachometerAlt, FaWrench, FaCogs, FaThermometerHalf, FaFan, FaMicrochip, FaSpinner, FaBatteryFull } from 'react-icons/fa';

const CompleteAutoRepair = () => {
    const [visibleItems, setVisibleItems] = useState(4);
    const [isLoading, setIsLoading] = useState(false);

    const allData = [
        {
            icon: <FaCar className="text-2xl" />,
            title: "Car Battery Replacement Dubai",
            desc: "800 Motor Guru provides car battery replacement service in Dubai. The service includes battery voltage testing, a condition check, removal of the old battery, and installation of a new compatible battery. The team selects the correct battery based on the vehicle model and power requirement. Customers face battery failure, slow engine start, and sudden breakdown on the road. Many vehicles do not start due to weak battery performance in high-temperature conditions. 800 Motor Guru tests battery health by using a digital battery tester and multimeter to check voltage and condition, then replaces it with the correct battery. The team reaches the customer's location, installs the battery safely, and restores vehicle start without delay. Customers can request support through the Car Battery Replacement Dubai service page.",
        },
        {
            icon: <FaTools className="text-2xl" />,
            title: "Car Tyre Change Dubai",
            desc: "800 Motor Guru provides car tyre change service in Dubai. The service includes tyre inspection, removal of worn tyres, installation of new tyres, wheel balancing, and an alignment check. The team selects the correct tyre size based on vehicle type and road use. Customers experience tyre wear, punctures, low grip, and vehicle vibration while driving. Many vehicles lose stability due to damaged or uneven tyres, which affects safety on the road. 800 Motor Guru solves these problems by inspecting tyre condition, replacing damaged tyres, and balancing the wheels with alignment machines. The team ensures proper grip, smooth driving, and vehicle stability after service. Customers can request support through the Car Tire Change Dubai service page.",
        },
        {
            icon: <FaOilCan className="text-2xl" />,
            title: "Jump Start Dubai",
            desc: "800 Motor Guru provides jump-start service in Dubai. The team checks the car's battery and connection for a safe jump start and vehicle restart at the customer's location. The team uses jump cables and portable jump starter devices to restore power. Customers experience a dead battery, no engine start, and vehicle breakdown in parking areas or on the road. Many drivers cannot start the car due to a low battery charge or electrical power loss. 800 Motor Guru solves these problems by connecting jump cables correctly and using a portable jump starter to restart the vehicle safely. The team reaches the location quickly and restores engine start without delay. Customers can request support through the Jump Start Dubai service page.",
        },
        {
            icon: <FaBatteryFull className="text-2xl" />,
            title: "Dubai Fuel Delivery: Petrol and Diesel",
            desc: "800 Motor Guru provides fuel delivery service in Dubai for petrol and diesel vehicles. The company refills fuel on location, checks fuel quality, and handles it safely during delivery. The team carries fuel in certified containers to ensure fuel safety. Many drivers face inconvenience when nearby fuel stations are out of reach. 800 Motor Guru solves these problems by delivering fuel quickly to the customer's location. The team refills petrol or diesel safely and gets the vehicle back on the road without delay. Customers can request support through the Dubai Fuel Delivery Petrol & Diesel service page.",
        },
        {
            icon: <FaSnowflake className="text-2xl" />,
            title: "Car Engine Repair Dubai",
            desc: "800 Motor Guru provides car engine repair service in Dubai. The service includes engine diagnostics, fault detection, minor and major engine repairs, and replacement of damaged parts. The team uses modern engine analyzers and specialized tools to ensure proper repair. Customers experience engine misfiring, overheating, loss of power, or unusual noises while driving. Many drivers face repeated breakdowns due to improper diagnosis at other workshops. 800 Motor Guru solves these problems by inspecting the engine with diagnostic tools, identifying the exact fault, and repairing or replacing the faulty parts. The team ensures engine performance, reliability, and longer vehicle life. Customers can request support through the Car Engine Repair Dubai service page.",
        },
        {
            icon: <FaTachometerAlt className="text-2xl" />,
            title: "Car Oil Change Dubai",
            desc: "800 Motor Guru provides car oil change service in Dubai. The service includes draining old oil, replacing the oil filter, refilling high-quality engine oil, and inspecting the engine for any early issues. Customers experience engine wear, reduced fuel efficiency, and overheating due to delayed or poor-quality oil changes. Many drivers face costly engine repairs when oil maintenance is neglected. 800 Motor Guru solves these problems by changing the oil on time, using premium oil, and checking engine health during service. The team ensures smooth engine operation, better mileage, and longer engine life. Customers can request support through the Car Oil Change Dubai service page.",
        },
    ];

    const visibleData = allData.slice(0, visibleItems);
    const hasMore = visibleItems < allData.length;

    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleItems(prev => Math.min(prev + 4, allData.length));
            setIsLoading(false);
        }, 500);
    };

    const loadLess = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleItems(4);
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className='dark:bg-gray-950 bg-[#f8f8f8] md:py-20 py-10 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
            <div className='w-[90%] mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl max-w-5xl mx-auto text-center dark:text-white font-bold mb-4 text-gray-800'>
                        800 Motor Guru Complete Auto Repair Solutions in <span className='text-orange-500'>Dubai</span>
                    </h2>
                    <p className='text-gray-600 h-[80px] overflow-y-scroll custom-scroll dark:text-gray-300 text-base max-w-4xl mx-auto leading-relaxed'>
                        800 Motor Guru delivers complete auto repair solutions in Dubai for passenger cars, commercial vehicles, and SUVs. The company provides roadside support and workshop repair through services such as battery replacement, fuel delivery, jump start, engine diagnostics, AC repair, tyre service, and body work. 800 Motor Guru follows a clear process that includes fault check, problem confirmation, and repair execution for each vehicle. Many customers state that 800 Motor Guru is the best car garage in Dubai based on consistent service results and verified Google, Facebook, and website reviews. 800 Motor Guru, with 13 years of experience, supports customers with fast response times across Dubai. The company uses diagnostic scanners, alignment machines, and engine testing tools to identify issues before repair. The team provides price details before work and assigns the right technician for each vehicle service. Battery service means replacement of weak or failed batteries after voltage testing. Tyre service means replacement, balancing, and alignment to maintain road grip and stability. Engine diagnostics means fault detection through computerised scanning tools. AC service means cooling system check, gas refill, and component repair. Roadside assistance means on-location support for breakdown cases such as battery failure or fuel shortage.
                    </p>
                </div>
                
                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
                    {visibleData.map((item, index) => (
                        <div 
                            key={index} 
                            className='bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 relative pt-12 group'
                        >
                            {/* Icon */}
                            <div className='absolute -top-6 left-1/2 transform -translate-x-1/2'>
                                <div className='w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300'>
                                    <div className='text-orange-500 dark:text-orange-400'>
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                            
                            <div className='p-5 pt-4'>
                                <h3 className='text-lg dark:text-white font-bold mb-3 text-gray-800 text-center line-clamp-2 min-h-[56px]'>
                                    {item.title}
                                </h3>
                                
                                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4 mb-4'>
                                    {item.desc}
                                </p>
                                
                                <button className='w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm'>
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Load More / Load Less Buttons */}
                <div className='mt-12 text-center'>
                    {hasMore ? (
                        <button
                            onClick={loadMore}
                            disabled={isLoading}
                            className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2'
                        >
                            {isLoading ? (
                                <>
                                    <FaSpinner className="animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                'Load More'
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={loadLess}
                            disabled={isLoading}
                            className='bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2'
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompleteAutoRepair;