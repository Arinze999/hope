import Image from 'next/image';
import React from 'react';

const activities = [
  {
    title: 'Our Mission',
    subtitile:
      'Our mission is to empower individuals and communities by providing the tools and support they need to overcome challenges and achieve their fullest potential through collaborative efforts.',
  },
  {
    title: 'Our Vision',
    subtitile:
      'Our vision is a world where every individual, regardless of their background or circumstances has the opportunity to thrive. We envision communities that are resilient, self-reliant, and full of promise.',
  },
  {
    title: 'Global Movement',
    subtitile:
      'We envision a global movement where compassion and empathy drive action, where the barriers of inequality and injustice are dismantled, and where hope is not just a fleeting sentiment but a tangible reality. ',
  },
];

export const HomeAbout = () => {
  return (
    <div className="bg-myGraybg/20">
      <div className="default-margin py-[3rem] md:py-[5rem] flex flex-col gap-[2rem] justify-center items-center">
        <p className="text-myPurple font-[600]">About us</p>
        <h1 className="text-[28px] md:text-[48px] text-center max-w-[593px]">
          A Future Filled with Hope
        </h1>
        <p className="text-myGray2 text-center max-w-[523px]">
          At Hope, we are dedicated to uplifting communities through a range of
          targeted initiatives
        </p>
        <div className="flex flex-col gap-[2rem] justify-center items-center w-full">
          <div className="w-full h-[20rem] md:h-[25rem] lg:h-[40rem] relative rounded-3xl overflow-hidden">
            <Image
              src={'/img/handsline.png'}
              alt="heroImage"
              fill={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover md:object-contain"
            />
          </div>
          <ul className="flex flex-col lg:flex-row gap-[2rem] max-w-[1240px]">
            {activities.map((item, index) => (
              <li key={index} className='max-w-[600px]'>
                <h4 className="text-[20px] mb-[0.5rem]">{item.title}</h4>
                <p className="text-myGray2">{item.subtitile}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
