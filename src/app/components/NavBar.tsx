'use client';

import React from 'react';
import Image from 'next/image';

import { DonationPageURLs } from './DonationPage';

interface NavbarProps {
  setCurrentPage: (page: 'main' | keyof DonationPageURLs) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white flex justify-start items-center border-b border-gray-200 p-3 px-5">
      <div className="cursor-pointer" onClick={() => setCurrentPage('main')}>
        <Image
          width={112}
          height={32}
          src="/logos/140-logo.svg"
          alt="140 logo"
          className="h-8"
        />
      </div>
      <div className="w-4 h-12 border-r border-black mr-3" />
      <div className="flex space-x-4">
        <div className="cursor-pointer" onClick={() => setCurrentPage('annual')}>
          <Image
            width={120}
            height={40}
            src="/logos/annual-logo.svg"
            alt="Annual logo"
            className="h-10"
          />
        </div>
        <div className="cursor-pointer" onClick={() => setCurrentPage('futures')}>
          <Image
            width={120}
            height={40}
            src="/logos/futures-logo.svg"
            alt="Futures logo"
            className="h-10"
          />
        </div>
        <div className="cursor-pointer" onClick={() => setCurrentPage('pubsoc')}>
          <Image
            width={120}
            height={40}
            src="/logos/pubsoc-logo.svg"
            alt="Pubsoc logo"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
