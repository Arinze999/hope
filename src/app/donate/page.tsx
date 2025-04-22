'use client';
import Button from '@/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Script from 'next/script';

const Page = () => {
  const router = useRouter();
  // you can pull your public key from an env var
  // pages/donate.tsx (or wherever)
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;

  const [email, setEmail] = useState('');

  const handlePaystackModal = () => {
    if (!(window as any).PaystackPop) return;

    const handler = (window as any).PaystackPop.setup({
      key: publicKey,
      email: 'customer@example.com',
      amount: 2000 * 100, // in kobo
      ref: `${Date.now()}`,
      callback: (response: any) => {
        console.log(response);
        sessionStorage.setItem('donated', JSON.stringify(true));
        // payment succeeded, close modal → navigate home
        router.push('/');
      },
      onClose: () => {
        // user closed modal manually (optional)
        console.log('Modal closed');
      },
    });

    handler.openIframe();
  };

  return (
    <div className="default-margin h-full min-h-screen flex justify-center items-center">
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Paystack loaded')}
      />
      <div className="bg-white rounded-lg p-6 h-fit relative w-full max-w-md mx-auto flex flex-col items-center shadow">
        <h2 className="text-2xl mt-8">Donate to Our Cause</h2>

        <p className="mt-4 text-sm text-left w-full">Enter your email:</p>
        <input
          type="email"
          className="border p-2 rounded w-full mt-1 text-[14px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address..."
        />

        <div className="w-24 h-24 rounded-xl overflow-hidden absolute -top-12 left-6">
          <Image
            src="/img/inv1.png"
            alt="logo"
            width={104}
            height={104}
            className="object-cover"
          />
        </div>

        {/* 2. Trigger inline modal on click */}
        <Button
          onClick={handlePaystackModal}
          className="bg-myPurple text-myWhite text-sm w-52 h-10 mt-6 hover:bg-myWhite hover:text-myPurple hover:border hover:border-myPurple transition-all duration-300"
          text="Pay with Paystack"
          disabled={!email}
        />
      </div>
    </div>
  );
};

export default Page;
