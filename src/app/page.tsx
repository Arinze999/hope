import Hero from '@/components/layouts/HomeLayout/Hero';
import { HomeAbout } from '@/components/layouts/HomeLayout/HomeAbout';
import WhatWeDo from '@/components/layouts/HomeLayout/WhatWeDo';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HomeAbout />
    </div>
  );
}
