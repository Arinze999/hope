import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const navItems = [
  //   { title: 'Home', link: '/home' },
  { title: 'About Us', link: '/about' },
  { title: 'Campaigns', link: '/campaigns' },
  { title: 'Get Involded', link: '/get-involved' },
  { title: 'Contact Us', link: '/contact' },
];

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
  
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className="hidden md:flex">
      <ul className="flex gap-2 text-xl">
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            <Link href={item.link}>
              <div
                className="flex justify-between gap-4 items-center px-4 py-2 cursor-pointer"
              >
                <span className="text-[16px] hover:text-myPurple">
                  {item.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
