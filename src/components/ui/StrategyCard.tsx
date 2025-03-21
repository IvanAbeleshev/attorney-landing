'use client'

// src/components/ui/StrategyCard.tsx
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

type StrategyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
};

const StrategyCard: React.FC<StrategyCardProps> = ({ 
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
        bg-white/80 backdrop-blur-md rounded-2xl p-8 h-full
        border border-white/30 shadow-lg text-center
        transition-all duration-500 relative overflow-hidden z-10
        transform translate-y-12 opacity-0
        ${isInView ? 'translate-y-0 opacity-100' : ''}
        hover:shadow-xl hover:border-secondary group
      `}
      style={{ 
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Decorative circle */}
      <div 
        className="absolute top-[-10px] left-[-10px] w-[70px] h-[70px] 
        bg-gradient-to-br from-secondary to-transparent rounded-full 
        opacity-20 transition-all duration-500 
        group-hover:scale-150 group-hover:opacity-40"
      ></div>
      
      <div className="text-5xl mb-6">
        <span className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
          <i className={`fas ${icon}`}></i>
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-primary mb-5 pb-4 relative">
        {title}
        <span className="absolute bottom-0 left-1/2 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent transform -translate-x-1/2"></span>
      </h3>
      
      <p className="text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StrategyCard;