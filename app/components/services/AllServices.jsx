import React from "react";
import {
  FaCarBattery,
  FaTools,
  FaOilCan,
  FaCarCrash,
  FaTachometerAlt,
  FaSnowflake,
  FaCarSide,
  FaWrench,
  FaArrowRight,
} from "react-icons/fa";

const AllServices = () => {
  const services = [
    {
      id: 1,
      icon: FaCarBattery,
      title: "Battery Replacement",
      description: "Quick and reliable car battery replacement service at your location.",
      url: "/services/battery-replacement",
    },
    {
      id: 2,
      icon: FaTools,
      title: "General Car Service",
      description: "Complete car inspection and maintenance to keep your vehicle running smoothly.",
      url: "/services/general-service",
    },
    {
      id: 3,
      icon: FaOilCan,
      title: "Oil Change",
      description: "High-quality engine oil replacement to improve performance and engine life.",
      url: "/services/oil-change",
    },
    {
      id: 4,
      icon: FaCarCrash,
      title: "Emergency Car Repair",
      description: "Professional repair services to restore your car after an accident.",
      url: "/services/accident-repair",
    },
    {
      id: 5,
      icon: FaTachometerAlt,
      title: "Engine Diagnostics",
      description: "Advanced diagnostics to identify and fix engine issues quickly.",
      url: "/services/engine-diagnostics",
    },
    {
      id: 6,
      icon: FaSnowflake,
      title: "AC Repair",
      description: "Car AC repair and gas refill for a comfortable driving experience.",
      url: "/services/ac-repair",
    },
    {
      id: 7,
      icon: FaCarSide,
      title: "Car Detailing",
      description: "Interior and exterior detailing to make your car look brand new.",
      url: "/services/car-detailing",
    },
    {
      id: 8,
      icon: FaWrench,
      title: "Mechanical Repair",
      description: "Expert mechanical repairs for all types of vehicle issues.",
      url: "/services/mechanical-repair",
    },
  ];

  return (
   <div className="">
       <div className="w-[85%] max-w-7xl mx-auto py-12 mb-12">
      {/* Simple Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800 dark:text-white">
          Our <span className="text-orange-600">Services</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto dark:text-gray-100">
          Professional car care services tailored to keep your vehicle in perfect condition
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-300 dark:border-gray-700 p-6 flex flex-col"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-orange-500 p-3 mb-4">
                <Icon className="w-full h-full text-white" />
              </div>

              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm">
                {service.description}
              </p>
              <a
                href={service.url}
                className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                View Details <FaArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
   </div>
  );
};

export default AllServices;