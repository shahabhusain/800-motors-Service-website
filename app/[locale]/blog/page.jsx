import Hero from '@/app/components/aboutPage/Hero'
import blogs from '@/public/blogs.jpg'
import React from 'react'

const BlogsPage = () => {
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
        },
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
        },
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
        },
      ]
  return (
    <div>
      <Hero about="Our Blogs" />
      {/* <Blogs blogData={blogData} /> */}
    </div>
  )
}

export default BlogsPage
