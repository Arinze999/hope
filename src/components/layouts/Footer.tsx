import React from 'react';
import CompanyLogo from '../CompanyLogo';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-darkBg text-myWhite py-[3rem] pb-[5rem] md:py-[5rem]">
      <div className="default-margin flex flex-col md:flex-row md:justify-between pb-[1rem] gap-[5rem]">
        {/*  */}
        <div className="">
          <CompanyLogo textClass="text-myWhite mb-[2rem]" />

          <p className="text-[14px]">Contact:</p>
          <p className="text-[14px] underline"> 1800 123 45667</p>
          <p className="text-[14px] underline mb-[2rem]">info@Hope.io</p>

          <ul className="flex gap-[1rem]">
            <li>
              <Image src={'/img/fbp.png'} alt="fb" width={24} height={24} />
            </li>
            <li>
              <Image src={'/img/nstap.png'} alt="fb" width={24} height={24} />
            </li>
            <li>
              <Image src={'/img/twtp.png'} alt="fb" width={24} height={24} />
            </li>
            <li>
              <Image src={'/img/linkp.png'} alt="fb" width={24} height={24} />
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-[5rem] md:ml-auto md:mr-0">
          <ul className="flex flex-col gap-[1rem]">
            <li>
              <Link className="text-[14px] text-myGray6" href={'/about'}>
                About us
              </Link>
            </li>
            <li>
              <Link className="text-[14px] text-myGray6" href={'/campaigns'}>
                Campaigns
              </Link>
            </li>
            <li>
              <Link className="text-[14px] text-myGray6" href={'/get-involved'}>
                Get Involved
              </Link>
            </li>
            <li>
              <Link className="text-[14px] text-myGray6" href={'/contact'}>
                Contact us
              </Link>
            </li>
          </ul>
          {/*  */}
          <ul className="flex flex-col gap-[1rem]">
            <li>
              <Link className="text-[14px] text-myGray6" href={'/about'}>
                About us
              </Link>
            </li>
            <li>
              <Link className="text-[14px] text-myGray6" href={'/campaigns'}>
                Campaigns
              </Link>
            </li>
            <li>
              <Link className="text-[14px] text-myGray6" href={'/get-involved'}>
                Get Involved
              </Link>
            </li>
            <li>
              <Link className="text-[14px] text-myGray6" href={'/contact'}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <hr className="text-myGray2 default-margin" />

      <div className="default-margin pt-[4rem] flex flex-col md:flex-row justify-between gap-[3rem]">
        <p className="text-[14px] text-myGray6">
          © 2023 Hope. All rights reserved.
        </p>
        <p className="text-[14px] flex gap-[3rem] text-myGray6">
          <span>Privacy Policy</span> <span>Terms of Service</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
