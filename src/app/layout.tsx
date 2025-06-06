import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layouts/HomeLayout/Header';
import { Bevan, Epilogue } from 'next/font/google';
import Footer from '@/components/layouts/Footer';

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  weight: '400', // or other weights
});

const bevan = Bevan({
  subsets: ['latin'],
  variable: '--font-bevan',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Hope - NGO Website',
  description: 'Hope is a non-profit organization dedicated to making a positive impact in the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} ${bevan.variable} antialiased`}>
        <Header />
        <div className="min-h-screen"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
