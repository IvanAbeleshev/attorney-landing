// src/components/layout/MobileMenu.tsx
import React from 'react';
import Link from 'next/link';

type MobileMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div 
      className={`
        fixed top-0 right-0 h-screen w-4/5 max-w-sm
        bg-dark/90 backdrop-blur-xl z-40
        flex flex-col items-center justify-center
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        shadow-2xl
      `}
    >
      <nav className="flex flex-col items-center">
        <ul className="flex flex-col items-center space-y-6">
          <li>
            <Link
              href="#about"
              className="text-white text-xl font-medium hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Принципи роботи
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-white text-xl font-medium hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Практики
            </Link>
          </li>
          <li>
            <Link
              href="#strategy"
              className="text-white text-xl font-medium hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Стратегії захисту
            </Link>
          </li>
          <li>
            <Link
              href="#cooperation"
              className="text-white text-xl font-medium hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Формати співпраці
            </Link>
          </li>
          <li className="mt-6">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-secondary to-secondary-light text-dark font-semibold py-3 px-8 rounded-full text-lg uppercase tracking-wide"
              onClick={toggleMenu}
            >
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;