import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="hero-shape-1 absolute top-1/5 left-[5%] w-[300px] h-[300px] bg-gradient-radial from-secondary-light to-transparent rounded-full blur-[50px] opacity-50 animate-float"></div>
      <div className="hero-shape-2 absolute bottom-[10%] right-[10%] w-[200px] h-[200px] bg-gradient-radial from-accent-light to-transparent rounded-full blur-[40px] opacity-40 animate-float-reverse"></div>

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/50 z-[1]"></div> */}

      <div className="hero-content max-w-[1400px] mx-auto px-[30px] flex justify-between items-center h-full relative z-[2]">
        <div className="hero-text max-w-[650px] text-white z-[2]">
          <h1 className="text-3xl lg:text-[3.5rem] font-extrabold mb-[25px] leading-tight opacity-0 translate-y-[30px] animate-[fadeInUp_0.8s_forwards_0.2s] text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-light shadow-text">
            10+ років надійної правової підтримки
          </h1>
          
          <h2 className="text-2xl lg:text-[2rem] font-semibold mb-[20px] opacity-0 translate-y-[30px] animate-[fadeInUp_0.8s_forwards_0.4s] text-accent shadow-text">
            Порядність. Відповідальність. Професіоналізм.
          </h2>
          
          <p className="text-base lg:text-[1.2rem] leading-[1.7] mb-[35px] opacity-0 translate-y-[30px] animate-[fadeInUp_0.8s_forwards_0.6s]">
            Відчуваєте, що ситуація вийшла з-під контролю? Не чекайте, поки стане ще гірше. Зробіть перший крок до рішення вже сьогодні!
          </p>
          
          <Link 
            href="#contact" 
            className="
              inline-block 
              bg-gradient-to-r from-accent to-accent-light 
              text-center
              text-dark 
              py-[15px] px-[40px] 
              rounded-[50px] 
              font-bold 
              text-[1.1rem] 
              tracking-[1px] 
              transition-all 
              duration-500 
              shadow-[0_10px_30px_rgba(255,193,7,0.3)]
              hover:shadow-[0_15px_30px_rgba(255,193,7,0.4)]
              hover:-translate-y-[5px]
              opacity-0 
              translate-y-[30px] 
              animate-[fadeInUp_0.8s_forwards_0.8s]
              relative 
              overflow-hidden 
              z-[1]
              group
            "
          >
            <span className="relative z-10">Замовити консультацію</span>
            <span 
              className="
                absolute 
                top-0 
                left-[-100%] 
                w-full 
                h-full 
                bg-gradient-to-r 
                from-transparent 
                via-white/30 
                to-transparent 
                transition-all 
                duration-500 
                group-hover:left-[100%] 
                z-[-1]
              "
            ></span>
          </Link>
        </div>
        
        <div className="hero-image w-[40%] relative opacity-0 translate-x-[50px] animate-[fadeInRight_1s_forwards_1s]">
          <Image 
            src="/igor-bukov.jpeg" 
            alt="Биков Ігор Олегович" 
            width={500} 
            height={600} 
            className="
              hidden
              lg:block
              object-center
              h-[600px]
              object-cover
              rounded-[10px] 
              shadow-[0_20px_40px_rgba(0,0,0,0.2)] 
              border-[5px] 
              border-white/10
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;