import React from 'react'

const Cost = () => {
    const data = [
        {
            title:"Cheap Car Battery Repair in Dubai",
            desc:"800 Motor Guru provides affordable car battery repair in Dubai with proper diagnosis and fixing of common battery issues. The service focuses on restoring battery performance without unnecessary replacement."
        },
                {
            title:"Mobile Car Battery Repair Dubai",
            desc:"800 Motor Guru offers mobile car battery repair in Dubai where technicians come to your location. The service includes on-site inspection, fault detection, and quick repair."
        },
                {
            title:"Emergency Car Battery Repair Dubai",
            desc:"800 Motor Guru provides emergency car battery repair in Dubai for sudden breakdowns. The team responds quickly and fixes battery issues on the spot."
        },
                {
            title:"24/7 Car Battery Repair Dubai",
            desc:"800 Motor Guru offers 24/7 car battery repair service in Dubai for any time battery failure. Customers can get support day and night across all locations."
        },
                {
            title:"Online Car Battery Repair Dubai",
            desc:"800 Motor Guru allows online booking for car battery repair in Dubai through call or WhatsApp. The service ensures fast technician dispatch after booking."
        },
                {
            title:"On-site Car Battery Repair Dubai",
            desc:"800 Motor Guru provides on-site car battery repair anywhere in Dubai including home, office, or roadside. The technician repairs battery issues without workshop visit."
        },

        {
            title:"Car Battery Terminal Repair Dubai",
            desc:"800 Motor Guru repairs corroded or loose battery terminals to restore proper power flow. The service improves connection and battery performance."
        },

        {
            title:"Car Battery Cable Repair Dubai",
            desc:"800 Motor Guru fixes damaged or loose battery cables affecting vehicle starting. The service ensures proper electrical connection and safe operation."
        },

        {
            title:"Car Battery Connection Repair Dubai",
            desc:"800 Motor Guru repairs weak or faulty battery connections causing power issues. The service ensures stable and reliable electrical flow."
        },

        {
            title:"Car Battery Corrosion Repair Dubai",
            desc:"800 Motor Guru removes corrosion from battery terminals and cleans connections. This improves battery life and prevents starting problems."
        },

        {
            title:"Car Battery Leakage Repair Dubai",
            desc:"800 Motor Guru handles battery leakage issues by inspecting and fixing damaged battery units. The service ensures safety and prevents further vehicle damage."
        },

    ]
  return (
    <div className=' dark:bg-gray-950 dark:py-20 dark:border-b-[1px] dark:border-b-gray-700'>
          <div className=' w-[90%] mx-auto mt-20 dark:my-0'>
      <div className=' flex justify-between gap-x-4'>
        <div className=' border-[1px] bg-[#0000000c] border-[#00000017] dark:border-gray-600 p-8 rounded-2xl w-1/2 flex flex-col gap-y-2'>
                 <h2 className=' text-3xl font-bold'>What is the cost to replace a car battery in Dubai?</h2>
       <p className=' text-gray-700 text-[16px] font-medium'>The cost to replace a car battery in Dubai usually ranges between AED 250 to AED 1,200, depending on your car type, battery size, and brand. Standard Japanese and Korean cars generally cost around AED 250–450, while SUVs range from AED 400–700, and luxury or European cars with AGM batteries can cost AED 700–1,200, including installation. Mobile and emergency battery replacement services may slightly increase the cost due to on-site assistance, but they usually include testing, installation, and old battery removal in the final price. Most providers in Dubai offer transparent pricing based on your vehicle after a quick inspection to ensure the correct battery is installed. 
</p>
        </div>
        <div className=' border-[1px] bg-[#0000000c] border-[#00000017] dark:border-gray-600 p-6 w-1/2 rounded-2xl flex flex-col gap-y-2'>
                 <h2 className=' text-3xl font-bold'>Car Battery Repair Dubai</h2>
       <p className=' text-gray-700 text-[16px] font-medium'>800 Motor Guru provides car battery repair services in Dubai for vehicles facing weak battery performance, connection issues, or power loss problems. The service includes battery inspection, voltage testing, terminal cleaning, and repair of minor electrical faults to restore proper battery function without unnecessary replacement. 800 Motor Guru is a trusted battery repair service provider in Dubai because the team uses proper diagnostic tools to identify the real issue before repair. The technicians check battery health, charging system, and wiring connections to ensure accurate fault detection and reliable repair work. The service is designed to save cost and time for customers. The team provides on-site repair, quick response, and clear diagnosis so customers avoid unnecessary battery replacement. This ensures better performance, longer battery life, and a convenient repair experience at any location in Dubai.


</p>
        </div>
      </div>
      <div className=' grid grid-cols-6 gap-3 mt-4'>
         {
            data.map((item,index) => (
                <div key={index} className=' border-[1px] border-[#00000017] dark:border-gray-600 p-4 rounded-xl flex flex-col gap-y-2' >
                   <h1 className=' text-lg font-bold'>{item.title}</h1>
                    <p className=' text-[12px] font-normal'> {item.desc}</p>
                </div>
            ))
         }
      </div>
    </div>
    </div>
  )
}

export default Cost
