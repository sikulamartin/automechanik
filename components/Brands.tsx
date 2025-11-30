import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Škoda', 'Volkswagen', 'Audi', 'BMW', 
  'Ford', 'Toyota', 'Hyundai', 'Kia',
  'Mercedes-Benz', 'Peugeot', 'Renault', 'Seat'
];

const Brands: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
          Servisujeme vozy všech běžných značek
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-condensed font-bold text-heading hover:text-primary cursor-default transition-colors"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;