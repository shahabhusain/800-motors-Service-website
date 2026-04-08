"use client"
import React, { useState } from 'react'
import Japanese from './brands/Japanese'
import Germen from './brands/Germen'
import British from './brands/British'
import French from './brands/French'
import American from './brands/American'
import Others from './brands/Others'

const Brands = () => {
    const [selectedBrands, setSelectedBrands] = useState("German")
  return (
    <div className=' bg-[#fff] md:h-[750px] h-full dark:bg-gray-950 flex flex-col gap-y-3 items-center pt-20 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
        <h2 className=' text-4xl md:text-5xl font-bold  text-center'>The Best Multi-Brand Car <span className=' text-orange-500'>Repair Shop </span> <span className=' text-orange-500'>in</span> Dubai</h2>
        <div className=' bg-[#f8f8f8] mt-12 dark:bg-gray-900 md:p-3 p-1.5 md:rounded-2xl text-sm flex items-center md:gap-x-20 mt-5'>
                   <button onClick={() => setSelectedBrands("German")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "German" ? "bg-orange-500 text-white" : ""}`}>German</button>
                          <button onClick={() => setSelectedBrands("American")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "American" ? "bg-orange-500 text-white" : ""}`}>American</button>
           <button onClick={() => setSelectedBrands("Japanese")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px]  rounded-md ${selectedBrands === "Japanese" ? "bg-orange-500 text-white" : ""}`}>Japanese</button>
    
           <button onClick={() => setSelectedBrands("British")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "British" ? "bg-orange-500 text-white" : ""}`}>British</button>
           <button onClick={() => setSelectedBrands("French")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "French" ? "bg-orange-500 text-white" : ""}`}>French</button>
    
           <button onClick={() => setSelectedBrands("Others")} className={`md:py-2 py-1 md:px-6 px-3 md:text-[16px] sm:text-[12px] text-[8px] rounded-md ${selectedBrands === "Others" ? "bg-orange-500 text-white" : ""}`}>Others</button>
        </div>
        <div className=' mt-12 md:w-[80%] w-[95%] mx-auto'>
            {
                selectedBrands === "Japanese" ? <Japanese /> : selectedBrands === "German" ? <Germen /> : selectedBrands === "British" ? <British /> : selectedBrands === "French" ? <French /> : selectedBrands === "American" ? <American /> : selectedBrands === "Others" ? <Others /> : null
            }
        </div>
    </div>
  )
}

export default Brands
