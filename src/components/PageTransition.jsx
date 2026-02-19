import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <motion.div
      initial={{ height: '100vh' }}
      animate={{ height: 0 }}
      transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center w-full"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white text-2xl font-serif font-bold tracking-widest uppercase"
      >
        Awan.
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;
