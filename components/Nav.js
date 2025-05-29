'use client';

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Nav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest < lastScrollY || latest < 100) {
      setVisible(true);
    } else if (latest > 100 && latest > lastScrollY) {
      setVisible(false);
    }
    setLastScrollY(latest);
  });

  return (
    <div className="fixed left-[50%] top-8 -translate-x-[50%] z-50">
      <motion.nav
        className="flex w-fit items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 pt-2 pb-2 p-5 text-sm text-neutral-500"
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </motion.nav>
    </div>
  );
}

const JoinButton = ({ children }) => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}
    >
      {children}
    </button>
  );
};

const NavButton = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <JoinButton>{children}</JoinButton>
    </a>
  );
};

const NavLink = ({ children, href }) => {
  return (
    <a href={href} rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: 'backInOut', duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </a>
  );
};
