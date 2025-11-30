import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Users, Calendar, Coffee } from 'lucide-react';

const stats = [
  { label: 'Let zkušeností', value: '20+', icon: Calendar },
  { label: 'Opravených vozů', value: '5 000+', icon: Wrench },
  { label: 'Stálých klientů', value: '850+', icon: Users },
  { label: 'Vypitých káv', value: '12 000+', icon: Coffee },
];

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-primary text-white relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4"
            >
              <div className="bg-white/20 p-3 rounded-full mb-3">
                <stat.icon size={24} className="text-white" />
              </div>
              <span className="text-3xl md:text-4xl font-condensed font-bold mb-1">{stat.value}</span>
              <span className="text-sm md:text-base text-blue-100 uppercase tracking-wide font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;