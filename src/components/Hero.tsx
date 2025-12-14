import { ChevronDown } from 'lucide-react';
import { useEffect, useState, type MouseEvent } from 'react';

type Lang = 'fr' | 'ar';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const isAr = lang === 'ar';

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#141015] to-black opacity-90" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 24%, rgba(34, 211, 238, 0.35) 0, transparent 22%), radial-gradient(circle at 82% 18%, rgba(251, 191, 36, 0.32) 0, transparent 22%), radial-gradient(circle at 18% 82%, rgba(244, 114, 182, 0.28) 0, transparent 26%), radial-gradient(circle at 78% 78%, rgba(163, 230, 53, 0.22) 0, transparent 26%)'
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

          <div className="mb-8 flex items-center justify-center">
            <img
              src="/assets/logo.jpg"
              alt="Royaume des Dragées"
              loading="eager"
              className="w-24 h-24 rounded-full object-cover border border-yellow-600/30 shadow-lg shadow-yellow-900/20"
            />
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-display mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 tracking-wide">
            Royaume
          </h1>

          <div className="text-4xl md:text-5xl lg:text-6xl font-light text-yellow-600 mb-4 tracking-widest">
            des Dragées
          </div>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-8" />

          <p className="text-xl md:text-2xl text-gray-300 font-light mb-4 tracking-wide">
            {isAr ? 'حيث تتحول اللحظات الثمينة إلى ذكريات خالدة' : 'Où chaque moment devient éternel'}
          </p>

          <p className="text-lg md:text-xl text-yellow-600/80 font-light italic">
            {isAr ? 'عالم من التفاصيل الراقية لمناسباتك' : 'Un univers de détails raffinés pour vos célébrations'}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all"
            >
              {isAr ? 'تواصل معنا الآن' : 'Contactez-nous'}
            </a>
            <a
              href="#services"
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full border border-yellow-600/40 text-yellow-600 hover:border-yellow-600/70 hover:text-yellow-400 transition-all"
            >
              {isAr ? 'استكشف الخدمات' : 'Découvrir les services'}
            </a>
          </div>
        </div>

        <button
          onClick={scrollToServices}
          className={`mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          } text-yellow-600 hover:text-yellow-400 transition-colors`}
          aria-label={isAr ? 'انتقل إلى المحتوى' : 'Aller au contenu'}
        >
          <ChevronDown className="w-12 h-12 animate-bounce" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
