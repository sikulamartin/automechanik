import React from 'react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-condensed font-bold text-heading mb-6 uppercase">
                Kde nás najdete
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Máte problém s autem? Zavolejte nebo se zastavte osobně. <br />
                <span className="font-bold text-heading">Žádné řeči, jen poctivá práce.</span>
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary"
              >
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-heading text-lg">Adresa dílny</h3>
                  <p className="text-gray-600">Průmyslová 123, 100 00 Praha</p>
                  <p className="text-sm text-gray-400 mt-1">Vjezd z ulice U Garáží</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary"
              >
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-heading text-lg">Telefon</h3>
                  <a href="tel:+420123456789" className="text-2xl font-condensed font-bold text-primary hover:underline">
                    +420 123 456 789
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Volat můžete kdykoliv 8:00 - 18:00</p>
                </div>
              </motion.div>

              <motion.div 
                 whileHover={{ x: 5 }}
                 className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary"
              >
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-heading text-lg">Otevírací doba</h3>
                  <div className="grid grid-cols-2 gap-x-8 text-gray-600 mt-1">
                    <span>Po - Pá:</span>
                    <span className="font-medium text-heading">8:00 - 17:00</span>
                    <span>So:</span>
                    <span className="font-medium text-heading">Dle domluvy</span>
                    <span>Ne:</span>
                    <span className="text-red-500">Zavřeno</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-primary">
            <h3 className="text-2xl font-condensed font-bold text-heading mb-6 uppercase">
              Rychlá objednávka
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Jan Novák"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="+420 777..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Značka auta</label>
                    <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Škoda Octavia..."
                    />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Popis problému</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Klepe něco v motoru, potřebuji výměnu oleje..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold uppercase py-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Odeslat poptávku
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">
                Ozvu se vám co nejdříve k potvrzení termínu.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
