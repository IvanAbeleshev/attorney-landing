// src/components/ui/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { sendEmail } from '@/actions/email'; // Make sure to adjust this import path to where you save the server action

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    message: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setErrorMessage('');
    
    // Validate form
    const newErrors = {
      name: formData.name.trim() === '',
      phone: formData.phone.trim() === '',
      message: formData.message.trim() === ''
    };
    
    setErrors(newErrors);
    
    // If no errors, submit form
    if (!Object.values(newErrors).includes(true)) {
      try {
        setIsSubmitting(true);
        
        // Call the server action
        const result = await sendEmail(formData);
        
        if (result.success) {
          // Show success message
          setIsSubmitted(true);
          
          // Reset form
          setFormData({ name: '', phone: '', message: '' });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        } else {
          setErrorMessage(result.message || 'Не вдалось надіслати повідомлення. Спробуйте пізніше.');
        }
      } catch (error) {
        setErrorMessage('Виникла помилка при відправці. Спробуйте пізніше.');
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="text-accent text-5xl mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Дякуємо за ваше звернення!</h3>
        <p className="text-xl text-white/80">Ми зв'яжемося з вами найближчим часом.</p>
      </div>
    );
  }
  
  return (
    <form 
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl"
      onSubmit={handleSubmit}
    >
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-white">
          <p className="font-semibold">{errorMessage}</p>
        </div>
      )}
      
      <div className="mb-6">
        <label 
          htmlFor="name" 
          className="block mb-2 font-semibold text-white text-lg"
        >
          Ім'я
        </label>
        <input 
          type="text" 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`
            w-full p-4 rounded-xl border bg-white/10 text-white 
            placeholder:text-white/70 focus:outline-none focus:ring-2
            ${errors.name 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-white/30 focus:border-accent focus:ring-accent/30'}
          `}
          placeholder="Ваше ім'я"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="mb-6">
        <label 
          htmlFor="phone" 
          className="block mb-2 font-semibold text-white text-lg"
        >
          Телефон
        </label>
        <input 
          type="tel" 
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`
            w-full p-4 rounded-xl border bg-white/10 text-white 
            placeholder:text-white/70 focus:outline-none focus:ring-2
            ${errors.phone 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-white/30 focus:border-accent focus:ring-accent/30'}
          `}
          placeholder="Ваш телефон"
          disabled={isSubmitting}
        />
      </div>
      
      <div className="mb-6">
        <label 
          htmlFor="message" 
          className="block mb-2 font-semibold text-white text-lg"
        >
          Опишіть коротко суть звернення
        </label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`
            w-full p-4 rounded-xl border bg-white/10 text-white 
            placeholder:text-white/70 focus:outline-none focus:ring-2 resize-y
            ${errors.message 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-white/30 focus:border-accent focus:ring-accent/30'}
          `}
          placeholder="Ваше повідомлення"
          disabled={isSubmitting}
        ></textarea>
      </div>
      
      <div className="mb-8 text-white/80 text-sm">
        Натискаючи кнопку "Відправити", Ви приймаєте умови <a href="#" className="text-accent hover:underline">політики конфіденційності</a> та надаєте згоду на обробку Ваших персональних даних.
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="
          w-full bg-gradient-to-r from-accent to-accent-light text-dark
          font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wide
          shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40
          hover:-translate-y-1 transition-all duration-500 relative overflow-hidden
          disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
        "
      >
        <span className="relative z-10">
          {isSubmitting ? 'Відправка...' : 'Відправити'}
        </span>
        {!isSubmitting && (
          <span className="absolute inset-0 overflow-hidden">
            <span className="absolute left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 hover:left-[100%]"></span>
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;