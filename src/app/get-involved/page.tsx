import Card1 from '@/components/Card1';
import Gallery from '@/components/layouts/HomeLayout/Gallery';
import React from 'react';

const Cases = [
  {
    title: 'Donate',
    icon: '/img/inv1.png',
    src: '/img/involve1.png',
    text: 'Your generous contributions help us fund vital programs and initiatives. Whether its a one-time donation or a recurring gift, your support enables us to provide education, healthcare, and economic opportunities to those who need it most. Every dollar makes a difference.',
    button: 'Donate',
  },
  {
    title: 'Volunteer',
    icon: '/img/inv2.png',
    src: '/img/involve2.png',
    text: 'Offer your time and skills to support our projects on the ground. Whether youre a teacher, a healthcare professional, a financial expert, or someone with a passion for environmental conservation, your expertise is invaluable. Join our team of dedicated volunteers and experience the profound impact of your efforts firsthand.',
    button: 'Contact Us',
  },
  {
    title: 'Advocate for us',
    icon: '/img/inv3.png',
    src: '/img/involve3.png',
    text: 'Raise awareness about our cause and help us amplify our message. Use your voice to share our mission with your network, organize fundraising events, or advocate for policy changes that support our work. Your advocacy can inspire others to join the movement and make a difference.',
    button: 'Contact Us',
  },
  {
    title: 'Stay Connected',
    icon: '/img/inv4.png',
    src: '/img/involve4.png',
    text: 'Stay connected with Hope and be the first to know about our latest initiatives, success stories, and upcoming events. By subscribing to our newsletter, youll receive regular updates straight to your inbox, giving you an inside look at the impact we’re making and the lives we’re transforming.',
    button: 'Sign up',
  },
];

const page = () => {
  return (
    <div className="bg-myGray5/20 pt-[3rem]">
      <div className="default-margin flex flex-col gap-[4rem] md:gap-[2rem] pt-[3rem] md:pt-0 justify-start items-center pb-[10rem]">
        <h1 className="text-[32px] md:text-[56px] text-center max-w-[968px]">
          Get Involved
        </h1>
        <p className="max-w-[600px] text-[14px] text-center text-myGray2">
          At Hope, we believe that every person has the power to make a
          difference. Together, we can create a brighter, more hopeful future
          for all. Join us in our mission and make an impact today.
        </p>
      </div>
      <div className="default-margin flex flex-col justify-center items-center gap-[6rem]">
        {Cases.map((item, index) => (
          <Card1 {...item} key={index} />
        ))}
      </div>
      <Gallery />
    </div>
  );
};

export default page;
