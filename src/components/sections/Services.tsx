// src/components/sections/Services.tsx
import React from 'react';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'fa-building',
      title: 'Супровід і захист бізнесу',
      description: 'Я пропоную комплексний юридичний супровід, щоб кожне Ваше рішення було юридично обґрунтованим, а всі ризики мінімізованими.',
      items: [
        'Комплексний супровід бізнесу на постійній основі',
        'Захист прав власників і ТОП-менеджменту',
        'Юридичний супровід перевірок контролюючих органів',
        'Вирішення корпоративних конфліктів',
        'Корпоративне структурування'
      ]
    },
    {
      icon: 'fa-search',
      title: 'Правовий аудит і аналіз ризиків',
      description: 'Я виявлю приховані правові та інші ризики, працюю з використанням інструментів штучного інтелекту та методології OSINT.',
      items: [
        'Комплексний аналіз компаній, контрагентів, партнерів',
        'Перевірка фінансових, податкових аспектів',
        'Оцінка юридичних ризиків при прийнятті рішень',
        'Перевірка юридичної «чистоти» нерухомості та активів',
        'Антикорупційний аудит'
      ]
    },
    {
      icon: 'fa-balance-scale',
      title: 'Взаємодія з державними органами',
      description: 'Я беру на себе всі юридичні аспекти вашої взаємодії з державними органами, щоб ви зосередилися на важливішому.',
      items: [
        "Роз'яснення законодавчих вимог та процедур",
        'Підготовка та подання запитів, скарг, заяв',
        'Представництво під час зустрічей та переговорів',
        'Захист під час перевірок (податкові, трудові, екологічні)',
        'Оскарження індивідуальних актів та штрафів'
      ]
    },
    {
      icon: 'fa-home',
      title: 'Сімейні та цивільні справи',
      description: 'Юридична допомога у вирішенні особистих питань із максимальним дотриманням конфіденційності та увагою до деталей.',
      items: [
        'Складання шлюбних контрактів',
        'Розірвання шлюбу та поділ майна подружжя',
        'Питання опіки над дітьми',
        'Стягнення аліментів, зміна їх розміру',
        'Спори про право власності'
      ]
    },
    {
      icon: 'fa-file-contract',
      title: 'Договірні відносини',
      description: 'Розробляю договори, повністю адаптовані під ваш бізнес, щоб мінімізувати ризики та захистити ваші інтереси.',
      items: [
        'Розробка індивідуальних договорів',
        'Юридична підтримка при укладенні договорів',
        'Юридична експертиза існуючих договорів',
        'Підготовка змін чи доповнень до договорів',
        'Врегулювання договірних спорів'
      ]
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Shaped dividers */}
      <div className="absolute top-[-100px] left-0 w-full h-[200px] bg-white transform skew-y-[-3deg] z-[1]"></div>
      <div className="absolute bottom-[-100px] left-0 w-full h-[200px] bg-white transform skew-y-[3deg] z-[1]"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-[2]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-lg font-medium text-secondary uppercase tracking-wider mb-2">
            Юридичні послуги
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-dark relative">
            Практики
            <span className="absolute w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light bottom-[-15px] left-1/2 transform -translate-x-1/2"></span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Я пропоную широкий спектр юридичних послуг, спрямованих на ефективний захист Ваших прав та інтересів. Моя мета — забезпечити професійний підхід до кожної справи та знайти оптимальне рішення навіть у найскладніших ситуаціях.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center  items-stretch gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`
                w-full md:w-[calc(33.333%-2.5rem)] 
              `}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;