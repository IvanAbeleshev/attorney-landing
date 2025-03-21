'use client'

// src/components/ui/ServiceCard.tsx
import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, items, index }) => {
  return (
    <div 
      className="h-full bg-white/95 rounded-3xl p-8 transition-all duration-500 transform opacity-0 translate-y-12 shadow-lg hover:shadow-xl hover:-translate-y-4 border border-white/10 backdrop-blur-md group flex flex-col"
      style={{ 
        animationName: 'fadeInUp', 
        animationDuration: '0.8s', 
        animationFillMode: 'forwards',
        animationDelay: `${index * 0.1}s` 
      }}
    >
      <div className='grow'>
        <div className="text-5xl mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
            <i className={`fas ${icon}`}></i>
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-5 text-primary relative pb-4">
          {title}
          <span className="absolute w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent bottom-0 left-0"></span>
        </h3>
        
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        
        <ul className="mb-8">
          {items.map((item, i) => (
            <li 
              key={i}
              className="mb-3 relative pl-8 text-gray-700"
            >
              <i className="fas fa-check text-secondary absolute left-0 top-1"></i>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        href="#contact" 
        className="inline-block bg-gradient-to-r from-primary to-primary-light text-white py-3 px-8 rounded-full font-semibold uppercase text-sm tracking-wider transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
      >
        <span className="relative z-10 block text-center">Замовити послуги</span>
        <span className="absolute top-0 left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
      </Link>
    </div>
  );
};

export default ServiceCard;