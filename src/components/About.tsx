import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
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

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8" dir="rtl">
            مملكة الاحتفالات الملكية
          </h2>

          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
            <p dir="rtl" className="font-light">
              في مملكة الدراجيه، نؤمن بأن كل لحظة من لحظات حياتك تستحق أن تُحتفل بها بأسلوب ملكي
            </p>

            <p dir="rtl" className="font-light">
              من فرحة الولادة الأولى إلى بهجة الزفاف، من تألق التخرج إلى سعادة المناسبات الخاصة
            </p>

            <p className="text-yellow-600/90 italic text-xl mt-8">
              Nous transformons vos célébrations en souvenirs éternels
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
                className={`transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-600/30 rounded-lg p-8 hover:border-yellow-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20">
                  <div className="text-5xl font-bold text-yellow-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-light" dir="rtl">
                    {stat.text}
                  </div>
                  <div className="text-yellow-600/70 text-sm italic mt-1">
                    {stat.textFr}
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
