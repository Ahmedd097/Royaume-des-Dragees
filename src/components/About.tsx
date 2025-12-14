import { useEffect, useRef, useState } from 'react';

type Lang = 'fr' | 'ar';

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isAr = lang === 'ar';

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-yellow-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 15%, #D4AF37 0, transparent 55%), radial-gradient(circle at 80% 85%, #D4AF37 0, transparent 55%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-block mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8">
            {isAr ? 'مملكة الاحتفالات الملكية' : 'Le Royaume des Célébrations'}
          </h2>

          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
            <p className="font-light">
              {isAr
                ? 'في مملكة الدراجيه، نؤمن بأن كل لحظة من لحظات حياتك تستحق أن تُحتفل بها بأسلوب ملكي'
                : 'Au Royaume des Dragées, chaque moment mérite d’être célébré avec une élégance royale.'}
            </p>

            <p className="font-light">
              {isAr
                ? 'من فرحة الولادة الأولى إلى بهجة الزفاف، من تألق التخرج إلى سعادة المناسبات الخاصة'
                : 'De la naissance au mariage, de la graduation aux événements uniques : nous sublimons vos instants les plus précieux.'}
            </p>

            <p className="text-yellow-600/90 italic text-xl mt-8">
              {isAr
                ? 'نحوّل احتفالاتكم إلى ذكريات لا تُنسى'
                : 'Nous transformons vos célébrations en souvenirs éternels'}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '10+', text: 'سنوات من الخبرة', textFr: "Ans d'expérience" },
              { number: '1000+', text: 'عميل سعيد', textFr: 'Clients satisfaits' },
              { number: '100%', text: 'جودة ملكية', textFr: 'Qualité royale' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-600/30 rounded-lg p-8 hover:border-yellow-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20">
                  <div className="text-5xl font-bold text-yellow-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-light">
                    {isAr ? stat.text : stat.textFr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
