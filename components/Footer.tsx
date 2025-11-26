import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-condensed font-bold text-white text-lg uppercase tracking-wider">
            Autoservis Mechanik Novák
          </span>
          <p className="text-xs mt-1">© {new Date().getFullYear()} Všechna práva vyhrazena.</p>
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-primary transition-colors">Ochrana osobních údajů</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
