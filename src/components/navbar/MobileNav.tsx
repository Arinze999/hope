import React from 'react';
import Button from '../Button';
import Link from 'next/link';

type MobileNavProps = {
  isOpen: boolean;
  close: () => void;
};

const navItems = [
  //   { title: 'Home', link: '/home' },
  { title: 'About Us', link: '/about' },
  { title: 'Campaigns', link: '/campaigns' },
  { title: 'Get Involded', link: '/get-involved' },
  { title: 'Contact Us', link: '/contact' },
];

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, close }) => {
  const handleToggle = () => {
    close();
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-myWhite shadow pb-[1rem] z-[-10] transition-transform duration-300 flex flex-col gap-[3rem] md:hidden ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className="flex flex-col w-full text-xl mt-[7rem] gap-[3rem]">
        {navItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <li>
              <div
                className="flex justify-between items-center px-4 py-2 cursor-pointer"
                onClick={() => handleToggle()}
              >
                <span className="text-[16px] hover:text-myPurple">
                  {item.title}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <div className="px-4 w-full py-2 flex gap-2 md:hidden">
        <Link
          href={'/donate'}
          className="w-full"
          onClick={() => handleToggle()}
        >
          <Button className="bg-myPurple text-myWhite w-full" text="Donate" />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
