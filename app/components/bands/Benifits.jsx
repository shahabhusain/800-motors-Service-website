import React from 'react'

const Benifits = () => {
    const services = [
        {
            title:"Audi-Specific Diagnostic Expertise",
            paragraph: "800 Motor Guru uses advanced diagnostic tools designed for Audi systems like ECU, sensors, and DSG transmission. This ensures accurate fault detection and prevents repeated issues."
        },
        {
            title:"Certified Audi-Trained Technicians",
            paragraph: "The team understands Audi engineering including Quattro systems and turbo engines. This expertise allows proper handling without damaging sensitive components."
        },
        {
            title:"Fast and Efficient Service",
            paragraph: "800 Motor Guru provides quick repair solutions to reduce downtime. Audi owners benefit from faster turnaround without compromising quality."
        },
        {
            title:"Genuine and High-Quality Parts",
            paragraph: "The company uses genuine or equivalent-grade parts suitable for Audi vehicles. This improves durability, performance, and long-term reliability."
        },
        {
            title:"On-Site and Mobile Support",
            paragraph: "800 Motor Guru offers repair services at home, office, or roadside. This adds convenience and saves time for Audi owners across Dubai."
        },
        {
            title:"Transparent Pricing and No Hidden Costs",
            paragraph: "Customers receive clear pricing before service starts. This builds trust and avoids unexpected expenses during Audi repairs."
        },
        {
            title:"Complete Audi Repair Solutions",
            paragraph: "800 Motor Guru handles all major Audi services including engine, transmission, AC, suspension, and electrical systems. This makes it a one-stop solution for all Audi repair needs in Dubai."
        },
       

    ]

    return (
       <div className=' dark:bg-gray-950 dark:py-20  dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
           <div className='flex flex-col items-center justify-center my-20 dark:my-0 gap-y-8 w-[90%] mx-auto'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold '>
                    Benefits of 800 Motor Guru as your Audi Service Center in Dubai
                </h2>
                <p className='text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                  800 Motor Guru provides specialized Audi repair and maintenance services in Dubai with expert handling, advanced tools, and reliable solutions. The company focuses on accurate diagnosis, fast service, and long-term performance for Audi vehicles in Dubai conditions.
</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                {services.map((item, index) => (
                    <div key={index} className='group border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-y-4 p-6 hover:-translate-y-1 bg-white dark:bg-gray-900'>
                         <h2 className=' text-lg font-bold'>{item.title}</h2>
                        <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                            {item.paragraph}
                        </p>
                    </div>
                ))}
            </div>


        </div>
       </div>
    )
}

export default Benifits