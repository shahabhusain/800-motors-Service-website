"use client"
import React from 'react'

const BmwModels = () => {

    const bmwModels = [
        {
            modelName: "BMW 3 Series",
            model: "330i",
            modelDesc: "The ultimate sports sedan with perfect balance of performance and luxury.",
            type: "Sedan"
        },
        {
            modelName: "BMW 5 Series",
            model: "540i",
            modelDesc: "Executive sedan combining business class comfort with dynamic driving experience.",
            type: "Luxury Sedan"
        },
        {
            modelName: "BMW 7 Series",
            model: "740i",
            modelDesc: "Flagship luxury sedan with cutting-edge technology and unparalleled comfort.",
            type: "Flagship Sedan"
        },
        {
            modelName: "BMW X3",
            model: "X3 M40i",
            modelDesc: "Compact Sports Activity Vehicle with M performance DNA.",
            type: "SUV"
        },
        {
            modelName: "BMW X5",
            model: "X5 xDrive40i",
            modelDesc: "Mid-size luxury SUV combining off-road capability with refinement.",
            type: "Luxury SUV"
        },
        {
            modelName: "BMW X7",
            model: "X7 M60i",
            modelDesc: "Full-size luxury SUV with three rows and commanding presence.",
            type: "Full-size SUV"
        },
        {
            modelName: "BMW M4",
            model: "M4 Competition",
            modelDesc: "High-performance coupe with track-ready capabilities.",
            type: "Performance"
        },
        {
            modelName: "BMW i4",
            model: "i4 M50",
            modelDesc: "All-electric Gran Coupe with powerful dual motors.",
            type: "Electric"
        }
    ]

    return (
        <div className="w-full h-full bg-[#f8f8f8] pb-20 pt-10">
            <h1 className='text-4xl text-center font-bold uppercase'>
                BMW Models We Service
            </h1>

            <div className="container mx-auto w-[85%] mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {bmwModels.map((car, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        {car.type}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                                        {car.modelName}
                                    </h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-gray-500 font-medium">{car.model}</span>
                                        <div className="w-8 h-0.5 bg-orange-400"></div>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                    {car.modelDesc}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
}

export default BmwModels