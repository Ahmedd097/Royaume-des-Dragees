import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Royaume des Dragées - مملكة الدراجيه';
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
