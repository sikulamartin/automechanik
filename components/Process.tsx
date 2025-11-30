import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Objednání',
    description: 'Zavoláte nám nebo napíšete. Domluvíme termín, který vám vyhovuje.',
    icon: PhoneCall
  },
  {
    number: '02',
    title: 'Diagnostika',
    description: 'Auto prohlédneme, zjistíme závadu a zavoláme vám přesnou cenu předem.',
    icon: Search
  },
  {
    number: '03',
    title: 'Oprava',
    description: 'Po schválení ceny se pustíme do práce. Používáme kvalitní díly.',
    icon: Wrench
  },
  {
    number: '04',
    title: 'Předání',
    description: 'Auto projedeme, zkontrolujeme a předáme vám klíče. Platíte až při převzetí.',
    icon: CheckCircle
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Průběh opravy</span>
          <h2 className="text-3xl md:text-4xl font-condensed font-bold mt-2 uppercase">
            Jak to u nás chodí?
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Žádné složitosti. Jednoduchý proces od prvního zavolání až po spokojený odjezd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-700 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-[#2A2A2A] border-4 border-dark rounded-full flex items-center justify-center mb-6 shadow-xl group hover:border-primary transition-colors duration-300">
                <step.icon size={32} className="text-primary" />
              </div>
              <span className="text-6xl font-condensed font-bold text-white/5 absolute -top-4 select-none">
                {step.number}
              </span>
              <h3 className="text-xl font-bold font-condensed uppercase mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;