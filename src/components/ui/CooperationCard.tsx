'use client'

// src/components/ui/CooperationCard.tsx
import React, { useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';

type CooperationCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
};

const CooperationCard: React.FC<CooperationCardProps> = ({ 
  icon, 
  title, 
  description,
  index = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`
        bg-white/95 backdrop-blur-md rounded-2xl p-8 group
        border border-white/30 shadow-lg text-center
        transition-all duration-500 relative overflow-hidden z-10
        transform translate-y-12 opacity-0 h-full flex flex-col justify-between
        ${isInView ? 'translate-y-0 opacity-100' : ''}
        hover:shadow-xl hover:border-secondary
      `}
      style={{ 
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Top border highlight on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
      
      <div>
        <div className="text-5xl mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
            <i className={`fas ${icon}`}></i>
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-5 pb-4 relative">
          {title}
          <span className="absolute bottom-0 left-1/2 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent transform -translate-x-1/2"></span>
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
      </div>
      
      <Link 
        href="#contact" 
        className="
          inline-block bg-gradient-to-r from-primary to-primary-light text-white
          py-3 px-8 rounded-full text-sm font-semibold uppercase tracking-wider
          shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 
          hover:-translate-y-1 transition-all duration-500 relative overflow-hidden
        "
      >
        <span className="relative z-10">Замовити формат</span>
        <span className="absolute inset-0 overflow-hidden">
          <span className="absolute left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 hover:left-[100%]"></span>
        </span>
      </Link>
    </div>
  );
};

export default CooperationCard;