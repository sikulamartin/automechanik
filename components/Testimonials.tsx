import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';
import { motion } from 'framer-motion';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Petr Svoboda',
    rating: 5,
    text: 'Rychlá oprava, nic nenatahoval. Potřeboval jsem vyměnit brzdy před dovolenou a pan Novák mi vyšel vstříc i o víkendu.',
  },
  {
    id: '2',
    name: 'Jana Malá',
    rating: 5,
    text: 'Poctivý přístup, doporučuju. V autorizáku mi řekli výměnu celého dílu za 20 tisíc, tady to opravili za zlomek ceny.',
  },
  {
    id: '3',
    name: 'Tomáš Dvořák',
    rating: 5,
    text: 'Vysvětlil závadu, férová cena. Konečně mechanik, kterému se dá věřit. Už jezdím jen sem.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-condensed font-bold mb-4 uppercase">
            Co o nás říkají řidiči
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#2A2A2A] p-8 rounded-lg border border-gray-700 relative"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold text-sm">
                    {review.name.charAt(0)}
                </div>
                <span className="font-bold font-condensed uppercase tracking-wide text-sm text-gray-100">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
                Průměrné hodnocení <strong>4.9/5</strong> na Google Reviews
            </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
