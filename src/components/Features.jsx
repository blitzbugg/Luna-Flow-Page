import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Sparkles, Bell, Layout, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Smart Calendar Tracking',
    description: 'Effortlessly log your period dates and visualize your cycle history in a beautiful, intuitive calendar.',
    icon: Calendar,
    color: 'from-pink-400 to-rose-400',
  },
  {
    title: 'Mood & Symptom Logging',
    description: 'Keep track of how you feel throughout your cycle with elegant mood and symptom categories.',
    icon: Heart,
    color: 'from-rose-400 to-red-400',
  },
  {
    title: 'Fertility Insights',
    description: 'Stay informed about your fertile window and ovulation dates with smart predictive insights.',
    icon: Sparkles,
    color: 'from-purple-400 to-indigo-400',
  },
  {
    title: 'Gentle Reminders',
    description: 'Receive thoughtful, customizable notifications for your upcoming period and fertile window.',
    icon: Bell,
    color: 'from-amber-400 to-orange-400',
  },
  {
    title: 'Elegant Minimal UI',
    description: 'A distraction-free interface designed to be soft, calming, and easy to navigate.',
    icon: Layout,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Privacy First',
    description: 'Your health data is sensitive. That\'s why we store everything locally on your device. No cloud, no tracking.',
    icon: ShieldCheck,
    color: 'from-emerald-400 to-teal-400',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Everything you need for <br />
            <span className="text-gradient">Cycle Wellness</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted"
          >
            Designed with a focus on simplicity and emotional comfort, LunaFlow brings you essential features without the clutter.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[2.5rem] relative group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-white/5`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-brand-muted leading-relaxed">
                {feature.description}
              </p>
              
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <feature.icon size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
