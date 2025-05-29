import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiVercel,
  SiFirebase,
  SiGit,
} from 'react-icons/si';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="w-full ">
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          x: [0, 5, -5, 5, 0],
          transition: {
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
        className="text-4xl font-bold md:text-5xl pb-10 pt-10"
      >
        Here&apos;s
        <span className="text-blue-600"> my tech stack!</span>
      </motion.h2>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {TECH_STACK.map((tech) => (
          <motion.div
            key={tech.name}
            variants={item}
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}
            className="group relative"
          >
            <div className="relative p-6 bg-zinc-800 border border-zinc-700 rounded-xl shadow-lg overflow-hidden">
              <motion.div
                initial={false}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="flex flex-col items-center gap-4"
              >
                <tech.Icon
                  className={`text-4xl md:text-5xl ${tech.colorClass}`}
                />
                <span className="text-sm md:text-base font-medium text-gray-300">
                  {tech.name}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className={`absolute inset-0 ${tech.bgClass}`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const TECH_STACK = [
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    colorClass: 'text-yellow-400',
    bgClass: 'bg-yellow-400',
  },
  {
    name: 'React',
    Icon: SiReact,
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-400',
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs,
    colorClass: 'text-green-500',
    bgClass: 'bg-green-500',
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
    colorClass: 'text-white',
    bgClass: 'bg-white',
  },
  {
    name: 'Python',
    Icon: SiPython,
    colorClass: 'text-green-400',
    bgClass: 'bg-green-600',
  },
  {
    name: 'MongoDB',
    Icon: SiMongodb,
    colorClass: 'text-green-600',
    bgClass: 'bg-green-600',
  },
  {
    name: 'PostgreSQL',
    Icon: SiPostgresql,
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-600',
  },
  {
    name: 'Docker',
    Icon: SiDocker,
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-500',
  },
  {
    name: 'TailwindCSS',
    Icon: SiTailwindcss,
    colorClass: 'text-cyan-500',
    bgClass: 'bg-cyan-500',
  },
  {
    name: 'Vercel',
    Icon: SiVercel,
    colorClass: 'text-white',
    bgClass: 'bg-white',
  },
  {
    name: 'Firebase',
    Icon: SiFirebase,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-500',
  },
  {
    name: 'Git',
    Icon: SiGit,
    colorClass: 'text-red-500',
    bgClass: 'bg-red-500',
  },
];

export default TechStack;
