'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Block } from '@/components/Block';
import Avatar from '@/assets/avatar.jpg';

export function AboutContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 mb-12 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src={Avatar}
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Alexi Roth Luis Cañamo
        </h1>
        <p className="text-xl text-zinc-400">
          BS CS @{' '}
          <Link
            href="#"
            className="text-white hover:text-zinc-300 underline-offset-4 hover:underline"
          >
            ADMU
          </Link>
        </p>
      </motion.div>

      <div className="space-y-6">
        <Block delay={0.2}>
          <h2 className="text-xl font-semibold text-white mb-4">Hello!</h2>
          <p className="text-zinc-300 leading-relaxed">
            I&apos;m <span className="text-white font-medium">Alexi</span>, a
            18-year-old software developer who{' '}
            <span className="text-white font-medium">loves to code</span>! As
            a CS student at{' '}
            <span className="text-white font-medium">
              Ateneo De Manila University
            </span>{' '}
            and a{' '}
            <span className="text-white font-medium">DOST Merit Scholar</span>
            , I focus on{' '}
            <span className="text-white font-medium">building projects</span>{' '}
            that solve{' '}
            <span className="text-white font-medium">
              real world problems
            </span>
            !
          </p>
        </Block>

        <Block delay={0.3}>
          <h2 className="text-xl font-semibold text-white mb-4">
            Background
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Born and raised in the Philippines, my coding journey started at
            age 7 when I stumbled upon my aunts and uncles working on a
            project. I&apos;m now a{' '}
            <span className="text-white">
              CS freshman at Ateneo de Manila University
            </span>
            , turning ideas into applications that solve real student
            problems.
          </p>
        </Block>

        <Block delay={0.4}>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-green-500/10 ring-1 ring-green-500/20" />
            What I&apos;m up to now
          </h2>
          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-2">
              <span className="text-zinc-500">→</span>
              <span>
                Creating student tools at Ateneo while thriving as a{' '}
                <span className="text-white">DOST Merit Scholar</span>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-500">→</span>
              <span>
                Building{' '}
                <span className="text-white">
                  projects that make university life simpler
                </span>{' '}
                - from grade calculators to enrollment helpers
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-500">→</span>
              <span>
                Finding new ways to improve digital experiences (and
                occasionally earning bounties for finding bugs!)
              </span>
            </li>
          </ul>
        </Block>

        <Block delay={0.5}>
          <h2 className="text-xl font-semibold text-white mb-4">
            Interests & Specialties
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            My journey has taken me from completing{' '}
            <span className="text-white">TheOdinProject</span> to building
            full-stack applications with{' '}
            <span className="text-white">React and Next.js</span>. When
            I&apos;m not coding, I&apos;m exploring new technologies or
            thinking up ways to make student life easier. Having earned spots
            in all <span className="text-white">Big 4 universities</span>, I
            chose Ateneo to pursue my passion for creating meaningful tech
            solutions. Between coursework and side projects, I&apos;m
            constantly pushing myself to learn and build more impactful tools.
          </p>
        </Block>

        <Block delay={0.6}>
          <h2 className="text-xl font-semibold text-white mb-4">
            Highlights
          </h2>
          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-2">
              <span className="text-zinc-500">→</span>
              <span>
                <span className="text-white">DOST Merit Scholar</span> at
                Ateneo de Manila University
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-500">→</span>
              <span>
                Secured a{' '}
                <span className="text-white">
                  $500 bounty from Riot Games
                </span>{' '}
                for security vulnerability discovery
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-500">→</span>
              <span>
                Successfully passed{' '}
                <span className="text-white">
                  all Big 4 university entrance exams
                </span>{' '}
                (UP, ADMU, UST, DLSU)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-500">→</span>
              <span>
                Completed{' '}
                <span className="text-white">
                  TheOdinProject JavaScript course
                </span>{' '}
                and built a full Discord clone
              </span>
            </li>
          </ul>
        </Block>
      </div>
    </>
  );
} 