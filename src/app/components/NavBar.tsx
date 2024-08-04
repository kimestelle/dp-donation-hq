'use client';

import React from 'react';
import { DonationPageURLs } from './DonationPage';

interface NavbarProps {
  setCurrentPage: (page: 'main' | keyof DonationPageURLs) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white flex justify-start items-center border-b border-gray-200 p-3 px-5">
      <img
        src="logos/140-logo.svg"
        alt="Logo"
        className="h-8 cursor-pointer"
        onClick={() => setCurrentPage('main')}
      />
      <div className="w-4 h-12 border-r border-black mr-3" />
      <div className="flex space-x-4">
        <img
          src="logos/annual-logo.svg"
          alt="Option 1"
          className="h-10 cursor-pointer"
          onClick={() => setCurrentPage('annual')}
        />
        <img
          src="logos/futures-logo.svg"
          alt="Option 2"
          className="h-10 cursor-pointer"
          onClick={() => setCurrentPage('futures')}
        />
        <img
          src="logos/pubsoc-logo.svg"
          alt="Option 3"
          className="h-10 cursor-pointer"
          onClick={() => setCurrentPage('pubsoc')}
        />
      </div>
    </div>
  );
};

export default Navbar;
