import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Articles from './components/Articles';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState<'fr' | 'ar'>('fr');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'Royaume des Dragées - مملكة الدراجيه'
        : 'Royaume des Dragées - Boutique de célébrations en Tunisie';
  }, [lang]);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navigation lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Articles lang={lang} />
        <Gallery lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
