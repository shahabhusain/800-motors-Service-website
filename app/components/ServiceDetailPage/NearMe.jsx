import React from 'react'

const NearMe = () => {
    const data = [
        {
            title:"Cheap Car Battery Replacement in Dubai",
            desc:"800 Motor Guru provides affordable car battery replacement in Dubai without compromising quality. The service includes proper battery testing, correct selection, and safe installation at a fair price for all car brands."
        },
                {
            title:"Mobile Car Battery Replacement Dubai",
            desc:"800 Motor Guru offers mobile car battery replacement in Dubai where technicians come directly to your location. The service includes on-site inspection, replacement, and installation without visiting a workshop."
        },
                {
            title:"Emergency Car Battery Replacement Dubai",
            desc:"800 Motor Guru provides emergency car battery replacement in Dubai for sudden breakdown situations. The team responds quickly, reaches your location, and replaces the battery to get your vehicle moving again."
        },
                {
            title:"24/7 Car Battery Replacement Dubai",
            desc:"800 Motor Guru offers 24/7 car battery replacement service in Dubai for any time breakdown. The service is available day and night to ensure immediate help during battery failure."
        },
                {
            title:"Online Battery Replacement Dubai",
            desc:"800 Motor Guru allows customers to book car battery replacement online in Dubai through call or WhatsApp. The service ensures quick confirmation and fast technician dispatch to your location."
        },
                {
            title:"On-site Car Battery Replacement Dubai",
            desc:"800 Motor Guru provides on-site car battery replacement anywhere in Dubai including home, office, or roadside. The technician arrives with tools and installs the correct battery on the spot for quick service completion."
        },
    ]
  return (
   <div className='dark:bg-gray-950 dark:py-20 dark:border-b-[1px] dark:border-b-gray-700'>
       <div className=' w-[90%] mx-auto'>
      <div className=' flex justify-between gap-x-4'>
        <div className=' border-[1px] bg-[#0000000c] border-[#00000017] p-8 rounded-2xl w-1/2 flex flex-col gap-y-2'>
                 <h2 className=' text-3xl font-bold'>Best Car Battery Services Near Me in Dubai</h2>
       <p className=' text-gray-700 text-[16px] font-medium'>800 Motor Guru provides car battery service at home in Dubai with complete on-site support for all vehicle types. The company offers battery replacement, battery repair, and battery installation at your location without the need to visit a workshop. Customers can get service at home, office, parking area, or even on the road during a breakdown. The technician arrives with the required tools and correct battery type, performs battery testing, identifies the issue, and completes the service on-site. This saves time, avoids towing, and ensures quick vehicle recovery. 800 Motor Guru makes battery service easy, fast, and convenient anywhere in Dubai.
</p>
        </div>
        <div className=' border-[1px] bg-[#0000000c] border-[#00000017] p-6 w-1/2 rounded-2xl flex flex-col gap-y-2'>
                 <h2 className=' text-3xl font-bold'>Car Battery Replacement Dubai</h2>
       <p className=' text-gray-700 text-[16px] font-medium'>800 Motor Guru provides car battery replacement in Dubai with fast and reliable on-site service for all car brands. The service includes battery testing, correct battery selection, safe removal of the old battery, and proper installation to ensure smooth vehicle start and performance. 800 Motor Guru is a trusted battery service provider in Dubai because the company offers quick response, certified technicians, and accurate battery diagnosis before replacement. The team ensures the right battery type is installed based on vehicle requirements, which improves battery life and avoids repeat issues. The service is designed for customer convenience and satisfaction. The team reaches your location, completes the job within 20–25 minutes, and ensures the vehicle is fully functional before leaving. Customers benefit from fast service, transparent pricing, and reliable battery performance without visiting a workshop.

</p>
        </div>
      </div>
      <div className=' grid grid-cols-6 gap-x-3 mt-4'>
         {
            data.map((item,index) => (
                <div key={index} className=' border-[1px] border-[#00000017] p-4 rounded-xl flex flex-col gap-y-2' >
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

export default NearMe
