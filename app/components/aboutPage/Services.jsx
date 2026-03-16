import Image from 'next/image'
import React from 'react'
import serviceImage from '@/public/about/service.png'
import { FaStar } from 'react-icons/fa'
import { MdStar } from 'react-icons/md'
const Services = () => {
    const service = [
        {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
         {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
         {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
         {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
         {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
         {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
         {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
         {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
         {
            icon:<MdStar className=' text-[25px]' />,
            title:"Battery Replacement Services inDubai ",
            desc:"UAE Business Awards 2025"
        },
    ]
  return (
    <div className='w-[85%] mx-auto flex flex-col gap-6 mt-20 items-center justify-center max-w-6xl'>
        <div className=' flex flex-col gap-y-5 '>
            <Image src={serviceImage} alt='service'/>
            <p className=' text-[16px] text-center font-normal text-[#00000099] dark:text-white'>Welcome to 800 Motor Guru, a trusted provider of onsite car repair and maintenance services in the UAE. Our skilled technicians deliver fast, reliable automotiv.Welcome to 800 Motor Guru, a trusted provider of onsite car repair and maintenance services in the UAE. Our skilled technicians deliver fast, reliable automotive solutions directly to your location, making car care simple and convenient. At 800 Motor Guru, we focus on keeping your vehicle safe and running smoothly. From emergency roadside support to routine maintenance, our team provides professional service wherever you are across the UAE.</p>
        </div>
          <div className=' grid grid-cols-3 gap-3 mt-6'>
            {
                service.map((item, index) => (
                    <div key={index} className=' bg-[#F8F8F8] dark:bg-gray-950 p-4 rounded-xl flex items-center gap-4'>
                       <span className='bg-[#FF6E190D] p-3 rounded-md text-[#FF6E19]'>{item.icon}</span>
                       <div className=' flex flex-col gap-y-2'>
                        <h1 className=' text-[#020713] dark:text-white font-[500] text-[16px]'>{item.title}</h1>
                        <p className=' text-[14px] font-normal text-[#21212D99] dark:text-gray-300'>{item.desc}</p>
                       </div>
                    </div>
                ))
            }
          </div>
    </div>
  )
}

export default Services
