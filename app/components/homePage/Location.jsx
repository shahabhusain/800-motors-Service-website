"use client"
import React, { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";

const Location = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    
    const locations = [
        // Dubai Locations
        { name: "Downtown Dubai", city: "dubai" },
        { name: "Dubai Marina", city: "dubai" },
        { name: "Jumeirah Beach Residence (JBR)", city: "dubai" },
        { name: "Business Bay", city: "dubai" },
        { name: "Dubai Hills", city: "dubai" },
        { name: "Emirates Hills", city: "dubai" },
        { name: "Palm Jumeirah", city: "dubai" },
        { name: "Jumeirah Lake Towers (JLT)", city: "dubai" },
        { name: "Al Barsha", city: "dubai" },
        { name: "Mirdif", city: "dubai" },
        { name: "Deira", city: "dubai" },
        { name: "Bur Dubai", city: "dubai" },
        { name: "Al Quoz", city: "dubai" },
        { name: "Dubai Silicon Oasis", city: "dubai" },
        { name: "International City", city: "dubai" },
        { name: "Jumeirah", city: "dubai" },
        { name: "Umm Suqeim", city: "dubai" },
        { name: "Al Nahda", city: "dubai" },
        { name: "Karama", city: "dubai" },
        { name: "Oud Metha", city: "dubai" },
        { name: "Al Rashidiya", city: "dubai" },
        { name: "Mankhool", city: "dubai" },
        { name: "Al Safa", city: "dubai" },
        { name: "Al Wasl", city: "dubai" },
        { name: "Discovery Gardens", city: "dubai" },
        
        // Abu Dhabi Locations
        { name: "Downtown Abu Dhabi", city: "abudhabi" },
        { name: "Yas Island", city: "abudhabi" },
        { name: "Saadiyat Island", city: "abudhabi" },
        { name: "Khalifa City", city: "abudhabi" },
        { name: "Al Reem Island", city: "abudhabi" },
        { name: "Al Maryah Island", city: "abudhabi" },
        { name: "Corniche Area", city: "abudhabi" },
        { name: "Al Khalidiyah", city: "abudhabi" },
        { name: "Al Bateen", city: "abudhabi" },
        { name: "Mussafah", city: "abudhabi" },
        { name: "Mohamed Bin Zayed City", city: "abudhabi" },
        { name: "Al Raha Beach", city: "abudhabi" },
        { name: "Al Shahama", city: "abudhabi" },
        { name: "Al Samha", city: "abudhabi" },
        
        // Sharjah Locations
        { name: "Al Nahda Sharjah", city: "sharjah" },
        { name: "Al Qasimia", city: "sharjah" },
        { name: "Al Majaz", city: "sharjah" },
        { name: "Al Khan", city: "sharjah" },
        { name: "University City", city: "sharjah" },
        { name: "Muwaileh", city: "sharjah" },
        { name: "Al Rolla", city: "sharjah" },
        { name: "Al Butina", city: "sharjah" },
        { name: "Al Sharq", city: "sharjah" },
        { name: "Al Ghuwair", city: "sharjah" },
        { name: "Al Mahatta", city: "sharjah" },
        { name: "Al Yarmook", city: "sharjah" },
        
        // Ajman Locations
        { name: "Al Jurf", city: "ajman" },
        { name: "Al Nuaimiya", city: "ajman" },
        { name: "Al Rashidiya", city: "ajman" },
        { name: "Emirates City", city: "ajman" },
        { name: "Ajman Downtown", city: "ajman" },
        { name: "Al Hamidiyah", city: "ajman" },
        { name: "Al Mowaihat", city: "ajman" },
        { name: "Al Zahra", city: "ajman" },
        { name: "Ajman Corniche", city: "ajman" }
    ];

    const filters = [
        { id: "all", name: "All Locations", color: "bg-gray-600" },
        { id: "dubai", name: "Dubai", color: "bg-red-600" },
        { id: "abudhabi", name: "Abu Dhabi", color: "bg-green-600" },
        { id: "sharjah", name: "Sharjah", color: "bg-blue-600" },
        { id: "ajman", name: "Ajman", color: "bg-purple-600" }
    ];

    const filteredLocations = activeFilter === "all" 
        ? locations 
        : locations.filter(location => location.city === activeFilter);

    return (
        <section className="w-full py-16 bg-[#f8f8f8] dark:bg-gray-950 dark:border-b-[#f8f8f82e] dark:border-b-[1px]">
            <div className="w-[90%] mx-auto flex flex-col gap-y-3 items-center justify-center">
                {/* Heading */}
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
                    Auto Repairs Across All Major UAE Areas
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl">
                    We provide professional auto repair services across Dubai, Abu Dhabi, Sharjah, and Ajman. 
                    Select your emirate to see available locations.
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 dark:bg-gray-900 bg-[#f8f8f8] px-4 py-3 rounded-md">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === filter.id
                                    ? ` bg-orange-500 text-white shadow-lg`
                                    : ""
                            }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
                    {filteredLocations.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-x-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-orange-50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                            <span className="text-orange-500 group-hover:text-orange-600">
                                <FaLocationPin />
                            </span>
                            <span className="text-gray-700 dark:text-white font-medium text-sm group-hover:text-gray-900">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>

 
            </div>
        </section>
    );
};

export default Location;