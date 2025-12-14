import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="mb-6 inline-block">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mb-8" />
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 tracking-wide">
            Royaume
          </h1>

          <div className="text-4xl md:text-5xl lg:text-6xl font-light text-yellow-600 mb-4 tracking-widest">
            des Dragées
          </div>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-8" />

          <p className="text-xl md:text-2xl text-gray-300 font-light mb-4 tracking-wide" dir="rtl">
            حيث تتحول اللحظات الثمينة إلى ذكريات خالدة
          </p>

          <p className="text-lg md:text-xl text-yellow-600/80 font-light italic">
            Où chaque moment devient éternel
          </p>
        </div>

        <button
          onClick={scrollToServices}
          className={`mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          } text-yellow-600 hover:text-yellow-400 transition-colors`}
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-12 h-12 animate-bounce" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
