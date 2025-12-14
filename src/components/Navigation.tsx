import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'الرئيسية', labelFr: 'Accueil' },
  { id: 'about', label: 'من نحن', labelFr: 'À propos' },
  { id: 'services', label: 'خدماتنا', labelFr: 'Services' },
  { id: 'articles', label: 'مقالات', labelFr: 'Articles' },
  { id: 'gallery', label: 'المعرض', labelFr: 'Galerie' },
  { id: 'contact', label: 'اتصل بنا', labelFr: 'Contact' },
];

type Lang = 'fr' | 'ar';

interface NavigationProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Navigation({ lang, setLang }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-900/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 transition-all"
            >
              Royaume des Dragées
            </button>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-yellow-600 transition-colors text-lg font-light relative group"
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                >
                  {lang === 'ar' ? item.label : item.labelFr}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                className="px-4 py-2 rounded-full border border-yellow-600/40 text-yellow-600 hover:border-yellow-600/70 hover:text-yellow-400 transition-all text-sm"
                aria-label={lang === 'ar' ? 'Changer la langue en Français' : 'تغيير اللغة إلى العربية'}
              >
                {lang === 'ar' ? 'FR' : 'AR'}
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-yellow-600 hover:text-yellow-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => {
                setLang(lang === 'fr' ? 'ar' : 'fr');
              }}
              className="px-6 py-3 rounded-full border border-yellow-600/40 text-yellow-600 hover:border-yellow-600/70 hover:text-yellow-400 transition-all text-lg"
              aria-label={lang === 'ar' ? 'Changer la langue en Français' : 'تغيير اللغة إلى العربية'}
            >
              {lang === 'ar' ? 'FR' : 'AR'}
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-3xl text-gray-300 hover:text-yellow-600 transition-colors font-light"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              >
                {lang === 'ar' ? item.label : item.labelFr}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
