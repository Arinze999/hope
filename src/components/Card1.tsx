import React from 'react';
import Button from './Button';
import Image from 'next/image';

interface Card1Props {
  title: string;
  icon: string;
  src: string;
  text: string;
  button: string;
  last?: boolean;
}

const Card1: React.FC<Card1Props> = ({
  title,
  icon,
  src,
  text,
  button,
  last,
}) => {
  return (
    <div className="w-full max-w-[900px] h-[42rem] md:h-[400px] p-[1rem] md:p-[3rem] py-[4rem] md:py-0 bg-myWhite rounded-xl flex flex-col md:flex-row justify-center items-center gap-[2rem] relative">
      <div className="w-[104px] h-[104px] rounded-xl overflow-hidden absolute top-[-50px] left-0 md:left-[30px]">
        <Image
          src={icon}
          alt="heroImage"
          width={104}
          height={104}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h4 className="text-[24px]">{title}</h4>
        <p className="text-myGray2 text-[13px] max-w-[500px]">{text}</p>
        {last ? (
          <Button
            className="bg-myPurple text-myWhite text-[14px] w-[10rem] border-none"
            text={button}
          />
        ) : (
          <Button
            className="border-myPurple border-[1px] text-myPurple text-[14px] w-[10rem]"
            text={button}
          />
        )}
      </div>
      <div className="relative w-full h-full md:w-[562px] md:h-[440px] rounded-xl overflow-hidden">
        <Image
          src={src}
          alt="heroImage"
          fill={true}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover md:object-contain"
        />
      </div>
      {last && (
        <div className="flex md:hidden gap-10 justify-between items-center">
          <Button
            className="bg-myPurple text-myWhite text-[14px] w-[10rem] border-none"
            text="facebook"
          />
          <Button
            className="bg-myPurple text-myWhite text-[14px] w-[10rem] border-none"
            text="instagram"
          />
        </div>
      )}
      {last && (
        <div className="hidden md:flex gap-10 justify-between items-center absolute w-[45%] bottom-3 right-12">
          <Button
            className="bg-myPurple text-myWhite text-[14px] w-[10rem] border-none"
            text="facebook"
          />
          <Button
            className="bg-myPurple text-myWhite text-[14px] w-[10rem] border-none"
            text="instagram"
          />
        </div>
      )}
    </div>
  );
};

export default Card1;
