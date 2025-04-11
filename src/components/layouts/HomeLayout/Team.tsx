import Image from 'next/image';
import React from 'react';

const Team = () => {
  return (
    <div className="bg-myGraybg/20">
      <div className="default-margin default-margin py-[3rem] flex flex-col gap-[2rem] justify-center items-center">
        <h3 className="text-[28px] md:text-[48px]">Our team</h3>
        <p className="text-myGray2 text-center max-w-[523px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-myWhite p-[1rem] flex flex-col gap-2 items-center justify-between md:justify-around rounded-xl h-[300px] md:h-[400px] w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] rounded-full relative overflow-hidden">
                <Image
                  src={'/img/emma.png'}
                  alt="heroImage"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-auto"
                />
              </div>
              <p className="text-[13px]">Founder & Executive Director</p>
              <h4 className="text-[20px]">Emma Johnson</h4>
              <p className="text-[13px] text-center">
                Emma Johnson founded Hope in 2023 and has over 20 years of
                nonprofit experience. Her passion for education and health
                drives Hope’s mission, inspiring the team with her leadership
                and dedication to making a difference.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-myWhite p-[1rem] flex flex-col gap-2 items-center justify-between md:justify-around rounded-xl h-[300px] md:h-[400px] w-full max-w-[500px] mx-auto lg:mx-0 lg:mr-auto">
              <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] rounded-full relative overflow-hidden">
                <Image
                  src={'/img/michael.png'}
                  alt="heroImage"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-auto"
                />
              </div>
              <p className="text-[13px]">Director of Programs</p>
              <h4 className="text-[20px]">Michael Ramirez</h4>
              <p className="text-[13px] text-center">
                Michael Ramirez, with a background in social work and public
                health, oversees all of Hope’s initiatives. His strategic
                planning and compassionate approach ensure our programs
                effectively meet community needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-myWhite p-[1rem] flex flex-col gap-2 items-center justify-between md:justify-around rounded-xl h-[300px] md:h-[400px] w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] rounded-full relative overflow-hidden">
                <Image
                  src={'/img/sophia.png'}
                  alt="heroImage"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-auto"
                />
              </div>
              <p className="text-[13px]">Head of Education Initiatives</p>
              <h4 className="text-[20px]">Sophia Lee</h4>
              <p className="text-[13px] text-center">
                Sophia Lee designs and leads our education programs. With over a
                decade of teaching experience, she is committed to providing
                quality education and creating opportunities for children to
                thrive.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-myWhite p-[1rem] flex flex-col gap-2 items-center justify-between md:justify-around rounded-xl h-[300px] md:h-[400px] w-full max-w-[500px] mx-auto lg:mx-0 lg:mr-auto">
              <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] rounded-full relative overflow-hidden">
                <Image
                  src={'/img/dora.png'}
                  alt="heroImage"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-auto"
                />
              </div>
              <p className="text-[13px]">Community Health Coordinator</p>
              <h4 className="text-[20px]">Dora Thompson</h4>
              <p className="text-[13px] text-center">
                Dora Thompson manages our health and wellness programs. With a
                background in nursing and public health, he focuses on improving
                health outcomes and promoting preventive care in underserved
                communities.
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
