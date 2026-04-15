"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaLocationArrow, FaMailBulk, FaPhone, FaWhatsapp, FaTelegram, FaSlack, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaCalendarAlt } from 'react-icons/fa'

const Forms = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('')

    const serviceOptions = [
        "Engine Repair",
        "Battery Replacement",
        "Tyre Service",
        "Oil Change",
        "AC Repair",
        "Jump Start",
        "Fuel Delivery",
        "General Inspection"
    ]

    const timeSlots = [
        "ASAP",
        "Today",
        "Tomorrow",
        "Schedule a time"
    ]

    const contactCards = [
        {
            title: "Phone Number",
            icon: <FaPhone />,
            desc: "+971 800 64878",
            subDesc: "Call for immediate assistance and service booking"
        },
        {
            title: "Email Address",
            icon: <FaMailBulk />,
            desc: "info@800motorguru.com",
            subDesc: "Send your inquiry for support and service requests"
        },
        {
            title: "WhatsApp",
            icon: <FaWhatsapp />,
            desc: "+971 80064878",
            subDesc: "Message our team for quick responses"
        }
    ]

    const otherContactOptions = [
        { title: "Telegram", icon: <FaTelegram />, value: "800 Motor Guru on Telegram" },
        { title: "Slack", icon: <FaSlack />, value: "800 Motor Guru on Slack" }
    ]

    const socialMediaPlatforms = [
        { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/800MotorGuruOfficial" },
        { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/800motorguruofficial" },
        { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/company/800motorguruofficial/" },
        { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/800MotorGuru" },
        { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com/@800MotorGuru" }
    ]

    // Get today's date in YYYY-MM-DD format for min date attribute
    const today = new Date().toISOString().split('T')[0]

    return (
         <div className='dark:bg-gray-950 dark:py-20 border-b-[1px] border-b-gray-700'>
             <div className='w-[85%] mx-auto pt-20 dark:pt-0 mb-12 dark:mb-0'>
            {/* Header Section */}
            <div className='mb-8'>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 dark:text-white'>
                    Request Auto Service in Dubai
                </h1>
                <p className='text-gray-600 dark:text-gray-400 mt-2'>
                    Contact 800 Motor Guru for quick and reliable auto repair services across Dubai. 800 Guru Motor's team responds within minutes without delay.
                </p>
            </div>

            {/* Form and Map Section */}
            <div className='flex flex-col lg:flex-row items-start justify-between gap-12'>
                <div className='w-full lg:w-1/2'>
                    <form className='border border-gray-200 dark:border-gray-700 flex flex-col gap-y-4 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg dark:shadow-2xl transition-all duration-300'>
                        <h2 className='text-2xl font-bold mb-2 text-gray-900 dark:text-white'>Contact Form</h2>
                        
                        {/* Full Name - Required */}
                        <div>
                            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300'>
                                Full Name <span className='text-red-500'>*</span>
                            </label>
                            <input 
                                className='focus:outline-none w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300' 
                                type="text" 
                                placeholder="Enter your full name" 
                                required 
                            />
                        </div>

                        {/* Phone Number - Required */}
                        <div>
                            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300'>
                                Phone Number <span className='text-red-500'>*</span>
                            </label>
                            <input 
                                className='focus:outline-none w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300' 
                                type="tel" 
                                placeholder="Provide your contact number so our team can reach you quickly" 
                                required 
                            />
                        </div>

                        {/* Email Address - Optional */}
                        <div>
                            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300'>
                                Email Address <span className='text-gray-400 dark:text-gray-500 text-xs'>(Optional)</span>
                            </label>
                            <input 
                                className='focus:outline-none w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300' 
                                type="email" 
                                placeholder="Add your email if you prefer updates by email" 
                            />
                        </div>

                        {/* Select Service */}
                        <div>
                            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300'>
                                Select Service
                            </label>
                            <select className='focus:outline-none w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300'>
                                <option value="">Choose the service you need</option>
                                {serviceOptions.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>

                        {/* Vehicle Details */}
                        <div>
                            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300'>
                                Vehicle Details
                            </label>
                            <input 
                                className='focus:outline-none w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300' 
                                type="text" 
                                placeholder="Enter your car make, model, and year" 
                            />
                        </div>

                        {/* Location in Dubai */}
                        <div>
                            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300'>
                                Preferred Service Date
                            </label>
                            <input 
                                type="date" 
                                min={today}
                                className='focus:outline-none w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300' 
                                placeholder="Select your preferred date" 
                            />
                        </div>

                        {/* Describe Your Issue */}
                        <div>
                            <label className='block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300'>
                                Describe Your Issue
                            </label>
                            <textarea 
                                className='focus:outline-none w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-2 px-4 rounded-md text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300' 
                                placeholder="Explain your problem in a few words so our team can prepare the right solution" 
                                rows={4}
                            ></textarea>
                        </div>

                        {/* Call to Action Button */}
                        <button className='bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-600 dark:hover:to-orange-700 py-3 px-6 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg'>
                            Request Service Now
                        </button>
                    </form>
                </div>
                
                {/* Map Section - Fixed Google Map */}
                <div className='w-full lg:w-1/2'>
                    <div className='rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789012!2d55.2288776!3d25.1312301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61996b952e8f%3A0xa6520e0352480424!2s800MotorGuru%20Auto%20Repair%20Services!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="800MotorGuru Location"
                            className="w-full h-[450px] dark:opacity-90"
                        ></iframe>
                    </div>

                    {/* Contact Cards */}
                    <div className='border border-gray-200 dark:border-gray-700 p-5 rounded-md mt-6 bg-white dark:bg-gray-900 shadow-lg dark:shadow-2xl transition-all duration-300'>
                        <div className='space-y-4'>
                            {/* Phone Number */}
                            <div className='flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300'>
                                <div className='bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full transition-colors duration-300'>
                                    <FaPhone className='text-orange-500 dark:text-orange-400 text-sm' />
                                </div>
                                <div>
                                    <h4 className='font-semibold text-gray-800 dark:text-gray-200'>Phone Number</h4>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        Call <a href="tel:+97180064878" className='text-orange-500 dark:text-orange-400 font-medium hover:underline'>+971 800 64878</a> for immediate assistance and service booking.
                                    </p>
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className='flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300'>
                                <div className='bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full transition-colors duration-300'>
                                    <FaMailBulk className='text-orange-500 dark:text-orange-400 text-sm' />
                                </div>
                                <div>
                                    <h4 className='font-semibold text-gray-800 dark:text-gray-200'>Email Address</h4>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        Send your inquiry to <a href="mailto:info@800motorguru.com" className='text-orange-500 dark:text-orange-400 font-medium hover:underline'>info@800motorguru.com</a> for support and service requests.
                                    </p>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className='flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300'>
                                <div className='bg-green-100 dark:bg-green-900/30 p-2 rounded-full transition-colors duration-300'>
                                    <FaWhatsapp className='text-green-500 dark:text-green-400 text-sm' />
                                </div>
                                <div>
                                    <h4 className='font-semibold text-gray-800 dark:text-gray-200'>WhatsApp</h4>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        Message our team on WhatsApp at <a href="https://wa.me/97180064878" target="_blank" rel="noopener noreferrer" className='text-green-500 dark:text-green-400 font-medium hover:underline'>+971 80064878</a> for quick responses and easy communication.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact 800 Motor Guru Section */}
            <div className='mt-16'>
                <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>Contact 800 Motor Guru</h2>
                <p className='text-gray-600 dark:text-gray-400 mb-8'>You can contact 800 Motor Guru through the following options. Our team responds quickly and provides support across Dubai.</p>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
                    {/* Social Media Platforms */}
                    <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-2xl transition-all duration-300'>
                        <h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Social Media Platforms</h3>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>You can also connect with 800 Motor Guru on social media for updates, support, and service information:</p>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3'>
                            {socialMediaPlatforms.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center justify-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition-all duration-300 group shadow-md hover:shadow-lg'
                                >
                                    <span className='text-orange-500 dark:text-orange-400 text-lg group-hover:text-orange-600 dark:group-hover:text-orange-300 transition-colors'>{social.icon}</span>
                                    <span className='text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors'>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-2xl transition-all duration-300'>
                        <h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Working Hours</h3>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>800 Motor Guru operates during the following hours to provide reliable auto repair services across Dubai.</p>
                        
                        <div className='space-y-4'>
                            {/* Monday to Saturday */}
                            <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md'>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                        <h4 className='font-semibold text-gray-800 dark:text-gray-200'>Monday to Saturday</h4>
                                    </div>
                                    <span className='text-green-600 dark:text-green-400 text-sm font-medium'>Open</span>
                                </div>
                                <div className='space-y-2 pl-4'>
                                    <div className='flex items-center justify-between text-gray-600 dark:text-gray-400'>
                                        <span>Morning - Evening</span>
                                        <span className='font-medium'>9:00 AM to 7:00 PM</span>
                                    </div>
                                    <div className='flex items-center justify-between text-gray-600 dark:text-gray-400'>
                                        <span>Time Zone</span>
                                        <span className='font-medium'>(UTC+4)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Sunday */}
                            <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md'>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                                        <h4 className='font-semibold text-gray-800 dark:text-gray-200'>Sunday</h4>
                                    </div>
                                    <span className='text-orange-600 dark:text-orange-400 text-sm font-medium'>Limited Hours</span>
                                </div>
                                <div className='space-y-2 pl-4'>
                                    <div className='flex items-center justify-between text-gray-600 dark:text-gray-400'>
                                        <span>Morning - Afternoon</span>
                                        <span className='font-medium'>10:00 AM to 4:00 PM</span>
                                    </div>
                                    <div className='flex items-center justify-between text-gray-600 dark:text-gray-400'>
                                        <span>Time Zone</span>
                                        <span className='font-medium'>(UTC+4)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Support Note */}
                            <div className='bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-3 rounded-lg'>
                                <p className='text-sm text-orange-700 dark:text-orange-300 flex items-center gap-2'>
                                    <span className='text-lg'>📞</span>
                                    <span>Emergency support available 24/7. Call <a href="tel:+97180064878" className='font-semibold underline'>+971 800 64878</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </div>
    )
}

export default Forms