'use client';

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ArrowLeft, Mail, Phone } from 'lucide-react';
import { FaServicestack, FaUser } from 'react-icons/fa';

const Form = () => {
  const t = useTranslations('landingPage.form');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Data:', formData);
      alert('Quote requested successfully!');
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="w-full">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
        <h2 className='text-2xl font-bold text-white text-center mb-6'>
          Get a Quote
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className='flex items-center gap-3 px-4 py-2.5 bg-black/30 text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition-all'>
            <FaUser className='text-gray-400 text-sm' />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t('placeholders.fullName') || "Full Name"}
              required
              className="w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400 text-sm"
            />
          </div>

          {/* Email */}
          <div className='flex items-center gap-3 px-4 py-2.5 bg-black/30 text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition-all'>
            <Mail size={16} className='text-gray-400' />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('placeholders.email') || "Email Address"}
              required
              className="w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400 text-sm"
            />
          </div>

          {/* Phone */}
          <div className='flex items-center gap-3 px-4 py-2.5 bg-black/30 text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition-all'>
            <Phone size={16} className='text-gray-400' />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t('placeholders.phone') || "Phone Number"}
              required
              className="w-full bg-transparent focus:outline-none text-white placeholder:text-gray-400 text-sm"
            />
          </div>

          {/* Service Selection */}
          <div className='flex items-center gap-3 px-4 py-2.5 bg-black/30 text-white rounded-lg focus-within:ring-2 focus-within:ring-orange-500 transition-all'>
            <FaServicestack className='text-gray-400 text-sm' />
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className='w-full bg-transparent focus:outline-none text-white text-sm'
            >
              <option value="" disabled className='bg-gray-900'>Select Service</option>
              <option value="Tyre Replacement" className='bg-gray-900'>Tyre Replacement</option>
              <option value="Battery Replacement" className='bg-gray-900'>Battery Replacement</option>
              <option value="Engine Service" className='bg-gray-900'>Engine Service</option>
              <option value="AC Repair" className='bg-gray-900'>AC Repair</option>
              <option value="Brake Service" className='bg-gray-900'>Brake Service</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Additional Message (optional)"
              className="w-full px-4 py-2.5 bg-black/30 text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none transition-all placeholder:text-gray-400 text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-orange-800 disabled:to-orange-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl text-base"
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <>
                {t('submitButton') || "Request Quote"}
                {locale === 'ar' ? 
                  <ArrowLeft className="w-4 h-4" /> : 
                  <ArrowRight className="w-4 h-4" />
                }
              </>
            )}
          </button>
        </form>
        
        {/* Trust Badge */}
        <p className="text-center text-white/60 text-xs mt-4">
          No spam. We'll respond within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Form;