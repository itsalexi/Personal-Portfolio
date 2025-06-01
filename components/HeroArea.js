'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { FiArrowRight } from 'react-icons/fi';
import { SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import Image from 'next/image';
import Avatar from '@/assets/avatar.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Block } from './Block';

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

const FancyButton = ({ children, href, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);
  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMove = (e) => {
    if (!ref.current) return;
    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const xPct = offsetX / width;
    const yPct = 1 - offsetY / height;
    const newY = 12 + yPct * 12;
    const newX = 12 + xPct * 12;
    x.set(newX);
    y.set(-newY);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={twMerge('h-16 w-full bg-zinc-900', className)}>
      <motion.a
        href={href}
        ref={ref}
        style={{ transform }}
        onMouseMove={handleMove}
        onMouseLeave={handleReset}
        onMouseDown={handleReset}
        className="group flex h-full w-full items-center justify-between border border-zinc-700 bg-zinc-800 px-6 text-lg font-semibold"
      >
        <span className="relative overflow-hidden">
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
            {children}
          </span>
          <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            {children}
          </span>
        </span>
        <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
          <FiArrowRight className="shrink-0 -translate-x-full text-pink-500 transition-transform duration-300 group-hover:translate-x-0" />
          <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
        </div>
      </motion.a>
    </div>
  );
};

const HeroArea = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="w-full mx-auto grid grid-flow-dense grid-cols-12 gap-4"
    >
      <HeaderBlock />
      <SocialsBlock />
      <AboutBlock />
    </motion.div>
  );
};

export default HeroArea;

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <div className="mb-4 w-14 min-h-14 relative">
      <Image
        src={Avatar}
        alt="avatar"
        className="rounded-full"
        fill
        sizes="(max-width: 768px) 56px, 56px"
        priority={true}
        loading="eager"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <h1 className="mb-12 min-h-[6rem] text-4xl font-medium leading-tight">
      Hi! I&apos;m Alexi,{' '}
      <span className=" text-pink-300">
        I{' '}
        <Typewriter
          loop={0}
          words={[
            'am a CS student in Ateneo!',
            'love coding for others!',
            'love building things!',
            'love coding for fun!',
          ]}
        ></Typewriter>
      </span>
    </h1>
    <div className="flex gap-4">
      <FancyButton href="mailto:alexicanamo@gmail.com" className="flex-1">
        Reach out!
      </FancyButton>
    </div>
  </Block>
);
const AboutBlock = () => (
  <Block className="col-span-12 text-2xl leading-snug">
    <p>
      I&apos;m a 18 year old developer{' '}
      <span className="text-zinc-400">
        who loves building tools that solve real world problems!
      </span>
    </p>
    <FancyButton href="/about" className="mt-5">
      More about me!
    </FancyButton>
  </Block>
);
const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span-6 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 md:col-span-3"
    >
      <a
        href="https://instagram.com/alexi_canamo"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-900 md:col-span-3"
    >
      <a
        href="https://github.com/itsalexi"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className="col-span-6 bg-[#0077B5] md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/alexicanamo/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-800 md:col-span-3"
    >
      <a
        href="https://x.com/alexicanamo"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
  </>
);
