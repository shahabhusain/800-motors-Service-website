"use client"
import React, { useState } from 'react'
import PakageV4 from './packages/PakageV4'
import PackageV6 from './packages/PackageV6'
import PackageV8 from './packages/PackageV8'
import PackageV12 from './packages/PackageV12'

const ServicePackage = () => {
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
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
                "3 Minor Services","2 Major Services", "2 No Time Limit", "15% Off Spare Parts", "15% Off Spare Parts", "Havoline Caltex Oil"
            ]
        },
    ]
  return (
    <div className='p flex flex-col items-center justify-center leading-[2rem] text-center md:text-left leading-tight bg-white dark:bg-gray-950 py-12'>
    <h1 className='text-4xl md:text-5xl font-bold mb-6'><span className=' text-orange-500'>Select</span> Packages</h1>
    <p className=' text-[#00000099] dark:text-gray-300 md:text-[16px] text-[14px] font-normal'>Choose the plan that fits your needs · flexible engine options</p>
      <div className=' flex items-center gap-x-12 bg-[#f8f8f8] dark:bg-gray-900  p-2  rounded-xl mt-5'>
        <button onClick={()=>setSelectService("v4")} className={ ` font-medium${selectService === "v4" ? " bg-orange-500 text-white" : ""}  md:py-2 py-1  md:px-4 px-2 md:text-[16px] text-[10px] md:rounded-xl rounded-sm`}>V4</button>
        <button onClick={()=>setSelectService("v6")} className={ ` font-medium${selectService === "v6" ? " bg-orange-500 text-white" : ""}  md:py-2 py-1  md:px-4 px-2 md:text-[16px] text-[10px] md:rounded-xl rounded-sm`}>V6</button>
        <button onClick={()=>setSelectService("v8")} className={ ` font-medium${selectService === "v8" ? " bg-orange-500 text-white" : ""}  md:py-2 py-1  md:px-4 px-2 md:text-[16px] text-[10px] md:rounded-xl rounded-sm`}>V8</button>
        <button onClick={()=>setSelectService("v12")} className={`font-medium ${selectService === "v12" ? " bg-orange-500 text-white" : ""} md:py-2 py-1 md:px-4 px-2 md:text-[16px] text-[10px] md:rounded-xl rounded-sm`}>V12</button>
      </div>
      <div className=' my-12 md:w-[65%] w-[95%] mx-auto '>
         {selectService === "v4" ? <PakageV4 data={v4Packages} /> : selectService === "v6" ? <PackageV6 data={v6Packages} /> : selectService === "v8" ? <PackageV8 data={v8Packages} /> : selectService === "v12" ? <PackageV12 data={v12Packages} /> : null}
      </div>
    </div>
  )
}

export default ServicePackage
