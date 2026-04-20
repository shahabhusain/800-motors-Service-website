"use client"
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Japanese from './brands/Japanese'
import Germen from './brands/Germen'
import British from './brands/British'
import French from './brands/French'
import American from './brands/American'
import Others from './brands/Others'
import AllBrands from './brands/AllBrands'

const Brands = ({desc="800 Motor Guru provides multi-brand car repair services in Dubai for German, Japanese, American, British, and French vehicles for engine, electrical, and AC repair. The company uses diagnostic tools such as computerized scanners, engine analyzers, and wheel alignment machines to identify and repair vehicle systems. Many customers stated that 800 Motor Guru is the best multi-brand car repair shop in Dubai based on service results and Google reviews.", span="800 Motor Guru The Best", span1="Multi-Brand Car Repair Shop in Dubai"}) => {
    const [selectedBrands, setSelectedBrands] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className='bg-[#fff] md:min-h-[950px] h-full dark:bg-gray-950 flex flex-col md:gap-y-6 gap-y-2 items-center md:py-20 py-10 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
            
            <h2 className='text-3xl md:text-5xl font-bold max-w-5xl text-center'>
                {span}
                <span className='text-orange-500'> {span1}</span>
            </h2>
            
            <p className='md:text-[15px] text-[12px] text-gray-600 dark:text-gray-300 max-w-5xl text-center md:h-auto h-[60px] md:overflow-x-hidden overflow-x-scroll custom-scroll leading-relaxed'>
                {desc}
            </p>
            
            {/* Search Bar
            <div className='w-full max-w-md mx-auto mt-4 px-4'>
                <div className='relative'>
                    <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm' />
                    <input
                        type="text"
                        placeholder="Search car brands..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm'
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div> */}
            
            {/* Filter Buttons */}
            <div className='bg-[#f8f8f8] dark:bg-gray-900 md:mt-6 mt-5 md:p-3 p-1.5 md:rounded-2xl rounded-xl text-sm flex flex-wrap justify-center gap-2 md:gap-x-20'>
                <button 
                    onClick={() => setSelectedBrands("All")} 
                    className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] text-[10px] rounded-md transition-all duration-300 ${
                        selectedBrands === "All" 
                            ? "bg-orange-500 text-white shadow-md" 
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                >
                    All
                </button>
                <button 
                    onClick={() => setSelectedBrands("German")} 
                    className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] text-[10px] rounded-md transition-all duration-300 ${
                        selectedBrands === "German" 
                            ? "bg-orange-500 text-white shadow-md" 
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                >
                    German
                </button>
                <button 
                    onClick={() => setSelectedBrands("American")} 
                    className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] text-[10px] rounded-md transition-all duration-300 ${
                        selectedBrands === "American" 
                            ? "bg-orange-500 text-white shadow-md" 
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                >
                    American
                </button>
                <button 
                    onClick={() => setSelectedBrands("Japanese")} 
                    className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] text-[10px] rounded-md transition-all duration-300 ${
                        selectedBrands === "Japanese" 
                            ? "bg-orange-500 text-white shadow-md" 
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                >
                    Japanese
                </button>
                <button 
                    onClick={() => setSelectedBrands("British")} 
                    className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] text-[10px] rounded-md transition-all duration-300 ${
                        selectedBrands === "British" 
                            ? "bg-orange-500 text-white shadow-md" 
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                >
                    British
                </button>
                <button 
                    onClick={() => setSelectedBrands("French")} 
                    className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] text-[10px] rounded-md transition-all duration-300 ${
                        selectedBrands === "French" 
                            ? "bg-orange-500 text-white shadow-md" 
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                >
                    French
                </button>
                <button 
                    onClick={() => setSelectedBrands("Others")} 
                    className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] text-[10px] rounded-md transition-all duration-300 ${
                        selectedBrands === "Others" 
                            ? "bg-orange-500 text-white shadow-md" 
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                >
                    Others
                </button>
            </div>
            
            {/* Content */}
            <div className='mt-8 md:w-[80%] w-[95%] mx-auto'>
                {searchTerm ? (
                    // Search results would go here - you can implement filtering based on your brand components
                    <div className='text-center py-8'>
                        <p className='text-gray-600 dark:text-gray-400'>
                            Showing results for: <span className='font-semibold text-orange-500'>"{searchTerm}"</span>
                        </p>
                        <p className='text-sm text-gray-500 dark:text-gray-500 mt-2'>
                            Filter brands using the buttons above
                        </p>
                    </div>
                ) : (
                    <>
                        {selectedBrands === "All" && <AllBrands />}
                        {selectedBrands === "German" && <Germen />}
                        {selectedBrands === "Japanese" && <Japanese />}
                        {selectedBrands === "British" && <British />}
                        {selectedBrands === "French" && <French />}
                        {selectedBrands === "American" && <American />}
                        {selectedBrands === "Others" && <Others />}
                    </>
                )}
            </div>
        </div>
    )
}

export default Brands