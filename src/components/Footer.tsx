import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';

type Lang = 'fr' | 'ar';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const isAr = lang === 'ar';

  const whatsappNumber = useMemo(() => '21658132208', []);
  const phoneNumberE164 = useMemo(() => '+21658132208', []);
  const [message, setMessage] = useState('');

  const openWhatsApp = () => {
    const trimmed = message.trim();
    const text = trimmed.length > 0
      ? trimmed
      : isAr
        ? 'مرحبا، أريد الاستفسار عن خدمة/مناسبة.'
        : 'Bonjour, je souhaite demander des informations / un devis.';

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-black via-[#15111a] to-black border-t border-yellow-600/30" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 14% 24%, rgba(34, 211, 238, 0.22) 0, transparent 22%), radial-gradient(circle at 84% 20%, rgba(251, 191, 36, 0.22) 0, transparent 22%), radial-gradient(circle at 20% 86%, rgba(244, 114, 182, 0.18) 0, transparent 26%), radial-gradient(circle at 80% 82%, rgba(163, 230, 53, 0.14) 0, transparent 26%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
              Royaume des Dragées
            </h3>
            <p className="text-gray-400 leading-relaxed" dir={isAr ? 'rtl' : 'ltr'}>
              {isAr
                ? 'مملكة الدراجيه - حيث تتحول كل احتفالاتك إلى ذكريات ملكية خالدة'
                : 'Royaume des Dragées — une expérience raffinée pour vos plus beaux moments en Tunisie.'}
            </p>
            <p className="text-yellow-600/70 italic mt-2" dir={isAr ? 'rtl' : 'ltr'}>
              {isAr ? 'مملكتك للاحتفالات' : 'Votre royaume de célébrations'}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-yellow-600 mb-4" dir={isAr ? 'rtl' : 'ltr'}>
              {isAr ? 'تواصل معنا' : 'Nous contacter'}
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${phoneNumberE164}`}
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-600 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span dir="ltr">{phoneNumberE164}</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-600 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
              </a>
              <a
                href="mailto:contact@royaumedesdragees.tn"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-600 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>contact@royaumedesdragees.tn</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span dir={isAr ? 'rtl' : 'ltr'}>{isAr ? 'تونس، تونس العاصمة' : 'Tunis, Tunisie'}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-yellow-600 mb-4" dir={isAr ? 'rtl' : 'ltr'}>
              {isAr ? 'تابعونا' : 'Suivez-nous'}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-600/30 rounded-full flex items-center justify-center text-yellow-600 hover:border-yellow-600/60 hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-600/30 rounded-full flex items-center justify-center text-yellow-600 hover:border-yellow-600/60 hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8">
              <h5 className="text-yellow-600/80 mb-3" dir={isAr ? 'rtl' : 'ltr'}>
                {isAr ? 'ساعات العمل' : 'Horaires'}
              </h5>
              <p className="text-gray-400 text-sm" dir={isAr ? 'rtl' : 'ltr'}>
                {isAr ? 'الإثنين - السبت' : 'Lundi - Samedi'}<br />
                9:00 - 18:00
              </p>
            </div>

            <div className="mt-8">
              <h5 className="text-yellow-600/80 mb-3" dir={isAr ? 'rtl' : 'ltr'}>
                {isAr ? 'أرسل طلباً سريعاً' : 'Envoyer une demande rapide'}
              </h5>

              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  openWhatsApp();
                }}
                className="space-y-3"
              >
                <textarea
                  value={message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  rows={4}
                  placeholder={
                    isAr
                      ? 'اكتب رسالتك هنا (نوع المناسبة، التاريخ، عدد الضيوف...)'
                      : 'Écrivez votre message (type d’événement, date, nombre d’invités...)'
                  }
                  className="w-full rounded-xl bg-black/40 border border-yellow-600/20 focus:border-yellow-600/60 outline-none px-4 py-3 text-gray-200 placeholder:text-gray-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all"
                >
                  {isAr ? 'إرسال على واتساب' : 'Envoyer sur WhatsApp'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-yellow-600/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Royaume des Dragées. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm" dir={isAr ? 'rtl' : 'ltr'}>
              {isAr ? 'جميع الحقوق محفوظة' : 'Tous droits réservés.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
