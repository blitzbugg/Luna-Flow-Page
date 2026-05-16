import { motion } from 'framer-motion';
import { Download, Heart, Shield, Sparkles } from 'lucide-react';
import { GitHub } from './Icons';
import homeImg from '../assets/home.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="gradient-blob top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary" />
      <div className="gradient-blob bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-secondary" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            <span>Version 1.0.0 Now Available</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Track your cycle with <br />
            <span className="text-gradient">Clarity & Comfort.</span>
          </h1>
          
          <p className="text-xl text-brand-muted mb-10 max-w-lg leading-relaxed">
            LunaFlow is a simple and elegant period tracking application designed to help you track your cycle, moods, and wellness with total privacy.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/blitzbugg/luna-flow/releases/download/v1.0.0/LunaFlow-v1.0.0.apk" className="btn-primary">
              <Download size={20} />
              Download APK
            </a>
            <a href="https://github.com/blitzbugg/luna-flow" target="_blank" className="btn-secondary">
              <GitHub size={20} />
              View on GitHub
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-brand-muted">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-brand-secondary" />
              <span className="text-sm">100% Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-brand-primary" />
              <span className="text-sm">Made for You</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Phone Mockup */}
          <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden z-20">
            <img 
              src={homeImg} 
              alt="LunaFlow App Home" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating UI Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-16 md:-left-24 z-30 glass-card p-4 rounded-2xl w-48 hidden sm:block"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Heart size={16} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase tracking-wider font-bold">Today's Mood</p>
                <p className="text-sm font-semibold">Feeling Calm</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-20 -right-16 md:-right-20 z-30 glass-card p-4 rounded-2xl w-52 hidden sm:block"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase tracking-wider font-bold">Cycle Insight</p>
                <p className="text-sm font-semibold">Fertile Window Soon</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-3xl z-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
