import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">O dílně</h4>
            <h2 className="text-4xl font-condensed font-bold text-heading mb-6 uppercase">
              20 let praxe, jeden cíl: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-800">Spokojený řidič.</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Jmenuji se <strong>Jan Novák</strong> a auta jsou můj život. Jsme malý rodinný autoservis, který si nezakládá na nablýskaném showroomu, ale na poctivě odvedené práci pod kapotou.
              </p>
              <p>
                Začínal jsem v autorizovaných servisech, kde mě štvalo, že se se zákazníky nejedná narovinu. Proto jsem si otevřel vlastní dílnu. Zakládám si na férovém jednání a jasném vysvětlení problému. 
              </p>
              <p className="font-medium text-heading border-l-4 border-primary pl-4 py-1 italic bg-gray-50">
                „Vaše auto. Moje starost. U mě vždy víte, co platíte a proč.“
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-1 lg:order-2 relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://www.autotrainingcentre.com/wp-content/uploads/2015/09/Top-5-Most-Common-Repairs-Youll-Encounter-in-an-Auto-Repair-Career.jpg" 
                alt="Mechanik v dílně" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-condensed font-bold">20+</p>
              <p className="text-sm uppercase tracking-wider opacity-90">Let praxe</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
