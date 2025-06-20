import React, { useRef, useState } from 'react';
import EnlistmentHelperImg from '@/assets/EnlistmentHelper.jpg';
import QPICalcImg from '@/assets/QPICalc.png';
import TuitionFeeImg from '@/assets/TuitionFee.png';
import GithubImg from '@/assets/Github.png';
import SharespaceImg from '@/assets/sharespace.png';
import DiscordImg from '@/assets/discord.png';
import TedXImg from '@/assets/tedx.png';

import Image from 'next/image';
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
  useInView,
} from 'framer-motion';
import useMeasure from 'react-use-measure';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === 'number' ? y.get() : 0;

    await animate('#drawer', {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export const ProjectsArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const projectData = {
    QPICalc: {
      image: QPICalcImg,
      title: 'Ateneo QPI Calculator',
      description:
        'A simple easy to use QPI calculator, import your grades, or select your course to be able to calculate your grades fast!',
      repo: 'https://github.com/itsalexi/ADMU-QPI',
      live: 'https://qpi.alexi.life',
      tech: ['HTML', 'CSS', 'React', 'NextJS', 'mobilefriendly'],
    },
    EnlistmentHelper: {
      image: EnlistmentHelperImg,
      title: 'Ateneo Enlistment Helper',
      description:
        'An easy way to find available classes and build your schedule in Ateneo. Browse courses, apply filters, and create your ideal timetable with the Ateneo Enlistment Helper!',
      repo: 'https://github.com/itsalexi/Ateneo-Enlistment',
      live: 'https://schedule.alexi.life',
      tech: ['HTML', 'CSS', 'React', 'NextJS', 'mobilefriendly'],
    },
    TuitionFee: {
      image: TuitionFeeImg,
      title: 'Ateneo Tuition Fee Viewer',
      description:
        'Easily estimate and see how much your tuition will cost at Ateneo with this very intuitive and user friendly web-app.',
      repo: 'https://github.com/itsalexi/Ateneo-Tuition',
      live: 'https://tuition.alexi.life',
      tech: ['HTML', 'CSS', 'React', 'NextJS', 'mobilefriendly'],
    },
    Sharespace: {
      image: SharespaceImg,
      title: 'Sharespace',
      description:
        'A social media blogging platform like Medium and Dev.to! You have the ability to like, share, comment on every post!',
      repo: 'https://github.com/itsalexi/Sharespace',
      live: 'https://sharespace.alexi.life',
      tech: ['HTML', 'CSS', 'React', 'Firebase', 'NextJS', 'mobilefriendly'],
    },
    DiscordClone: {
      image: DiscordImg,
      title: 'Discord Clone',
      description:
        'A discord clone with full authentication and realtime chat messaging powered by Firebase. Login/Register pages are mobile-friendly, but the main application is not. Still try it out!',
      repo: 'https://github.com/itsalexi/Discord-Clone/',
      live: 'https://alexi.life/projects/discord-clone/',
      tech: ['HTML', 'CSS', 'React', 'Firebase', 'JavaScript'],
    },
    TedX: {
      image: TedXImg,
      title: 'TedX AteneodeManilaU Website',
      description:
        'Helped lead a team of three developers to design and build the TEDxAteneoDeManilaU 2025 website, ensuring seamless navigation, modern aesthetics, and optimized performance.',
      repo: 'https://github.com/itsalexi/TEDxADMU/',
      live: 'https://tedxateneodemanilau.com',
      tech: ['HTML', 'CSS', 'React', 'NextJS', 'mobilefriendly'],
    },
  };
  const openModal = (projectKey) => {
    setModalContent(projectData[projectKey]);
    setIsModalOpen(true);
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      id="projects"
      className="scroll-mt-20"
    >
      <motion.div
        className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8"
        variants={itemVariants}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            x: [0, 5, -5, 5, 0],
            transition: {
              duration: 0.6,
              ease: 'easeInOut',
              repeat: Infinity,
            },
          }}
          className="text-4xl font-bold md:text-5xl pt-10"
        >
          Check out
          <span className="text-blue-600"> some of my projects!</span>
        </motion.h2>
      </motion.div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard
          className="col-span-12 md:col-span-12"
          onClick={() => openModal('TedX')}
        >
          <CardTitle>TedX AteneoDeManilaU Website</CardTitle>
          <p className="text-center">
            The official website for TedX AteneoDeManilaU, featuring speaker profiles and event information!
          </p>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-600 to-indigo-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src={TedXImg}
              alt="TedX AteneoDeManilaU Website"
              className="w-full object-cover object-top rounded-t-2xl"
            />
          </div>
        </BounceCard>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard
          className="col-span-12 md:col-span-4"
          onClick={() => openModal('QPICalc')}
        >
          <CardTitle>Ateneo QPI Calculator</CardTitle>
          <p className="text-center">
            Worried about your grades? A simple easy to use QPI calculator!
          </p>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-600 to-indigo-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src={QPICalcImg}
              alt="Ateneo QPI Calculator"
              className="w-full object-cover object-top rounded-t-2xl"
            />
          </div>
        </BounceCard>
        <BounceCard
          className="col-span-12 md:col-span-8"
          onClick={() => openModal('EnlistmentHelper')}
        >
          <CardTitle>Ateneo Enlistment Helper</CardTitle>
          <p className="text-center">
            Find classes the fastest and build your own schedule!
          </p>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-600 to-indigo-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src={EnlistmentHelperImg}
              alt="Ateneo Enlistment Helper"
              className="w-full  object-top rounded-t-2xl"
            />
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard
          className="col-span-12 md:col-span-8"
          onClick={() => openModal('TuitionFee')}
        >
          <CardTitle>Ateneo Tuition Fee Viewer</CardTitle>
          <p className="text-center">
            Easily estimate and see how much your tuition will cost at Ateneo{' '}
          </p>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-600 to-indigo-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src={TuitionFeeImg}
              alt="Ateneo Tuition Fee Viewer"
              className="w-full  object-top rounded-t-2xl"
            />
          </div>
        </BounceCard>
        <BounceCard
          className="col-span-12 md:col-span-4"
          href="https://github.com/itsalexi/?tab=repositories"
        >
          <CardTitle>Other Projects</CardTitle>
          <p>Check out my other projects on GitHub!</p>

          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-600 to-indigo-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src={GithubImg}
              alt="Github"
              className="w-full  object-top rounded-t-2xl"
            />
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <BounceCard
          className="col-span-12 md:col-span-6"
          onClick={() => openModal('Sharespace')}
        >
          <CardTitle>Sharespace</CardTitle>
          <p className="text-center">
            A social media blogging platform like Medium and Dev.to!
          </p>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-600 to-indigo-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src={SharespaceImg}
              alt="Sharespace"
              className="w-full object-cover object-top rounded-t-2xl"
            />
          </div>
        </BounceCard>
        <BounceCard
          className="col-span-12 md:col-span-6"
          onClick={() => openModal('DiscordClone')}
        >
          <CardTitle>Discord Clone</CardTitle>
          <p className="text-center">
            A discord clone with full authentication and realtime chat
            messaging!
          </p>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-600 to-indigo-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src={DiscordImg}
              alt="Discord Clone"
              className="w-full object-cover object-top rounded-t-2xl"
            />
          </div>
        </BounceCard>
      </div>
      {/* Modal */}
      <DragCloseDrawer open={isModalOpen} setOpen={setIsModalOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            {modalContent?.title}
          </h2>
          <p>{modalContent?.description}</p>

          <Image
            src={modalContent?.image}
            alt={modalContent?.title}
            className="w-full rounded-2xl"
          />
          <div className="flex flex-wrap gap-2">
            {modalContent?.tech.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  tech === 'HTML'
                    ? 'bg-red-500 text-black shadow-md'
                    : tech === 'CSS'
                    ? 'bg-blue-500 text-black shadow-md'
                    : tech === 'React'
                    ? 'bg-teal-500 text-black shadow-md'
                    : tech === 'NextJS'
                    ? 'bg-gray-800 text-white shadow-md'
                    : tech === 'mobilefriendly'
                    ? 'bg-yellow-500 text-black shadow-md'
                    : 'bg-gray-400 text-black shadow-md'
                }`}
              >
                #{tech}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <a
              href={modalContent?.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:underline"
            >
              <FiGithub className="mr-2" />
              GitHub Repository
            </a>
          </div>

          <div className="mt-2">
            <a
              href={modalContent?.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:underline"
            >
              <FiExternalLink className="mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </DragCloseDrawer>
    </motion.div>
  );
};

const BounceCard = ({ className, children, href, onClick }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const cardVariants = {
    hidden: {
      scale: 0.5,
      y: 50,
      opacity: 0,
    },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      },
    },
  };
  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ scale: 0.95, rotate: '-1deg' }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-zinc-800 border-zinc-700 border p-8 ${className}`}
      onClick={onClick}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        children
      )}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold text-slate-300">
      {children}
    </h3>
  );
};
