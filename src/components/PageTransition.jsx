import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <motion.div
      initial={{ height: '100vh' }}
      animate={{ height: 0 }}
      transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 1.5 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center w-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.1em' }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.05], letterSpacing: ['0.1em', '0.2em', '0.2em', '0.3em'] }}
        transition={{ duration: 1.5, times: [0, 0.3, 0.8, 1], ease: "easeInOut" }}
        className="text-white text-2xl font-serif font-bold tracking-widest uppercase"
      >
        Awan.
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;
