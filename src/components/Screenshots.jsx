import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import homeImg from '../assets/home.jpeg';
import calenderImg from '../assets/calender.jpeg';
import insightsImg from '../assets/insights.jpeg';
import logImg from '../assets/log.jpeg';
import settingsImg from '../assets/settings.jpeg';

const screenshots = [
  { img: homeImg, title: 'Overview', desc: 'Summary of your current cycle' },
  { img: calenderImg, title: 'Calendar', desc: 'Track and predict future dates' },
  { img: logImg, title: 'Log Daily', desc: 'Note moods and symptoms' },
  { img: insightsImg, title: 'Insights', desc: 'Understand your body better' },
  { img: settingsImg, title: 'Settings', desc: 'Customize your experience' },
];

const Screenshots = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <section id="screenshots" className="py-24 bg-brand-surface/20">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Experience the <br />
              <span className="text-gradient">LunaFlow Interface</span>
            </motion.h2>
            <p className="text-lg text-brand-muted">
              Every screen is designed with intention—clean layouts, soft colors, and a focus on your emotional wellbeing.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="h-1.5 w-32 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand-primary"
                style={{ scaleX: scrollXProgress, transformOrigin: '0%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-12 px-6 md:px-[10%] gap-8 no-scrollbar snap-x snap-mandatory"
      >
        {screenshots.map((screen, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
          >
            <div className="relative group">
              <div className="aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#2a2a2a] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={screen.img} 
                  alt={screen.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1">{screen.title}</h3>
                <p className="text-brand-muted text-sm">{screen.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer for ending padding */}
        <div className="flex-shrink-0 w-[5%] md:w-[10%]" />
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Screenshots;
