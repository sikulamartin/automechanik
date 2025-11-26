import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench, BadgeEuro, Users, Phone, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // If logo clicked (href="#"), scroll to top
    if (href === '#') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return;
    }

    // Find the element
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Služby', href: '#services', icon: Wrench },
    { name: 'Ceník', href: '#prices', icon: BadgeEuro },
    { name: 'O nás', href: '#about', icon: Users },
    { name: 'Kontakt', href: '#contact', icon: Phone },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 z-50 relative">
            <div className={`p-2 rounded-full transition-colors duration-300 ${scrolled || isOpen ? 'bg-primary text-white' : 'bg-white text-dark'}`}>
                <Wrench size={20} />
            </div>
            <a 
                href="#" 
                onClick={(e) => handleScroll(e, '#')}
                className={`font-condensed font-bold text-xl uppercase tracking-wider transition-colors duration-300 ${scrolled || isOpen ? 'text-dark' : 'text-white'}`}
            >
              Mechanik Novák
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors ${scrolled ? 'text-heading' : 'text-gray-200'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded font-condensed font-bold uppercase tracking-wide transition-colors shadow-md hover:shadow-lg"
            >
              Objednat termín
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || isOpen ? 'text-dark' : 'text-white'} hover:text-primary focus:outline-none transition-colors p-2`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl overflow-hidden absolute w-full top-full left-0"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="flex items-center gap-4 px-4 py-4 text-base font-medium text-heading hover:text-primary hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100 last:border-0"
                >
                  <div className="bg-blue-50 text-primary p-2 rounded-md">
                    <link.icon size={20} />
                  </div>
                  <span className="uppercase tracking-wide">{link.name}</span>
                  <ArrowRight size={16} className="ml-auto opacity-30" />
                </motion.a>
              ))}
              
              <motion.div variants={itemVariants} className="pt-2 mt-2">
                <a
                  href="tel:+420123456789"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white px-5 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <Phone size={20} />
                  Zavolat mechanikovi
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="w-full mt-3 flex items-center justify-center gap-2 border-2 border-primary/20 text-primary px-5 py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-primary/5 transition-colors"
                >
                  <Calendar size={20} />
                  Objednat termín
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;