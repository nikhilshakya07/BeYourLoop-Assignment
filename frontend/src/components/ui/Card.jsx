import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = false, ...rest }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Card;