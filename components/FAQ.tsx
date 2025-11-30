import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Mohu u vás platit kartou?',
    answer: 'Ano, přijímáme všechny běžné platební karty (Visa, Mastercard) i hotovost. Faktura pro firemní zákazníky je samozřejmostí.'
  },
  {
    question: 'Mohu si přinést vlastní náhradní díly?',
    answer: 'Preferujeme montáž našich dílů, na které vám můžeme dát plnou záruku. Pokud si přinesete vlastní, nemůžeme ručit za jejich životnost ani kompatibilitu.'
  },
  {
    question: 'Poskytujete náhradní vozidlo?',
    answer: 'Ano, po předchozí domluvě vám můžeme zapůjčit náhradní vozidlo po dobu opravy za výhodnou cenu.'
  },
  {
    question: 'Jak dlouho trvá běžná výměna oleje?',
    answer: 'Výměna oleje a filtrů obvykle trvá 45–60 minut. Můžete u nás počkat v čekárně, dát si kávu a využít Wi-Fi.'
  },
  {
    question: 'Děláte i opravy klimatizace?',
    answer: 'Ano, provádíme čištění, plnění i opravy netěsností klimatizací pro většinu typů vozidel.'
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2">
            <HelpCircle size={18} />
            <span>Poradna</span>
          </div>
          <h2 className="text-3xl font-condensed font-bold text-heading uppercase">
            Časté dotazy
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${activeIndex === index ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
              >
                <span className="font-bold text-heading text-lg font-condensed pr-8">
                  {faq.question}
                </span>
                <span className={`text-primary flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;