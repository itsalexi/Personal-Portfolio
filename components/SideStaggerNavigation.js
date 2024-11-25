import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const lineHeight = 5;

const sectionHeights = [75, 75, 75];
const totalHeight = sectionHeights.reduce((sum, height) => sum + height, 0);
const NUM_LINES = Math.floor(totalHeight / lineHeight);

const navItems = [
  { position: 1, title: 'About', targetId: 'hero-section' },
  { position: 10, title: 'Projects', targetId: 'projects-section' },
  { position: 30, title: 'Tech Stack', targetId: 'ribbon-section' },
];

const SideStaggerNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseY = useMotionValue(Infinity);

  // Scroll to section on click
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <motion.nav
      onMouseMove={(e) => {
        mouseY.set(e.clientY);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        mouseY.set(Infinity);
        setIsHovered(false);
      }}
      className="fixed right-0 top-0 flex h-screen flex-col items-end justify-between py-4 pl-8"
    >
      {Array.from(Array(NUM_LINES).keys()).map((i) => {
        const linkContent = navItems.find((item) => item.position === i + 1);

        return (
          <LinkLine
            title={linkContent?.title}
            isHovered={isHovered}
            mouseY={mouseY}
            targetId={linkContent?.targetId}
            key={i}
            onClick={handleScrollTo}
          />
        );
      })}
    </motion.nav>
  );
};

const SPRING_OPTIONS = {
  mass: 1,
  stiffness: 200,
  damping: 15,
};

const LinkLine = ({ mouseY, isHovered, title, targetId, onClick }) => {
  const ref = useRef(null);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
  });

  // Styles for non-link lines
  const lineWidthRaw = useTransform(distance, [-80, 0, 80], [15, 100, 15]);
  const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

  // Styles for link lines
  const linkWidth = useSpring(25, SPRING_OPTIONS);

  useEffect(() => {
    if (isHovered) {
      linkWidth.set(150);
    } else {
      linkWidth.set(25);
    }
  }, [isHovered]);

  if (title) {
    return (
      <a
        href="#"
        className="text-neutral-100"
        onClick={() => onClick(targetId)} // Scroll to section on click
      >
        <motion.div
          ref={ref}
          className="group relative bg-neutral-700 transition-colors hover:bg-indigo-500"
          style={{ width: linkWidth, height: 2 }}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-0 z-10 w-full pt-2 font-bold uppercase text-neutral-100 transition-colors group-hover:text-indigo-500"
              >
                {title}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </a>
    );
  } else {
    return (
      <motion.div
        ref={ref}
        className="relative bg-neutral-700"
        style={{ width: lineWidth, height: 2 }}
      />
    );
  }
};

export default SideStaggerNavigation;
