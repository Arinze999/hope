import Image from 'next/image';
import React from 'react';

const activities = [
  {
    title: 'Education Empowerment',
    subtitile:
      'Providing resources and support to ensure every child has access to quality education.',
  },
  {
    title: 'Health and Wellness',
    subtitile:
      'Delivering healthcare services and promoting healthy living in underserved areas.',
  },
  {
    title: 'Economic Development',
    subtitile:
      'Creating opportunities for sustainable income and self-sufficiency through vocational training and micro-financing.',
  },
  {
    title: 'Environmental Stewardship',
    subtitile:
      'Protecting our planet by promoting sustainable practices and fostering environmental awareness.',
  },
];

const WhatWeDo = () => {
  return (
    <div className="default-margin py-[3rem] flex flex-col gap-[2rem] justify-center items-center">
      <p className="text-myPurple font-[600]">What we do</p>
      <h1 className="text-[28px] md:text-[48px] text-center max-w-[593px]">
        Making a Difference, One Life at a Time.
      </h1>
      <p className="text-myGray2 text-center max-w-[523px]">
        At Hope, we are dedicated to uplifting communities through a range of
        targeted initiatives. Our focus areas include
      </p>
      <div className="flex flex-col gap-[2rem] md:flex-row-reverse justify-center items-center w-full">
        <div className="w-full h-[25rem] md:h-[35rem] relative rounded-3xl overflow-hidden flex justify-end">
          <Image
            src={'/img/hands.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto"
          />
        </div>
        <ul className="flex flex-col gap-[2rem] ">
          {activities.map((item, index) => (
            <li key={index}>
              <h4 className="text-[20px] mb-[0.5rem]">{item.title}</h4>
              <p className="text-myGray2">{item.subtitile}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo;
