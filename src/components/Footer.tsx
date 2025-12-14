import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black border-t border-yellow-600/30">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
              Royaume des Dragées
            </h3>
            <p className="text-gray-400 leading-relaxed" dir="rtl">
              مملكة الدراجيه - حيث تتحول كل احتفالاتك إلى ذكريات ملكية خالدة
            </p>
            <p className="text-yellow-600/70 italic mt-2">
              Votre royaume de célébrations
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-yellow-600 mb-4" dir="rtl">
              تواصل معنا
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+216XXXXXXXX"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-600 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span dir="ltr">+216 XX XXX XXX</span>
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
                <span dir="rtl">تونس، تونس العاصمة</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-yellow-600 mb-4" dir="rtl">
              تابعونا
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
              <h5 className="text-yellow-600/80 mb-3" dir="rtl">ساعات العمل</h5>
              <p className="text-gray-400 text-sm" dir="rtl">
                الإثنين - السبت<br />
                9:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-yellow-600/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Royaume des Dragées. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm" dir="rtl">
              جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
