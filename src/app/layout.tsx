'use client';

import { useState } from 'react';
import NavBar from './components/NavBar';
import DonationPage from './components/DonationPage';
import { DonationPageURLs } from './components/DonationPage';

import './globals.css';

type Page = 'main' | keyof DonationPageURLs;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('main');

  const donationPages: DonationPageURLs = {
    annual: "https://www.classy.org/give/506065/#!/donation/checkout",
    futures: "https://donationpage2.com",
    pubsoc: "https://donationpage3.com",
    street: "https://donationpage4.com",
  };

  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vwh6ddr.css"/>
      </head>
      <body>
        <div>
          <NavBar setCurrentPage={setCurrentPage} />
          {currentPage !== 'main' ? (
            <DonationPage page={currentPage} donationPages={donationPages} />
          ) : (
            children
          )}
        </div>
      </body>
    </html>
  );
};
