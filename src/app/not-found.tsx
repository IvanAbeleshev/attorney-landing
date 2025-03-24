// app/not-found.jsx
import Link from 'next/link';
import ThreeBackground from '@/components/ThreeBackground';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Use the existing ThreeBackground component */}
      <ThreeBackground />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
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
          </div>
          
          {/* 404 Content */}
          <h1 className="text-7xl md:text-9xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ffc107] animate-fade-in-up delay-200">
            404
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#00bcd4] animate-fade-in-up delay-300">
            Сторінку не знайдено
          </h2>
          
          <p className="text-white text-lg mb-10 max-w-xl mx-auto animate-fade-in-up delay-400">
            На жаль, сторінку, яку ви шукаєте, не існує або її було переміщено.
            Давайте знайдемо належне юридичне рішення для вашої ситуації.
          </p>
          
          {/* Only Back to Main button as requested */}
          <div className="animate-fade-in-up delay-500">
            <Link 
              href="/" 
              className="bg-gradient-to-r from-[#ffc107] to-[#fff350] text-[#0a1128] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 relative overflow-hidden group inline-block"
            >
              <span className="relative z-10">На головну</span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00bcd4]/20 filter blur-[100px] animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#ffc107]/20 filter blur-[80px] animate-float-reverse"></div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 text-center text-white/70 text-sm z-10">
        &copy; 2015 - {new Date().getFullYear()}. Всі права захищено.
      </footer>
    </div>
  );
}