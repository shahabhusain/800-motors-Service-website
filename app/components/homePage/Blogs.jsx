import Image from 'next/image'
import React from 'react'
import blogs from '@/public/blogs.jpg'
import { FaArrowRight, FaCalendar, FaClock } from 'react-icons/fa6'

const Blogs = () => {
  // Sample blog data - you can replace this with actual data from props or API
  const blogData = [
    {
      id: 1,
      date: "Jan 28, 2025",
      readTime: "8 min read",
      title: "5 strategies for effective brand storytelling",
      image: blogs
    },
    {
      id: 2,
      date: "Jan 28, 2025",
      readTime: "8 min read",
      title: "5 strategies for effective brand storytelling",
      image: blogs
    },
    {
      id: 3,
      date: "Jan 28, 2025",
      readTime: "8 min read",
      title: "5 strategies for effective brand storytelling",
      image: blogs
    }
  ]

  return (
    <div className='md:w-[90%] w-[95%] max-w-7xl mx-auto my-20 flex flex-col items-center justify-center'>
      <h1 className='uppercase md:text-[36px] text-[26px] font-semibold text-center'>
        LATEST FROM OUR <span className='text-orange-500'>BLOG</span>
      </h1>
      
      <div className='mt-6 flex items-center justify-between gap-6'>
        {blogData.map((blog) => (
          <div key={blog.id} className='flex flex-col w-full'>
            <div className='relative w-full'>
              <Image 
                className='rounded-t-2xl object-cover  h-[200px]' 
                src={blog.image} 
                alt='blog'
              />
            </div>
            <div className='rounded-b-2xl bg-[#f8f8f8] w-full dark:bg-gray-900 p-4'>
              <div className='flex items-center gap-4 text-sm text-gray-600'>
                <h1 className='flex items-center gap-1'>
                  <FaClock className='text-orange-500' /> {blog.date}
                </h1>
                <h1 className='flex items-center gap-1'>
                  <FaCalendar className='text-orange-500' /> {blog.readTime}
                </h1>
              </div>
              <h1 className='font-semibold max-w-[333px] text-lg mt-2 line-clamp-2'>
                {blog.title}
              </h1>
              <button className='flex items-center gap-2 text-orange-500 font-medium mt-3 hover:gap-3 transition-all'>
                Read more <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
       
      </div>
       <button className=' w-fit bg-orange-500 text-white mt-12 uppercase flex text-[20px] font-normal items-center gap-3  py-3 px-8 rounded-md'>View All Articles <FaArrowRight className=' rotate-320' size={20} /></button>
    </div>
  )
}

export default Blogs