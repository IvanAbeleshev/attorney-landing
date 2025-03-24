// src/components/sections/Contact.tsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import ContactForm from '../ui/ContactForm';


const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-lg font-medium text-white uppercase tracking-wider mb-2">
            {"Зв'язатися зі мною"}
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white relative">
            Контакти
            <span className="absolute w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light bottom-[-15px] left-1/2 transform -translate-x-1/2"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-8">Потрібна консультація? Складна ситуація?</h3>
            
            <p className="text-lg mb-6 leading-relaxed">
              Звертайтеся, і я допоможу вирішити ваші юридичні питання професійно та швидко. Вже на першій консультації Ви отримаєте розуміння, як діяти далі.
            </p>
            
            <div className="space-y-4 mb-10">
              <a href='tel:+380635932872' className="flex items-center text-lg">
                <FaPhone className="text-accent mr-4 flex-shrink-0" />
                +38 063 59 32 872
              </a>
              
              <a href="mailto:bykov.pravo@gmail.com" className="flex items-center text-lg">
                <FaEnvelope className="text-accent mr-4 flex-shrink-0" />
                bykov.pravo@gmail.com
              </a>
              
              <a target='_blank' href="https://www.google.com/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82+%D0%91%D0%B8%D0%BA%D0%BE%D0%B2+%D0%86%D0%B3%D0%BE%D1%80+%D0%9E%D0%BB%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D1%87/@46.4366307,30.7314056,979m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6a4c476ba264674b:0xae8c1e453cab4350!8m2!3d46.4366307!4d30.7339805!16s%2Fg%2F11ldq0z40k?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D" className="flex items-center text-lg">
                <FaMapMarkerAlt className="text-accent mr-4 flex-shrink-0" />
                м. Одеса, вул. Фонтанська дорога, 11, офіс 509
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/bykov.i.advocate" 
                className="
                  w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                  transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
                "
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ihor-bykov/" 
                className="
                  w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                  transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
                "
              >
                <FaLinkedinIn className="text-white text-xl" />
              </a>
              
              <a 
                href="https://www.instagram.com/ihor_bykov/" 
                className="
                  w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                  transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
                "
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              
              <a 
                href="https://t.me/Bykov_Ihor" 
                className="
                  w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                  transition-all duration-500 hover:bg-secondary hover:-translate-y-1 hover:rotate-12
                "
              >
                <FaTelegramPlane className="text-white text-xl" />
              </a>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;