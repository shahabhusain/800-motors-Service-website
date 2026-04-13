"use client"
import React, { useState } from 'react'
import Japanese from './brands/Japanese'
import Germen from './brands/Germen'
import British from './brands/British'
import French from './brands/French'
import American from './brands/American'
import Others from './brands/Others'
import AllBrands from './brands/AllBrands'

const Brands = () => {
    const [selectedBrands, setSelectedBrands] = useState("All")
  return (
    <div className=' bg-[#fff] md:h-[950px] h-full dark:bg-gray-950 flex flex-col md:gap-y-6 gap-y-2 items-center md:py-20 py-10 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
      
        <h2 className=' text-3xl md:text-5xl font-bold max-w-5xl   text-center'>800 Motor Guru: The Best
 <span className=' text-orange-500'> Multi-Brand Car Repair Shop in </span> <span className=' text-orange-500'>in</span> Dubai</h2>
  
   <p className=' md:text-[15px] text-[12px] text-black max-w-5xl text-center md:h-[70px] h-[40px] overflow-y-auto custom-scroll  '>800 Motor Guru provides multi-brand car repair services in Dubai for German, Japanese, American, British, and French vehicles for engine, electrical, and AC repair. The company uses diagnostic tools such as computerized scanners, engine analyzers, and wheel alignment machines to identify and repair vehicle systems. Many customers stated that 800 Motor Guru is the best multi-brand car repair shop in Dubai based on service results and Google reviews.</p>
        <div className=' bg-[#f8f8f8] md:mt-12 mt-5 dark:bg-gray-900 md:p-3 p-1.5 md:rounded-2xl text-sm grid grid-cols-7  md:gap-x-20 '>
             <button onClick={() => setSelectedBrands("All")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "All" ? "bg-orange-500 text-white" : ""}`}>All</button>
             <button onClick={() => setSelectedBrands("German")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "German" ? "bg-orange-500 text-white" : ""}`}>German</button>
             <button onClick={() => setSelectedBrands("American")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "American" ? "bg-orange-500 text-white" : ""}`}>American</button>
             <button onClick={() => setSelectedBrands("Japanese")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "Japanese" ? "bg-orange-500 text-white" : ""}`}>Japanese</button>
             <button onClick={() => setSelectedBrands("British")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "British" ? "bg-orange-500 text-white" : ""}`}>British</button>
             <button onClick={() => setSelectedBrands("French")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "French" ? "bg-orange-500 text-white" : ""}`}>French</button>
             <button onClick={() => setSelectedBrands("Others")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "Others" ? "bg-orange-500 text-white" : ""}`}>Others</button>
        </div>
        <div className=' mt-12 md:w-[80%] w-[95%] mx-auto'>
            {selectedBrands === "All" && <AllBrands />}
            {selectedBrands === "German" && <Germen />}
            {selectedBrands === "Japanese" && <Japanese />}
            {selectedBrands === "British" && <British />}
            {selectedBrands === "French" && <French />}
            {selectedBrands === "American" && <American />}
            {selectedBrands === "Others" && <Others />}
        </div>
    </div>
  )
}

export default Brands