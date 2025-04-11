import Image from 'next/image';
import React from 'react';

const speakers = [
  {
    src: '/img/spk1.png',
    speech:
      'Hope has given my community the resources we needed to build a better future.  Through their educational programs, my children now have opportunities I could only dream of. The difference in our lives is beyond words.',
    identity: 'Maria, Community Member',
  },
  {
    src: '/img/spk2.png',
    speech:
      'Volunteering with Hope has been a life-changing experience. Seeing the direct impact of our work on peoples lives is incredibly rewarding.',
    identity: 'John, Volunteer',
  },
  {
    src: '/img/spk3.png',
    speech:
      'As a corporate partner, collaborating with Hope has been incredibly fulfilling. Their transparency, dedication, and impactful programs make it easy to support their mission. We are proud to contribute to a cause that truly transforms lives.',
    identity: 'Sarah, Corporate Partner',
  },
  {
    src: '/img/spk4.png',
    speech:
      'Hopes micro-financing program has been a game-changer for our community. Small loans have allowed us to start businesses and improve our economic stability. We are now more self-reliant and optimistic about our future.',
    identity: 'Raj, Entrepreneur',
  },
  {
    src: '/img/spk5.png',
    speech:
      'Hopes healthcare initiatives have transformed our communitys well-being. Access to regular medical check-ups and health education has drastically improved our quality of life. We are healthier and more informed, thanks to their tireless efforts.',
    identity: 'David, Beneficiary',
  },
  {
    src: '/img/spk6.png',
    speech:
      '"Participating in Hopes vocational training program has given me the skills and confidence to start my own business. I am now able to provide for my family and contribute to my community. Hope has truly changed my life.',
    identity: 'Amina, Program Participant',
  },
];

const Voices = () => {
  return (
    <div className="default-margin py-[3rem] md:py-[5rem] flex flex-col gap-[2rem] justify-center items-center">
      <h3 className="text-[28px] md:text-[48px]">Voices of hope</h3>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl flex flex-wrap justify-center items-center gap-[1rem]">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-myGraybg/20 shadow-md p-[1rem] flex flex-col gap-2 justify-between md:justify-around rounded-xl h-[320px] w-full max-w-[350px]"
          >
            <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full relative overflow-hidden">
              <Image
                src={speaker.src}
                alt={speaker.src}
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-auto"
              />
            </div>
            <p className="text-[13px] text-myGray2">{`"${speaker.speech}"`}</p>
            <p className="text-myGray2 text-[14px]">{speaker.identity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voices;
