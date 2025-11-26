import React from 'react';
import { PriceItem } from '../types';
import { motion } from 'framer-motion';

const prices: PriceItem[] = [
  { service: 'Diagnostika vozidla', price: '500 Kč' },
  { service: 'Výměna oleje (práce)', price: '900 Kč' },
  { service: 'Oprava brzd (náprava)', price: '1 200 Kč' },
  { service: 'Přezutí pneu (komplet)', price: '800 Kč' },
  { service: 'Příprava a zajištění STK', price: '1 500 Kč' },
  { service: 'Hodinová sazba mechanika', price: '700 Kč' },
];

const PriceList: React.FC = () => {
  return (
    <section id="prices" className="py-20 bg-light border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-heading p-8 text-center">
            <h2 className="text-3xl font-condensed font-bold text-white uppercase tracking-wider">
              Orientační Ceník
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Žádné skryté poplatky. Opravím, vysvětlím, nacením férově.
            </p>
          </div>
          
          <div className="p-6 md:p-10">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="text-left py-4 text-gray-500 font-medium uppercase text-sm tracking-wider w-2/3">Služba</th>
                  <th className="text-right py-4 text-gray-500 font-medium uppercase text-sm tracking-wider">Cena od</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {prices.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 text-heading font-medium">{item.service}</td>
                    <td className="py-4 text-right text-primary font-bold font-condensed text-lg">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 text-center">
                <p className="text-xs text-gray-400 italic">
                    * Ceny jsou orientační a mohou se lišit dle modelu vozu a náročnosti opravy.
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceList;
