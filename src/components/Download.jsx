import { motion } from 'framer-motion';
import { Download, Info } from 'lucide-react';
import { GitHub, Android } from './Icons';

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to find <span className="text-gradient">your flow?</span>
            </h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Join thousands of women who track their cycle with confidence, comfort, and complete privacy.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              <a 
                href="https://github.com/blitzbugg/luna-flow/releases/download/v1.0.0/LunaFlow-v1.0.0.apk" 
                className="btn-primary py-5 px-10 text-xl group"
              >
                <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                Download APK
              </a>
              <a 
                href="https://github.com/blitzbugg/luna-flow" 
                target="_blank"
                className="btn-secondary py-5 px-10 text-xl"
              >
                <GitHub size={24} />
                View on GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-brand-muted bg-white/5 px-6 py-3 rounded-full border border-white/5"
            >
              <Android size={18} />
              <span>Compatible with Android 8.0+</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-muted/30" />
              <Info size={18} />
              <span>v1.0.0 (90MB)</span>
            </motion.div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-primary/10 rounded-full blur-[120px] z-0" />
      </div>
    </section>
  );
};

export default DownloadSection;
