"use client"
import React, { useState } from 'react'
import PakageV4 from './packages/PakageV4'
import PackageV6 from './packages/PackageV6'
import PackageV8 from './packages/PackageV8'
import PackageV12 from './packages/PackageV12'

const ServicePackage = ({desc="800 Motor Guru provides flexible car service packages in Dubai for different vehicle needs. The company offers Silver, Gold, and Platinum maintenance plans with options based on engine type, such as V4, V6, V8, and V12. These packages include minor and major services, oil replacement, inspection, and spare parts discounts to reduce long-term repair costs. The packages help customers manage maintenance with fixed pricing and scheduled service support.", span="800 Motor Guru Flexible", span1="Car Workshop Packages in Dubai"}) => {
    const [selectService, setSelectService] = useState("v4")
    const v4Packages = [
        {
            title:"Silver",
            desc:"Routine Maintenance",
            price:"1775",
            kilo:"50,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 444"
            },
            services:[
                "3 Minor Services","2 Major Services", "No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },

        {
            title:"Gold",
            desc:"Routine Maintenance",
            price:"3,150",
            kilo:"100,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 788"
            },
            services:[
                "3 Minor Services","2 Major Services", " No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },

        {
            title:"Platinum",
            desc:"Routine Maintenance",
            price:"4950",
            kilo:"70,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:"1230"
            },
            services:[
                "3 Minor Services","2 Major Services", "No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },
    ]

        const v6Packages = [
        {
            title:"Silver",
            desc:"Routine Maintenance",
            price:"3,060",
            kilo:"50,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 765"
            },
            services:[
                "3 Minor Services","2 Major Services", "No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },

        {
            title:"Gold",
            desc:"Routine Maintenance",
            price:"4,720",
            kilo:"50,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 1180"
            },
            services:[
                "3 Minor Services","2 Major Services", "No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },

        {
            title:"Platinum",
            desc:"Routine Maintenance",
            price:"5,890",
            kilo:"50,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 1473"
            },
            services:[
                "3 Minor Services","2 Major Services", "No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },
    ]



        const v8Packages = [
        {
            title:"Silver",
            desc:"Routine Maintenance",
            price:"3,410",
            kilo:"50,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 853"
            },
            services:[
                "3 Minor Services","2 Major Services", " No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },

        {
            title:"Gold",
            desc:"Routine Maintenance",
            price:"4,980",
            kilo:"50,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 1,245"
            },
            services:[
                "3 Minor Services","2 Major Services", " No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },

        
        {
            title:"Platinum",
            desc:"Routine Maintenance",
            price:"6,570",
            kilo:"50,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 1,643"
            },
            services:[
                "3 Minor Services","2 Major Services", "No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },

    
    ]



        const v12Packages = [
        {
            title:"Silver",
            desc:"Routine Maintenance",
            price:"---",
            kilo:"---",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:"---"
            },
            services:[
                "3 Minor Services","2 Major Services", "No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ],
            button:"Not Available"
        },

        {
            title:"Gold",
            desc:"Routine Maintenance",
            price:"---",
            kilo:"---",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:"---"
            },
            services:[
                "3 Minor Services","2 Major Services", "No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ],
            button:"Not Available"
        },

        {
            title:"Platinum",
            desc:"Routine Maintenance",
            price:"13,650",
            kilo:"70,000 KM PLAN",
            paymentBy:{
                name:"TABBY",
                time:"4 months",
                price:" 3,413"
            },
            services:[
                "3 Minor Services","2 Major Services", " No Time Limit", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },
    ]
  return (
    <div className='flex flex-col items-center justify-center bg-[#f8f8f8] dark:border-b-[#f8f8f82e] dark:border-b-[1px] to-white dark:bg-gray-950 py-16 md:py-24 px-4'>
      <div className='max-w-6xl mx-auto w-full'>
        <h2 className='text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
          {span} 
          <span className='bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'> {span1}</span>
        </h2>
        
        <p className='text-sm md:text-base md:h-auto h-[60px] md:overflow-x-hidden overflow-x-scroll custom-scroll text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-center mb-12 leading-relaxed'>
          {desc}
        </p>
        
        <div className='flex justify-center mb-16'>
          <div className='flex items-center gap-x-2 md:gap-x-3 bg-white dark:bg-gray-900/50 p-2 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm'>
            {["v4", "v6", "v8", "v12"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectService(type)}
                className={`font-bold transition-all duration-300 md:py-3 py-2 md:px-8 px-5 md:text-base text-sm rounded-xl ${
                  selectService === type 
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105" 
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800/50"
                }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <div className='w-full'>
          {selectService === "v4" ? <PakageV4 data={v4Packages} /> : selectService === "v6" ? <PackageV6 data={v6Packages} /> : selectService === "v8" ? <PackageV8 data={v8Packages} /> : selectService === "v12" ? <PackageV12 data={v12Packages} /> : null}
        </div>
      </div>
    </div>
  )
}

export default ServicePackage