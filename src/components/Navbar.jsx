import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { GitHub } from './Icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Privacy', href: '#privacy' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-nav' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/20">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-2xl font-bold font-sans tracking-tight text-white">
            Luna<span className="text-brand-primary">Flow</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-brand-text/70 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <a 
              href="https://github.com/blitzbugg/luna-flow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-brand-text/60 hover:text-white transition-colors"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://github.com/blitzbugg/luna-flow/releases/download/v1.0.0/LunaFlow-v1.0.0.apk"
              className="btn-primary py-2 px-5 text-sm"
            >
              <Download size={16} />
              Download APK
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-brand-text/80 hover:text-brand-primary"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <div className="flex items-center justify-between">
                <a 
                  href="https://github.com/blitzbugg/luna-flow" 
                  target="_blank"
                  className="flex items-center gap-2 text-brand-text/60"
                >
                  <GitHub size={20} /> GitHub
                </a>
                <a 
                  href="https://github.com/blitzbugg/luna-flow/releases/download/v1.0.0/LunaFlow-v1.0.0.apk"
                  className="btn-primary py-2 px-4 text-sm"
                >
                  <Download size={16} /> Download
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
