'use client';
import { DarkGridHero } from '@/components/DarkGrid';
import HeroArea from '@/components/HeroArea';
import { ProjectsArea } from '@/components/ProjectsArea';
import RibbonLogos from '@/components/RibbonLogos';
import SideStaggerNavigation from '@/components/SideStaggerNavigation';
import Snowfall from 'react-snowfall';

export default function Home() {
  return (
    <>
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: '100',
        }}
      />
      <div className="mx-auto justify-center gap-10 bg-neutral-900 text-white">
        <DarkGridHero className={'flex flex-col gap-[5em]'}>
          <section
            id="hero-section"
            className="flex flex-col w-full justify-center min-h-[50vh]"
          >
            <HeroArea />
          </section>
          <section
            className="flex flex-col w-full justify-center min-h-[50vh]"
            id="projects-section"
          >
            <ProjectsArea />
          </section>
          <section
            id="ribbon-section"
            className="flex flex-col w-full justify-center min-h-[50vh]"
          >
            <RibbonLogos />
          </section>
        </DarkGridHero>

        <SideStaggerNavigation />
      </div>
    </>
  );
}
