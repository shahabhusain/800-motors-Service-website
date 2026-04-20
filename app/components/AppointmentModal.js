'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, setLoading } from '@/app/store/slice/authAppoitmentModelSlice';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ArrowLeft, Mail, Phone, X } from 'lucide-react';
import { FaServicestack, FaUser } from 'react-icons/fa';

const AppointmentModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, loading } = useSelector((state) => state.appointments);
  const t = useTranslations('landingPage.form');
  const locale = useLocale();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
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
    
    setTimeout(() => {
      console.log('Appointment Data:', formData);
      alert('Appointment booked successfully!');
      dispatch(setLoading(false));
      dispatch(closeModal());
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => dispatch(closeModal())}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-orange-600 px-6 py-4">
            <button
              onClick={() => dispatch(closeModal())}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition"
            >
              <X size={20} />
            </button>
            <h2 className='text-xl font-bold text-white text-center'>
              Book Appointment
            </h2>
            <p className="text-white/70 text-xs text-center mt-1">
              We'll get back to you within 30 minutes
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className='flex items-center gap-3 px-4 py-2.5 bg-white/10 text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition-all'>
              <FaUser className='text-gray-400 text-sm' />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className='flex items-center gap-3 px-4 py-2.5 bg-white/10 text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition-all'>
              <Mail size={16} className='text-gray-400' />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className='flex items-center gap-3 px-4 py-2.5 bg-white/10 text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition-all'>
              <Phone size={16} className='text-gray-400' />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400 text-sm"
              />
            </div>

            <div className='flex items-center gap-3 px-4 py-2.5 bg-white/10 text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition-all'>
              <FaServicestack className='text-gray-400 text-sm' />
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className='w-full bg-transparent focus:outline-none text-white text-sm'
              >
                <option value="" disabled className='bg-gray-800'>Select Service</option>
                <option value="Tyre Replacement" className='bg-gray-800'>Tyre Replacement</option>
                <option value="Battery Replacement" className='bg-gray-800'>Battery Replacement</option>
                <option value="Engine Service" className='bg-gray-800'>Engine Service</option>
              </select>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Additional Message (optional)"
                className="w-full px-4 py-2.5 bg-white/10 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none transition-all placeholder:text-gray-400 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-orange-800 disabled:to-orange-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg text-base"
            >
              {loading ? 'Booking...' : 'Book Appointment'}
              {!loading && (locale === 'ar' ? 
                <ArrowLeft className="w-4 h-4" /> : 
                <ArrowRight className="w-4 h-4" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;