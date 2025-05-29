'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const Block = ({ className, delay = 0, children, ...rest }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
        delay: delay,
      }}
      className={twMerge(
        'col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6',
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
