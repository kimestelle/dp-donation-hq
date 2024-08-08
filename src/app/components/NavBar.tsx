'use client';

import React from 'react';
import Image from 'next/image';

import { DonationPageURLs } from './DonationPage';

interface NavbarProps {
  setCurrentPage: (page: 'main' | keyof DonationPageURLs) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white flex flex-row justify-start items-center border-b border-gray-200 px-5 p-2 md:p-3 md:px-10 md:gap-3">
      <div className="cursor-pointer" onClick={() => setCurrentPage('main')}>
        <Image
          width={112}
          height={112}
          sizes="(max-width: 768px) 32px, 112px"
          src="/logos/140-logo.svg"
          alt="140 logo"
          className="w-8 h-8"
        />
      </div>
      <div className="w-4 h-12 border-r border-gray-300 mr-3" />
      <div className="flex space-x-4">
        <div className="cursor-pointer" onClick={() => setCurrentPage('annual')}>
          <Image
            width={120}
            height={120}
            sizes="(max-width: 768px) 40px, 120px"
            src="/logos/annual-logo.svg"
            alt="Annual logo"
            className="w-10 h-10"
          />
        </div>
        <div className="cursor-pointer" onClick={() => setCurrentPage('futures')}>
          <Image
            width={120}
            height={120}
            sizes="(max-width: 768px) 40px, 120px"
            src="/logos/futures-logo.svg"
            alt="Futures logo"
            className="w-10 h-10"
          />
        </div>
        <div className="cursor-pointer" onClick={() => setCurrentPage('pubsoc')}>
          <Image
            width={120}
            height={120}
            sizes="(max-width: 768px) 40px, 120px"
            src="/logos/pubsoc-logo.svg"
            alt="Pubsoc logo"
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
