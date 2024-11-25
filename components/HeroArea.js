'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { FiArrowRight } from 'react-icons/fi';
import { SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import Image from 'next/image';
import Avatar from '@/assets/avatar.jpg';
import { Typewriter } from 'react-simple-typewriter';

const HeroArea = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.2,
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

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
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
      }}
      className={twMerge(
        'col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6',
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <div className="mb-4 w-14 min-h-14 relative">
      <Image
        src={Avatar}
        alt="avatar"
        className="rounded-full"
        layout="fill"
        objectFit="cover"
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
    <motion.p
      className="flex items-center gap-1 cursor-pointer"
      whileHover={{
        x: [0, 5, -5, 5, 0],
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
          repeat: Infinity,
        },
      }}
    >
      <a href="mailto:alexicanamo@gmail.com">Reach out!</a> <FiArrowRight />
    </motion.p>
    <motion.p
      className="flex items-center gap-1 cursor-pointer"
      whileHover={{
        x: [0, 5, -5, 5, 0],
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
          repeat: Infinity,
        },
      }}
    >
      <a href="https://old.alexi.life">Click here for the OG portfolio!</a>{' '}
      <FiArrowRight />
    </motion.p>
  </Block>
);
const AboutBlock = () => (
  <Block className="col-span-12 text-2xl leading-snug">
    <p>
      Ever since I was young, I&apos;ve always wanted to learn how to code.{' '}
      <span className="text-zinc-400">
        It started when I was only 7, when I was introduced to programming.
        I&apos;m now a 17 year old, a first year college student taking CS in
        ADMU!
      </span>
    </p>
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
        href="https://x.com/itsAlexiTW"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
  </>
);
