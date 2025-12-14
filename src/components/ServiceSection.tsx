import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  features: string[];
  isReverse?: boolean;
}

export default function ServiceSection({
  id,
  icon: Icon,
  title,
  titleFr,
  description,
  descriptionFr,
  features,
  isReverse = false,
}: ServiceSectionProps) {
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
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-24 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className={`relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-dense' : ''}`}>
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : `${isReverse ? 'translate-x-12' : '-translate-x-12'} opacity-0`
          } ${isReverse ? 'lg:col-start-2' : ''}`}
        >
          <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-600/30 rounded-2xl p-12 hover:border-yellow-600/60 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-900/20">
            <div className="inline-block p-4 bg-gradient-to-br from-yellow-600/20 to-yellow-700/10 rounded-full mb-6">
              <Icon className="w-12 h-12 text-yellow-600" />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-3" dir="rtl">
              {title}
            </h3>

            <p className="text-yellow-600/80 italic text-xl mb-6">
              {titleFr}
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-yellow-600 to-transparent mb-6" />

            <p className="text-gray-300 text-lg leading-relaxed mb-8" dir="rtl">
              {description}
            </p>

            <p className="text-gray-400 italic mb-8">
              {descriptionFr}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transform transition-all duration-500 delay-${index * 100} ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  dir="rtl"
                >
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300 text-lg font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : `${isReverse ? '-translate-x-12' : 'translate-x-12'} opacity-0`
          } ${isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-black/60 z-10 group-hover:from-yellow-900/30 group-hover:to-black/40 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <Icon className="w-48 h-48 text-yellow-600/30 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
