import Link from 'next/link';

const CompanyLogo = ({
  textClass,
  close,
}: {
  textClass?: string;
  close?: () => void;
}) => {
  return (
    <Link href={'/'}>
      <h3
        className={` text-myPurple text-[24px] md:text-[32px] ${textClass}`}
        onClick={close}
      >
        Hope
      </h3>
    </Link>
  );
};

export default CompanyLogo;
