import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
  index?: number;
};

const Card: React.FC<CardProps> = ({ icon, title, children, className = '', index = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`
        bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 md:p-10
        shadow-lg transition-all duration-500 overflow-hidden relative z-10
        transform translate-y-12 opacity-0 
        ${isInView ? 'translate-y-0 opacity-100' : ''}
        hover:shadow-xl hover:border-secondary
        ${className}
      `}
      style={{ 
        transitionDelay: `${index * 100}ms` 
      }}
    >
      <div className="text-5xl mb-6">
        <span className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
          <i className={`fas ${icon}`}></i>
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-primary mb-5 pb-4 relative">
        {title}
        <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent"></span>
      </h3>
      
      <div className="text-gray-600 text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Card;