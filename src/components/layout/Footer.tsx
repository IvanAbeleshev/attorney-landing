// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaYoutube, FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-8 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="mb-5">
            <Image 
              src="/logo.png" 
              alt="logo"
              width={50}
              height={50}
              className="w-20 object-contain"
            />
            <p className="text-lg">Биков Ігор Олегович</p>
            <p className="text-gray-400">адвокат</p>
            <p className="text-gray-400">кандидат юридичних наук</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-6 pb-4 relative">
            Навігація
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent"></span>
          </h4>
          
          <ul className="space-y-4">
            <li>
              <Link 
                href="#about" 
                className="text-gray-300 hover:text-secondary transition-colors duration-300 pl-4 relative block"
              >
                <span className="absolute left-0 text-secondary">&raquo;</span>
                Принципи роботи
              </Link>
            </li>
            <li>
              <Link 
                href="#services" 
                className="text-gray-300 hover:text-secondary transition-colors duration-300 pl-4 relative block"
              >
                <span className="absolute left-0 text-secondary">&raquo;</span>
                Практики
              </Link>
            </li>
            <li>
              <Link 
                href="#strategy" 
                className="text-gray-300 hover:text-secondary transition-colors duration-300 pl-4 relative block"
              >
                <span className="absolute left-0 text-secondary">&raquo;</span>
                Стратегії захисту
              </Link>
            </li>
            <li>
              <Link 
                href="#cooperation" 
                className="text-gray-300 hover:text-secondary transition-colors duration-300 pl-4 relative block"
              >
                <span className="absolute left-0 text-secondary">&raquo;</span>
                Формати співпраці
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="text-gray-300 hover:text-secondary transition-colors duration-300 pl-4 relative block"
              >
                <span className="absolute left-0 text-secondary">&raquo;</span>
                Контакти
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-6 pb-4 relative">
            Соц мережі
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent"></span>
          </h4>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://t.me/Bykov_Ihor" 
              className="
                w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
              "
            >
              <FaTelegramPlane className="text-white" />
            </a>
            <a 
              href="https://www.youtube.com/@bykov_ihor" 
              className="
                w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
              "
            >
              <FaYoutube className="text-white" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ihor-bykov/" 
              className="
                w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
              "
            >
              <FaLinkedinIn className="text-white" />
            </a>
            
            <a 
              href="https://www.facebook.com/bykov.i.advocate" 
              className="
                w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
              "
            >
              <FaFacebookF className="text-white" />
            </a>
            
            <a 
              href="https://www.instagram.com/ihor_bykov/" 
              className="
                w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
              "
            >
              <FaInstagram className="text-white" />
            </a>
            
            {/* <a 
              href="#" 
              className="
                w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
              "
            >
              <FaTiktok className="text-white" />
            </a> */}
            
            {/* <a 
              href="#" 
              className="
                w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
              "
            >
              <FaTwitter className="text-white" />
            </a> */}
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
        &copy; 2015 - {new Date().getFullYear()}. Всі права захищено. <a href="#" className="text-secondary hover:text-accent transition-colors">Політика конфіденційності</a>
      </div>
    </footer>
  );
};

export default Footer;