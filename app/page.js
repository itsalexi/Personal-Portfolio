'use client';

import HeroArea from '@/components/HeroArea';
import { ProjectsArea } from '@/components/ProjectsArea';
import TechStack from '@/components/TechStack';
import Snowfall from 'react-snowfall';

export default function Home() {
  return (
    <div className="mx-auto justify-center gap-10 text-white">
      <HeroArea />
      <ProjectsArea />
      <TechStack />
    </div>
  );
}
