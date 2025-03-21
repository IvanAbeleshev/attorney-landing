'use client';

import React from 'react';
import Card from '../ui/Card';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div 
      // bg-[url('/images/placeholder.jpg')]
        className="absolute inset-0 bg-center bg-cover opacity-5 z-0"
      ></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-lg font-medium text-secondary uppercase tracking-wider mb-2">
            Про мене
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-dark relative">
            Чому Ви можете довірити мені Вашу справу?
            <span className="absolute w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light bottom-[-15px] left-1/2 transform -translate-x-1/2"></span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            Я працюю відкрито та чесно, гарантуючи конфіденційність і персональний підхід. Зі мною Ви отримаєте більше ніж адвоката. Ви отримуєте надійного партнера, який буде відстоювати Ваші інтереси, як свої власні. Ви можете бути впевнені, що Ваші інтереси для мене, як адвоката - на першому місці.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card 
            icon="fa-handshake"
            title="Порядність"
          >
            Я не даю порожніх обіцянок, але я завжди борюся за максимальний результат для Вас, а кожне слово, кожна дія спрямовані на те, щоб Ваші інтереси були захищені найкращим чином.
          </Card>
          
          <Card 
            icon="fa-shield-alt"
            title="Відповідальність"
          >
            Я беру повну відповідальність за всі етапи Вашої справи — від першої консультації до остаточного вирішення. Ви можете покластися на мене, знаючи, що кожне рішення та кожен крок продуманий і спрямований на захист Ваших інтересів.
          </Card>
          
          <Card 
            icon="fa-graduation-cap"
            title="Професіоналізм"
          >
            Я завжди дію точно, впевнено і на результат. 10+ років безперервної юридичної практики, ступінь кандидата юридичних наук і десятки виграних справ — це не просто факти, а реальна Ваша можливість отримати експертну допомогу, побудовану на глибоких знаннях і реальному досвіді.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;