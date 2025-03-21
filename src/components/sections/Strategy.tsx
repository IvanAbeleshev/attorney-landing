// src/components/sections/Strategy.tsx
import React from 'react';
import StrategyCard from '../ui/StrategyCard';

const Strategy: React.FC = () => {
  const strategies = [
    {
      icon: 'fa-search-plus',
      title: 'Глибокий аналіз інформації',
      description: 'Кожна деталь має значення. Я ретельно вивчаю всі обставини Вашої справи, щоб створити сильну основу для захисту. Використання інструментів штучного інтелекту допомагає знайти додаткові аргументи.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Гнучкість і мінімізація ризиків',
      description: 'Я швидко адаптуюсь до змін, захищаючи Ваші інтереси навіть у непередбачуваних ситуаціях, завжди маючи запасний план дій.'
    },
    {
      icon: 'fa-chess',
      title: 'Проактивний захист',
      description: 'Я передбачаю кожен можливий хід опонентів і дію на випередження, щоб забезпечити перевагу з самого початку та уникнути небажаних сценаріїв.'
    },
    {
      icon: 'fa-handshake',
      title: 'Переговори та медіація',
      description: 'Коли є можливість вирішити конфлікт без тривалих судових процесів, я знаходжу вигідні умови для Вас, економлячи час і ресурси.'
    },
    {
      icon: 'fa-gavel',
      title: 'Кращий захист - це напад',
      description: 'Моя стратегія спрямована на те, щоб взяти ініціативу у свої руки та забезпечити максимальний захист Ваших інтересів активними діями.'
    }
  ];

  return (
    <section id="strategy" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-lg font-medium text-secondary uppercase tracking-wider mb-2">
            Авторський підхід
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-dark relative">
            Ефективні стратегії, які працюють на Ваш успіх
            <span className="absolute w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light bottom-[-15px] left-1/2 transform -translate-x-1/2"></span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Мої методи роботи ґрунтуються на глибокому аналізі ситуації, креативному мисленні та використанні перевірених на практиці стратегій. Це дозволяє досягати оптимальних результатів у кожній справі.
          </p>
        </div>
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {strategies.map((strategy, index) => (
            <StrategyCard 
              key={index}
              icon={strategy.icon}
              title={strategy.title}
              description={strategy.description}
              index={index}
            />
          ))}
        </div> */}

        <div className="flex flex-wrap justify-center items-stretch gap-10">
          {strategies.map((strategy, index) => (
            <div 
              key={index} 
              className={`
                w-full md:w-[calc(33.333%-2.5rem)] 
              `}
            >
              <StrategyCard 
                key={index}
                icon={strategy.icon}
                title={strategy.title}
                description={strategy.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;