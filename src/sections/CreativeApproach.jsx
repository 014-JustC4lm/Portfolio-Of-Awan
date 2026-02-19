import { motion } from 'framer-motion';

const CreativeApproach = () => {
  return (
    <section className="py-24 md:py-32 bg-text text-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-6">Philosophy</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-4xl mx-auto">
            "Visuals are not just about what you see, but what you <span className="italic text-accent">feel</span>. I craft stories that linger."
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeApproach;
