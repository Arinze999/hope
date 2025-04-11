'use client';

import { useEffect, useState } from 'react';
// import CompanyLogo from '../components/CompanyLogo';
// import HamburgerIcon2 from '../components/HamburgerIcon2';
// import MobileNav from '../components/MobileNav';
// import Button from '../components/Button';
import Nav from '@/components/navbar/Nav';
import Button from '@/components/Button';
import MobileNav from '@/components/navbar/MobileNav';
import Image from 'next/image';
import CompanyLogo from '@/components/CompanyLogo';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1152) {
        setNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-myWhite sticky w-full top-0 z-50 border-b-myGray5 border-b">
      <div className="default-margin flex justify-between items-center h-[4.1rem] md:h-[5.75rem] relative">
        <CompanyLogo
          close={() => {
            setNavOpen(false);
          }}
        />
        <Nav />
        <div className="flex items-center">
          <div className="px-4 py-2 md:flex gap-2 hidden">
            <Button
              className="bg-myPurple text-myWhite w-[10rem]"
              text="Donate"
            />
          </div>
          {navOpen ? (
            <Image
              src={'/closemenu.svg'}
              alt="menu"
              width={40}
              height={40}
              onClick={toggleNav}
              className="cursor-pointer flex md:hidden"
            />
          ) : (
            <Image
              src={'/menu.svg'}
              alt="menu"
              width={40}
              height={40}
              onClick={toggleNav}
              className="cursor-pointer flex md:hidden"
            />
          )}
        </div>
        <MobileNav
          isOpen={navOpen}
          close={() => {
            setNavOpen(false);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
