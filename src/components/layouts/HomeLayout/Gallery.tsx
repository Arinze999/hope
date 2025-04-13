import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <div className="w-full lg:px-[32px] xl:px-[220px] flex flex-col gap-[2rem] justify-center items-center">
      <div className="w-full flex justify-between items-center gap-[1rem]">
        <div className="w-[120px] md:w-[400px] h-[104px] md:h-[350px] relative overflow-hidden flex justify-end">
          <Image
            src={'/img/g1.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-[120px] md:w-[400px] h-[104px] md:h-[350px] relative overflow-hidden flex justify-end">
          <Image
            src={'/img/g2.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-[120px] md:w-[400px] h-[104px] md:h-[350px] relative overflow-hidden flex justify-end">
          <Image
            src={'/img/g3.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-center gap-[1rem]">
        <div className="w-[120px] md:w-[400px] h-[104px] md:h-[350px] relative overflow-hidden flex justify-end">
          <Image
            src={'/img/g4.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-[120px] md:w-[400px] h-[104px] md:h-[350px] relative overflow-hidden flex justify-end">
          <Image
            src={'/img/g5.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-[120px] md:w-[400px] h-[104px] md:h-[350px] relative overflow-hidden flex justify-end">
          <Image
            src={'/img/g6.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
