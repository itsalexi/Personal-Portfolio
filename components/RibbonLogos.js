import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiVercel,
  SiFirebase,
  SiGit,
} from 'react-icons/si';

const RibbonLogos = () => {
  return (
    <>
      <motion.h2
        whileHover={{
          x: [0, 5, -5, 5, 0],
          transition: {
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
        className="text-4xl font-bold md:text-5xl"
      >
        Technologies
        <span className="text-blue-600"> that I use!</span>
      </motion.h2>
      <div className="flex translate-y-[50%] rotate-[0deg] scale-110 overflow-hidden border-y-4 border-neutral-700 bg-neutral-800">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>
    </>
  );
};

const TranslateWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ translateX: '0%' }}
      animate={{ translateX: '-100%' }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }) => {
  return (
    <div className="flex items-center justify-center gap-4 px-4 py-4 text-white transition-colors hover:bg-neutral-700 md:py-6">
      <Icon className="text-3xl md:text-4xl" />
      <span className="whitespace-nowrap text-lg font-semibold uppercase md:text-xl">
        {name}
      </span>
    </div>
  );
};

const LogoItems = () => (
  <>
    <LogoItem Icon={SiJavascript} name="JavaScript" />
    <LogoItem Icon={SiReact} name="React" />
    <LogoItem Icon={SiNodedotjs} name="Node.js" />
    <LogoItem Icon={SiNextdotjs} name="Next.js" />
    <LogoItem Icon={SiMongodb} name="MongoDB" />
    <LogoItem Icon={SiPostgresql} name="PostgreSQL" />
    <LogoItem Icon={SiDocker} name="Docker" />
    <LogoItem Icon={SiTailwindcss} name="TailwindCSS" />
    <LogoItem Icon={SiVercel} name="Vercel" />
    <LogoItem Icon={SiFirebase} name="Firebase" />
    <LogoItem Icon={SiGit} name="Git" />
  </>
);

export default RibbonLogos;
