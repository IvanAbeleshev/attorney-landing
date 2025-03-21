// src/app/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Strategy from '@/components/sections/Strategy';
import Cooperation from '@/components/sections/Cooperation';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import ThreeBackground from '@/components/ThreeBackground';

export default function Home() {
  return (
    <main>
      <ThreeBackground />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Strategy />
        <Cooperation />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}