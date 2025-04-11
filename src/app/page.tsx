import Friends from '@/components/layouts/HomeLayout/Friends';
import Gallery from '@/components/layouts/HomeLayout/Gallery';
import Hero from '@/components/layouts/HomeLayout/Hero';
import { HomeAbout } from '@/components/layouts/HomeLayout/HomeAbout';
import Team from '@/components/layouts/HomeLayout/Team';
import Voices from '@/components/layouts/HomeLayout/Voices';
import WhatWeDo from '@/components/layouts/HomeLayout/WhatWeDo';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HomeAbout />
      <Friends />
      <Team />
      <Voices />
      <Gallery />
    </div>
  );
}
