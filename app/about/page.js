import Image from 'next/image';
import Link from 'next/link';
import { Block } from '@/components/Block';
import Avatar from '@/assets/avatar.jpg';
import { AboutContent } from '@/components/AboutContent';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <AboutContent />
    </div>
  );
}
