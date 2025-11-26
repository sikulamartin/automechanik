import React from 'react';
import { Activity, Car, Settings, Disc, ShieldCheck, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    id: 'diag',
    title: 'Diagnostika vozidla',
    description: 'Moderní vybavení pro rychlé určení závady. Přečteme chyby řídící jednotky a navrhneme řešení.',
    Icon: Activity,
  },
  {
    id: 'engine',
    title: 'Opravy motoru',
    description: 'Komplexní servis motorů a převodovek. Výměny rozvodů, těsnění, spojky a další mechanické práce.',
    Icon: Settings,
  },
  {
    id: 'brakes',
    title: 'Brzdy a podvozek',
    description: 'Výměna destiček, kotoučů, tlumičů i ramen. Bezpečnost vašeho vozu je pro nás prioritou.',
    Icon: Disc,
  },
  {
    id: 'oil',
    title: 'Výměna oleje',
    description: 'Pravidelný servis, výměna filtrů a provozních kapalin. Používáme pouze kvalitní oleje.',
    Icon: Wrench,
  },
  {
    id: 'stk',
    title: 'Příprava na STK',
    description: 'Prohlédneme auto, opravíme nedostatky a zajistíme hladký průběh technické kontroly.',
    Icon: ShieldCheck,
  },
  {
    id: 'tires',
    title: 'Pneuservis',
    description: 'Přezutí, vyvážení a kontrola tlaku. Sezónní uskladnění vašich kol přímo v servisu.',
    Icon: Car,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-condensed font-bold text-heading mb-4 uppercase tracking-tight">
            S čím vám pomůžeme
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kompletní péče o vaše auto pod jednou střechou. Závada? Vyřešíme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-light p-8 rounded-lg group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                <service.Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
