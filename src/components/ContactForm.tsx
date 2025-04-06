'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-white font-heebo" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">צור קשר</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">השאירו פרטים</h3>
            
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 transition-all">
                תודה! פנייתך התקבלה בהצלחה.
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  שם מלא *
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'
                  }`}
                  placeholder="השם שלך"
                  {...register('name', { required: 'שדה חובה' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  טלפון *
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'
                  }`}
                  placeholder="מספר טלפון"
                  {...register('phone', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[0-9]{9,10}$/,
                      message: 'נא להזין מספר טלפון תקין'
                    }
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  אימייל *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'
                  }`}
                  placeholder="כתובת אימייל"
                  {...register('email', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'נא להזין כתובת אימייל תקינה'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  הודעה *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'
                  }`}
                  placeholder="תוכן ההודעה"
                  {...register('message', { required: 'שדה חובה' })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isSubmitting ? 'שולח...' : 'שליחה'}
              </button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">פרטי התקשרות</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-secondary mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">כתובת</h4>
                    <p className="text-gray-600">רחוב הרצל 123, תל אביב</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-secondary mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">טלפון</h4>
                    <p className="text-gray-600 hover:text-secondary transition-colors">
                      <a href="tel:+972-3-1234567">03-1234567</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-secondary mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">אימייל</h4>
                    <p className="text-gray-600 hover:text-secondary transition-colors">
                      <a href="mailto:info@betacafe.co.il">info@betacafe.co.il</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg shadow-md h-64 overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <FaMapMarkerAlt className="text-secondary text-4xl mx-auto mb-2" />
                  <p className="text-gray-600">מפת מיקום בית קפה ביתא</p>
                  <p className="text-sm text-gray-500 mt-1">רחוב הרצל 123, תל אביב</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}