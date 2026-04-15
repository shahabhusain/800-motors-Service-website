'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, setLoading } from '@/app/store/slice/authAppoitmentModelSlice';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ArrowLeft, Mail, Phone, X } from 'lucide-react';
import { FaServicestack, FaUser } from 'react-icons/fa';
import { MdLocationPin } from "react-icons/md";

const AppointmentModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, loading } = useSelector((state) => state.appointments);
  const t = useTranslations('landingPage.form');
  const locale = useLocale();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    
    // Simulate API call - replace with your actual API
    setTimeout(() => {
      console.log('Appointment Data:', formData);
      alert('Appointment booked successfully!');
      dispatch(setLoading(false));
      dispatch(closeModal());
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#00000096] bg-opacity-70 backdrop-blur-sm"
        onClick={() => dispatch(closeModal())}
      ></div>
      
      {/* Modal Content */}
      <div className={`relative w-full max-w-2xl mx-4 ${locale === "ar" ? "ml-52" : ""}`}>
        <div className="bg-[#f8f8f815] backdrop-blur-lg rounded-2xl px-6 pb-8 pt-4 transition-colors">
          {/* Close Button */}
          <button
            onClick={() => dispatch(closeModal())}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
          >
            <X size={24} />
          </button>
          
          <h2 className='text-[24px] text-white font-semibold uppercase text-center'>Book Appointment</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div className='w-full px-4 py-2 flex items-center gap-x-3 bg-[#00000029] text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition'>
              <FaUser className='text-[15px] text-gray-400' />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t('placeholders.fullName') || "Full Name"}
                required
                className="w-full focus:outline-none border-none bg-transparent text-white placeholder:text-gray-400"
              />
            </div>

            <div className='flex items-center gap-x-3 w-full px-4 py-2 bg-[#00000029] text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition'>
              <Mail size={18} className='text-gray-400' />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('placeholders.email') || "Email Address"}
                required
                className="w-full focus:outline-none border-none bg-transparent text-white placeholder:text-gray-400"
              />
            </div>

            <div className='flex items-center gap-x-3 w-full px-4 py-2 bg-[#00000029] text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition'>
              <Phone size={18} className='text-gray-400' />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('placeholders.phone') || "Phone Number"}
                required
                className="w-full focus:outline-none border-none bg-transparent text-white placeholder:text-gray-400"
              />
            </div>

            <div className='flex items-center justify-between gap-x-3'>
              <div className='flex items-center gap-x-3 w-full px-4 py-2 bg-[#00000029] text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition'>
                <MdLocationPin className='text-[15px] text-gray-400' />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  required
                  className="w-full focus:outline-none border-none bg-transparent text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className='flex items-center gap-x-3 w-full px-4 py-2 bg-[#00000029] text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition'>
                <FaServicestack className='text-[15px] text-gray-400' />
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className='w-full focus:outline-none border-none bg-transparent text-white'
                >
                  <option className='bg-black text-gray-400' value="" disabled selected>Select Services</option>
                  <option value="Tyre Replacement" className='bg-black text-white'>Tyre Replacement</option>
                  <option value="Battery Replacement" className='bg-black text-white'>Battery Replacement</option>
                  <option value="Engine Service" className='bg-black text-white'>Engine Service</option>
                </select>
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Additional Message"
                className="w-full px-4 py-2 bg-[#00000029] text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none transition placeholder:text-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-800 disabled:cursor-not-allowed text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-lg"
            >
              {loading ? 'Booking...' : (t('submitButton') || 'Book Appointment')}
              {!loading && (locale === 'ar' ? 
                <ArrowLeft className="w-5 h-5" /> : 
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;