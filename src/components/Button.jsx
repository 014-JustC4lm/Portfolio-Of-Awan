import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-none font-medium transition-all duration-300 tracking-wide flex items-center justify-center";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-text hover:text-base border border-transparent",
    secondary: "bg-transparent border border-text text-text hover:bg-text hover:text-base",
    ghost: "bg-transparent text-text hover:text-accent p-0",
    outline: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
