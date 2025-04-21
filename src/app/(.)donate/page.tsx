'use client';
import Button from '@/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  return (
    <div className="fixed h-full inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg relative w-full max-w-md mx-auto">
        <button
          className="absolute top-2 right-3 text-gray-600"
          onClick={() => router.back()}
        >
          ✕
        </button>
        <h2 className="text-2xl mt-[2rem]">Donate to Our Cause</h2>
        <p className="mt-[2rem] text-[14px]">
          Thank you for considering a donation.
        </p>
        <p className="mt-[2rem] text-[14px]">
          Click button below to use Paystack
        </p>
        <div className="w-[104px] h-[104px] rounded-xl overflow-hidden absolute top-[-50px] left-0 md:left-[30px]">
          <Image
            src="/img/inv1.png"
            alt="heroImage"
            width={104}
            height={104}
            className="object-cover"
          />
        </div>
        <Button
          className="bg-myPurple text-myWhite text-[14px] w-[13rem] h-[2.5rem] mt-[2rem] hover:bg-myWhite hover:text-myPurple hover:border-[1px] hover:border-myPurple transition-all duration-300"
          text="Pay with Paystack"
        />
      </div>
    </div>
  );
};

export default page;
