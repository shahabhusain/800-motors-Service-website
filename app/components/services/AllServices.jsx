import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";

const AllServices = ({services, button, span, span1, desc}) => {


  return (
   <div className="">
       <div className="w-[85%] mx-auto py-12 mb-12">
      {/* Simple Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800 dark:text-white">
          {span} <span className="text-orange-600">{span1}</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto dark:text-gray-100">
          {desc}
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
              {button ? <>  {button} <FaArrowRight className="ml-2 w-4 h-4" /></> : null}
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