// src/components/sections/Cooperation.tsx
import React from 'react';
import CooperationCard from '../ui/CooperationCard';
import Link from 'next/link';

const Cooperation: React.FC = () => {
  const cooperationFormats = [
    {
      icon: 'fa-clock',
      title: 'Погодинна робота',
      description: 'Ви оплачуєте лише за фактично витрачений адвокатом час на вирішення Вашої справи. Цей формат ідеальний для разових консультацій та невеликих юридичних завдань.'
    },
    {
      icon: 'fa-project-diagram',
      title: 'Проектна робота',
      description: 'Повний юридичний супровід Вашої справи або окремого проекту від початку до кінця за фіксованою вартістю. Оптимально для чітко окреслених завдань з конкретними цілями.'
    },
    {
      icon: 'fa-briefcase',
      title: 'Абонентське обслуговування бізнесу',
      description: 'Щомісячна фіксована оплата гарантує Вам повний юридичний супровід із увагою та ефективністю, як у Вашого власного юридичного відділу. Ідеально для компаній, які потребують регулярної правової підтримки.'
    },
    {
      icon: 'fa-user-tie',
      title: 'Договір правової підтримки приватних осіб',
      description: 'Ексклюзивне партнерство з адвокатом для приватних осіб, яке працює для Вашого комфорту та захисту протягом терміну дії договору. Підходить для клієнтів, які цінують персональний підхід.'
    }
  ];

  return (
    <section id="cooperation" className="relative py-32 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Shaped dividers */}
      <div className="absolute top-[-100px] left-0 w-full h-[200px] bg-white transform skew-y-[-3deg] z-[1]"></div>
      <div className="absolute bottom-[-100px] left-0 w-full h-[200px] bg-gradient-to-b from-gray-50 to-gray-100 transform skew-y-[3deg] z-[1]"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-[2]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-lg font-medium text-secondary uppercase tracking-wider mb-2">
            Варіанти співпраці
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-dark relative">
            Гнучкі формати взаємодії для бізнесу і приватних осіб
            <span className="absolute w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light bottom-[-15px] left-1/2 transform -translate-x-1/2"></span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Я пропоную різні формати співпраці, адаптовані під ваші конкретні потреби. Це дозволяє обрати найбільш зручний та економічно ефективний варіант правового супроводу.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cooperationFormats.map((format, index) => (
            <CooperationCard 
              key={index}
              icon={format.icon}
              title={format.title}
              description={format.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-20">
          <p className="text-xl text-gray-600 mb-5">
            Не знаєте, який формат підходить саме Вам? Замовте консультацію, і я допоможу обрати найкращий варіант.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Деталі мають значення. Вартість залежить від обсягу роботи та складності справи.
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;