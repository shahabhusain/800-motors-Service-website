"use client"
import React, { useState } from 'react'
import { FaCity } from 'react-icons/fa';

const ServiceAreas = () => {
      const [activeCity, setActiveCity] = useState('dubai');
      // Dubai Service Areas
  const dubaiServiceAreas = [
    { id: 1, area: "Downtown Dubai", zone: "Burj Khalifa Area", icon: FaCity },
    { id: 2, area: "Dubai Marina", zone: "Jumeirah Beach Residence", icon: FaCity },
    { id: 3, area: "Jumeirah", zone: "Umm Suqeim", icon: FaCity },
    { id: 4, area: "Deira", zone: "Al Rigga", icon: FaCity },
    { id: 5, area: "Al Barsha", zone: "Mall of the Emirates", icon: FaCity },
    { id: 6, area: "Business Bay", zone: "Al Abraj Street", icon: FaCity },
    { id: 7, area: "Al Quoz", zone: "Industrial Area", icon: FaCity },
    { id: 8, area: "Rashidiya", zone: "Al Rashidiya", icon: FaCity },
    { id: 9, area: "Mirdif", zone: "Uptown Mirdif", icon: FaCity },
    { id: 10, area: "Jebel Ali", zone: "Jebel Ali Industrial", icon: FaCity },
    { id: 11, area: "Al Nahda", zone: "Al Nahda Street", icon: FaCity },
    { id: 12, area: "Silicon Oasis", zone: "Dubai Silicon Oasis", icon: FaCity },
    { id: 13, area: "Al Warqa", zone: "Al Warqa Street", icon: FaCity },
    { id: 14, area: "International City", zone: "England Cluster", icon: FaCity },
    { id: 15, area: "Al Safa", zone: "Al Wasl Road", icon: FaCity },
  ];

  // Abu Dhabi Service Areas
  const abuDhabiServiceAreas = [
    { id: 1, area: "Abu Dhabi City", zone: "Corniche Area", icon: FaCity },
    { id: 2, area: "Al Reem Island", zone: "Shams Abu Dhabi", icon: FaCity },
    { id: 3, area: "Al Raha Beach", zone: "Al Raha Gardens", icon: FaCity },
    { id: 4, area: "Khalifa City", zone: "Khalifa City A", icon: FaCity },
    { id: 5, area: "Al Shahama", zone: "Shahama City", icon: FaCity },
    { id: 6, area: "Mohammed Bin Zayed City", zone: "MBZ City", icon: FaCity },
    { id: 7, area: "Yas Island", zone: "Yas Marina", icon: FaCity },
    { id: 8, area: "Saadiyat Island", zone: "Saadiyat Beach", icon: FaCity },
    { id: 9, area: "Al Ain", zone: "Al Jimi", icon: FaCity },
    { id: 10, area: "Musaffah", zone: "Musaffah Industrial Area", icon: FaCity },
    { id: 11, area: "Al Samha", zone: "Al Samha City", icon: FaCity },
    { id: 12, area: "Baniyas", zone: "Baniyas East", icon: FaCity },
    { id: 13, area: "Al Wathba", zone: "Al Wathba South", icon: FaCity },
    { id: 14, area: "Al Bahia", zone: "Al Bahia City", icon: FaCity },
    { id: 15, area: "Al Falah", zone: "Al Falah City", icon: FaCity },
  ];
  return (
    <div>
         {/* Filtered Service Areas Section with Buttons */}
      <div className=" w-[85%] my-20 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4">
            Our Service <span className="text-orange-600">Areas</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Professional car battery and tyre services across Dubai and Abu Dhabi
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveCity('dubai')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCity === 'dubai'
                  ? 'bg-orange-600  text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-950 dark:text-white text-gray-700 hover:bg-gray-300'
              }`}
            >
              Dubai Areas
            </button>
            <button
              onClick={() => setActiveCity('abudhabi')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCity === 'abudhabi'
                  ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-950 dark:text-white text-gray-700 hover:bg-gray-300'
              }`}
            >
              Abu Dhabi Areas
            </button>
          </div>
        </div>

        {/* Dubai Areas */}
        {activeCity === 'dubai' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dubaiServiceAreas.map((area) => (
              <div key={area.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-3">
                  <area.icon className="w-6 h-6 text-orange-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{area.area}</h3>
                    <p className="text-sm text-gray-500">{area.zone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Abu Dhabi Areas */}
        {activeCity === 'abudhabi' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {abuDhabiServiceAreas.map((area) => (
              <div key={area.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-3">
                  <area.icon className="w-6 h-6 text-orange-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{area.area}</h3>
                    <p className="text-sm text-gray-500">{area.zone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default ServiceAreas
