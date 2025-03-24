'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-dark py-3 shadow-xl' 
          : 'bg-white/8 backdrop-blur-md border-b border-white/10'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center z-10">
          <Image 
            src="/logo.png" 
            alt="logo"
            width={50}
            height={50}
            className="w-20 object-contain"
          />
          <div className="text-white text-sm leading-tight ml-2">
            <strong className="text-xl font-bold block mb-1">Биков Ігор Олегович</strong>
            адвокат
            <span className='block'>кандидат юридичних наук</span>
          </div>
        </Link>
        
        <nav className="hidden lg:block">
          <ul className="flex">
            <li className="ml-10">
              <Link 
                href="#about" 
                className="text-white font-medium hover:text-secondary transition-colors relative group py-2"
              >
                Принципи роботи
                <span className="absolute w-full h-0.5 bg-secondary left-0 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </Link>
            </li>
            <li className="ml-10">
              <Link 
                href="#services" 
                className="text-white font-medium hover:text-secondary transition-colors relative group py-2"
              >
                Практики
                <span className="absolute w-full h-0.5 bg-secondary left-0 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </Link>
            </li>
            <li className="ml-10">
              <Link 
                href="#strategy" 
                className="text-white font-medium hover:text-secondary transition-colors relative group py-2"
              >
                Стратегії захисту
                <span className="absolute w-full h-0.5 bg-secondary left-0 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </Link>
            </li>
            <li className="ml-10">
              <Link 
                href="#cooperation" 
                className="text-white font-medium hover:text-secondary transition-colors relative group py-2"
              >
                Формати співпраці
                <span className="absolute w-full h-0.5 bg-secondary left-0 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </Link>
            </li>
            <li className="ml-10">
              <Link 
                href="#contact" 
                className="bg-gradient-to-r from-secondary to-secondary-light text-dark font-semibold py-2.5 px-6 rounded-full text-sm uppercase tracking-wide shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/40 hover:-translate-y-1 transition-all duration-300"
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        
        <div 
          className="lg:hidden flex flex-col justify-between w-7 h-5 cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <span className={`bg-white h-0.5 w-full rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2': ''}`}></span>
          <span className={`bg-white h-0.5 w-full rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0': ''}`}></span>
          <span className={`bg-white h-0.5 w-full rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2': ''}`}></span>
        </div>
      </div>
      
      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;