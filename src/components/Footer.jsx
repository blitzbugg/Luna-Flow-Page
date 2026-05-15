import React from 'react';
import { Heart } from 'lucide-react';
import { GitHub } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              LunaFlow
            </span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">Features</a>
            <a href="#screenshots" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">Screenshots</a>
            <a href="#privacy" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">Privacy</a>
            <a href="https://github.com/blitzbugg/luna-flow" target="_blank" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">GitHub</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-brand-muted">
            &copy; {currentYear} LunaFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-brand-muted">
            <span>Version 1.0.0</span>
            <span className="w-1 h-1 rounded-full bg-brand-muted/30" />
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-brand-muted/30" />
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart size={12} className="text-brand-primary fill-brand-primary" />
              <span>for women</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
