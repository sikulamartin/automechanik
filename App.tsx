import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import PriceList from './components/PriceList';
import About from './components/About';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="antialiased text-heading bg-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <About />
        <Brands />
        <PriceList />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Sticky Mobile Call Button */}
      <div className="fixed bottom-0 w-full md:hidden z-40">
        <a 
          href="tel:+420123456789"
          className="flex items-center justify-center gap-2 bg-primary text-white font-bold uppercase py-4 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] hover:bg-blue-700 transition-colors"
        >
          <Phone size={20} />
          Zavolat mechanikovi
        </a>
      </div>
    </div>
  );
};

export default App;