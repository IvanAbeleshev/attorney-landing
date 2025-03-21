// src/components/sections/CTA.tsx
import React from 'react';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden text-center">
      {/* Background pattern */}
      <div 
        // bg-[url('/images/placeholder.jpg')]
        className="absolute inset-0 bg-center bg-cover opacity-5 z-0"
      ></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
            Не чекайте, поки ситуація погіршиться
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Зробіть перший крок до вирішення Вашої юридичної проблеми вже сьогодні. Професійна консультація допоможе Вам зрозуміти можливі шляхи розв'язання ситуації та обрати оптимальну стратегію дій.
          </p>
          
          <Link 
            href="#contact" 
            className="
              inline-block bg-gradient-to-r from-accent to-accent-light text-dark
              font-bold py-4 px-10 rounded-full text-lg tracking-wide
              shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40
              hover:-translate-y-1 transition-all duration-500 relative overflow-hidden
            "
          >
            <span className="relative z-10">Замовити консультацію</span>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 hover:left-[100%]"></span>
            </span>
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 hover:left-[100%]"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;