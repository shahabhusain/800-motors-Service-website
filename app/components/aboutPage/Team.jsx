import React from 'react'
import teamImage from '@/public/about/team.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
const Team = () => {
    const team = [
        {
            image:teamImage,
            name:"Varga Dóra",
            role:"HR Manager",
            insta:"",
            twit:""
        },
           {
            image:teamImage,
            name:"Varga Dóra",
            role:"HR Manager",
            insta:"",
            twit:""
        },
           {
            image:teamImage,
            name:"Varga Dóra",
            role:"HR Manager",
            insta:"",
            twit:""
        },
           {
            image:teamImage,
            name:"Varga Dóra",
            role:"HR Manager",
            insta:"",
            twit:""
        },
           {
            image:teamImage,
            name:"Varga Dóra",
            role:"HR Manager",
            insta:"",
            twit:""
        },
           {
            image:teamImage,
            name:"Varga Dóra",
            role:"HR Manager",
            insta:"",
            twit:""
        },
    ]
  return (
       <div className=' bg-[#f8f8f8] dark:bg-gray-950 py-20 mt-20 dark:mt-0 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
         <div className=' w-[85%] mx-auto flex flex-col items-center justify-center gap-y-3 '>
        <h1 className='lg:text-5xl md:text-4xl text-center sm:text-3xl text-2xl font-bold'>Meet the team behind 800 Motor Guru </h1>
        <p className=' text-[#00000099] dark:text-gray-300  text-[16px] font-normal text-center'>Welcome to 800 Motor Guru, a trusted provider of onsite car repair and maintenance services in the UAE. Our skilled technicians deliver fast, reliable automotiv.Welcome to 80UAE. </p>
        <div className=' grid md:grid-cols-3 grid-cols-1 gap-12 w-full mt-12'>
           {
            team.map((item, index) => (
                <div key={index} className=' flex flex-col gap-y-2 '>
                   <Image className=' rounded-2xl w-full' src={item.image} alt='team'/>
                     <div className=' flex items-center justify-between'>
                         <div className=' flex flex-col gap-1'>
                        <p className=' text-[18px] font-medium text-[#00000099] dark:text-gray-300'>{item.role}</p>
                      <h1 className=' text-[24px] font-bold'>{item.name}</h1>
                    </div>
                    <div className=' flex items-center gap-x-3'>
                        <Link className=' bg-[#F8F8F8] dark:bg-gray-600 dark:text-white text-[#000000] p-4 rounded-full' href={item.insta}><FaInstagram /></Link>
                          <Link className=' bg-[#F8F8F8] dark:bg-gray-600 dark:text-white text-[#000000] p-4 rounded-full' href={item.twit}><FaTwitter /></Link>
                    </div>
                     </div>
                </div>
            ))
           }
        </div>
    </div>
       </div>
  )
}

export default Team
