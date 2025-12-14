import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

type Lang = 'fr' | 'ar';

interface ContactProps {
  lang: Lang;
}

export default function Contact({ lang }: ContactProps) {
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
  const whatsappNumber = '21658132208';
  const phoneNumberE164 = '+21658132208';

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#15111a] to-black py-24 px-4"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(34, 211, 238, 0.26) 0, transparent 22%), radial-gradient(circle at 88% 18%, rgba(251, 191, 36, 0.24) 0, transparent 22%), radial-gradient(circle at 18% 86%, rgba(244, 114, 182, 0.20) 0, transparent 26%), radial-gradient(circle at 82% 80%, rgba(163, 230, 53, 0.18) 0, transparent 26%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-block mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            {isAr ? 'اتصل بنا' : 'Contactez-nous'}
          </h2>

          <p className="text-gray-300 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? 'قُل لنا عن مناسبتك، وسنقترح عليك تجربة ملكية تناسب ذوقك. تواصل معنا عبر الهاتف، واتساب، أو البريد الإلكتروني.'
              : 'Parlez-nous de votre événement et nous vous proposerons une expérience royale à votre image. Contactez-nous par téléphone, WhatsApp ou e-mail.'}
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-600/30 rounded-2xl p-10 hover:border-yellow-600/60 transition-all">
              <div className="space-y-4">
                <a
                  href={`tel:${phoneNumberE164}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-600 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-yellow-600 group-hover:scale-110 transition-transform" />
                  <span dir="ltr">{phoneNumberE164}</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-600 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-yellow-600 group-hover:scale-110 transition-transform" />
                  <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                </a>

                <a
                  href="mailto:contact@royaumedesdragees.tn"
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-600 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-yellow-600 group-hover:scale-110 transition-transform" />
                  <span>contact@royaumedesdragees.tn</span>
                </a>

                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <span>{isAr ? 'تونس، تونس العاصمة' : 'Tunis, Tunisie'}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black/40 to-yellow-900/10 border border-yellow-600/30 rounded-2xl p-10">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                {isAr ? 'ما الذي تحتاجه؟' : 'De quoi avez-vous besoin ?'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {isAr
                  ? 'أرسل لنا: نوع المناسبة، التاريخ، المكان، وعدد الضيوف. سنعاود الاتصال بك سريعاً.'
                  : 'Envoyez-nous : type d’événement, date, lieu, nombre d’invités. Nous vous répondrons rapidement.'}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:contact@royaumedesdragees.tn?subject=Demande%20de%20devis%20-%20Royaume%20des%20Drag%C3%A9es"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all text-center"
                >
                  {isAr ? 'أرسل طلباً الآن' : 'Envoyer une demande'}
                </a>
                <a
                  href="#gallery"
                  onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-full border border-yellow-600/40 text-yellow-600 hover:border-yellow-600/70 hover:text-yellow-400 transition-all text-center"
                >
                  {isAr ? 'شاهد المعرض' : 'Voir la galerie'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
