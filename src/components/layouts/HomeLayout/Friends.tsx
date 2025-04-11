import Image from 'next/image';
import React from 'react';

const Friends = () => {
  return (
    <div className="default-margin py-[3rem] md:py-[5rem] flex flex-col gap-[2rem] justify-center items-center">
      <h3 className="text-myPurple text-[40px] md:text-[50px] lg:text-[70px] w-full">
        Friends. Family. <br /> Communities
      </h3>
      <div className="flex flex-col gap-[2rem] md:flex-row-reverse justify-center items-center w-full">
        <div className="w-full h-[25rem] md:h-[35rem] relative rounded-3xl overflow-hidden flex justify-end">
          <Image
            src={'/img/sunhand.png'}
            alt="heroImage"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-[2rem] max-w-[400px] lg:max-w-[600px]">
          <h4 className="text-[20px] mb-[0.5rem]">The Journey of Hope</h4>
          <p className="text-myGray2">
            Hope was born out of a deep-seated belief that every life holds
            immense value and potential. Founded in [Year], our organization
            began with a small group of passionate individuals determined to
            make a difference. From humble beginnings, we have grown into a
            network of dedicated volunteers, supporters, and partners, all
            united by a common goal: to bring hope to those who need it most.
          </p>
          <p className="text-myGray2">
            Our journey has been marked by countless stories of transformation
            and triumph. From a child who received a scholarship and became the
            first in their family to attend college, to communities that have
            blossomed through our sustainable farming programs – these successes
            fuel our commitment to continue our work with unwavering dedication.
            We invite you to be a part of our story
          </p>
          <p className="text-myGray2">
            Together, we can turn the tide and create a world where hope is a
            reality for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Friends;
