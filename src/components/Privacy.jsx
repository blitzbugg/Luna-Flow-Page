import React from 'react';
import { motion } from 'framer-motion';
import { Lock, EyeOff, Database, ShieldCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <section id="privacy" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Background Decoration */}
          <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-brand-primary opacity-10 blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-brand-secondary opacity-10 blur-[80px]" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-8"
              >
                <Lock size={32} />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              >
                Your data is <span className="text-brand-primary">private.</span> <br />
                Period.
              </motion.h2>
              
              <div className="space-y-6">
                {[
                  { icon: EyeOff, title: 'No Tracking', desc: 'We don\'t track your usage, habits, or location.' },
                  { icon: Database, title: 'Local Storage', desc: 'All your cycle data stays securely on your phone.' },
                  { icon: ShieldCheck, title: 'No Cloud', desc: 'No servers, no accounts, no data breaches.' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 p-1 rounded-full bg-brand-secondary/20 text-brand-secondary h-fit">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-brand-muted">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="w-full aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full flex items-center justify-center relative">
                <div className="w-[80%] h-[80%] bg-brand-bg rounded-full border border-white/5 shadow-inner flex items-center justify-center">
                  <div className="text-center p-8">
                    <ShieldCheck size={80} className="text-brand-primary mx-auto mb-4 opacity-50" />
                    <p className="text-xl font-medium text-brand-text/60 italic">"Designed with privacy <br /> in mind."</p>
                  </div>
                </div>
                {/* Orbital dots */}
                <div className="absolute top-[10%] left-[15%] w-4 h-4 bg-brand-primary rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-3 h-3 bg-brand-secondary rounded-full animate-pulse delay-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
