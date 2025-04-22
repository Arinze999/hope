'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Notiflix from 'notiflix';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  useEffect(() => {
    const donated = sessionStorage.getItem('donated');
    if (!donated) return;

    const timer = setTimeout(() => {
      // Show a modal‐style “Report” dialog
      Notiflix.Report.success(
        'Thank you for your donation!', // title
        'Your support means the world to us', // message
        'Close', // button text
        () => {
          // on click
          sessionStorage.removeItem('donated');
          router.push('/');
        }
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-myGraybg/20 md:py-[3rem] h-screen">
      <div className="default-margin flex flex-col gap-[4rem] md:gap-[2rem] pt-[3rem] md:pt-0 justify-start md:justify-around items-center h-[80%] md:h-[95%]">
        <h1 className="text-[40px] md:text-[60px] text-center max-w-[968px]">
          Empowering Communities, Transforming Futures
        </h1>
        <div className="w-full h-[25rem] md:h-[40rem] relative rounded-3xl overflow-hidden">
          <Image
            src={'/img/heroImage.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover md:object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
