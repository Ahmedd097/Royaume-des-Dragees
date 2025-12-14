import { useEffect, useRef, useState, type MouseEvent } from 'react';

type Lang = 'fr' | 'ar';

interface GalleryProps {
  lang: Lang;
}

const images = [
  { src: '/assets/placeholders/gallery-1.svg', altFr: 'Photo de célébration (exemple)', altAr: 'صورة احتفال (مثال)' },
  { src: '/assets/placeholders/gallery-2.svg', altFr: 'Création royale (exemple)', altAr: 'إبداع ملكي (مثال)' },
  { src: '/assets/placeholders/gallery-3.svg', altFr: 'Détails élégants (exemple)', altAr: 'تفاصيل أنيقة (مثال)' },
  { src: '/assets/placeholders/gallery-4.svg', altFr: 'Décoration (exemple)', altAr: 'ديكور (مثال)' },
  { src: '/assets/placeholders/gallery-5.svg', altFr: 'Cadeaux (exemple)', altAr: 'هدايا (مثال)' },
  { src: '/assets/placeholders/gallery-6.svg', altFr: 'Dragées (exemple)', altAr: 'دراجيه (مثال)' },
];

export default function Gallery({ lang }: GalleryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isAr = lang === 'ar';

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#15111a] to-black py-24 px-4"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 22%, rgba(34, 211, 238, 0.28) 0, transparent 22%), radial-gradient(circle at 86% 16%, rgba(251, 191, 36, 0.26) 0, transparent 22%), radial-gradient(circle at 18% 84%, rgba(244, 114, 182, 0.22) 0, transparent 26%), radial-gradient(circle at 82% 78%, rgba(163, 230, 53, 0.18) 0, transparent 26%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-block mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            {isAr ? 'معرض الصور' : 'Galerie & Médias'}
          </h2>

          <p className="text-gray-300 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? 'لمحات من احتفالاتنا ولمساتنا الملكية. يمكنك لاحقاً استبدال هذه الصور بصور حقيقية داخل مجلد الأصول.'
              : 'Un aperçu de nos créations et de nos ambiances. Remplacez ces images par vos photos réelles plus tard dans le dossier assets.'}
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-2xl border border-yellow-600/30 bg-gradient-to-br from-yellow-900/10 to-black/40 hover:border-yellow-600/60 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={img.src}
                  alt={isAr ? img.altAr : img.altFr}
                  loading="lazy"
                  className="w-full h-72 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all"
            >
              {isAr ? 'اطلب عرضاً' : 'Demander un devis'}
            </a>

            <a
              href="#services"
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full border border-yellow-600/40 text-yellow-600 hover:border-yellow-600/70 hover:text-yellow-400 transition-all"
            >
              {isAr ? 'اكتشف الخدمات' : 'Voir les services'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
