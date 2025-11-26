import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-dark overflow-hidden pt-24 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1070/1920/1080?grayscale&blur=2"
          alt="Car Mechanic Workshop"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded bg-white/10 border border-white/20 text-gray-300 text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
            Poctivý lokální servis
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-condensed font-bold text-white leading-tight mb-6">
            Rychlý a férový autoservis <br />
            <span className="text-primary">ve vašem městě.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Opravy, diagnostika, příprava na STK. Žádné zbytečné řeči, jen poctivá práce za předem domluvenou cenu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-primary hover:bg-blue-700 text-white text-lg px-8 py-4 rounded font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2"
            >
              Objednat termín
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="text-white hover:text-primary px-8 py-4 font-medium transition-colors"
            >
              Naše služby
            </a>
          </div>
        </motion.div>

        {/* Features Row */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-400 text-sm md:text-base"
        >
            <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} />
                <span>Transparentní ceník</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} />
                <span>Rychlé opravy</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} />
                <span>Osobní přístup</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;