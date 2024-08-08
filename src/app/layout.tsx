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
    futures: "https://host.nxt.blackbaud.com/donor-form/?svcid=tcs&formId=ab9c0c00-775d-4569-bd3d-d50a1cfce308&envid=p-BbGbRoTNyEqlmBrbIkE5nw&zone=usa",
    pubsoc: "https://www.classy.org/give/558150/?utm_source=Newsletters&utm_campaign=bf09d15d3e-EMAIL_CAMPAIGN_2024_02_06_03_20&utm_medium=email&utm_term=0_-bf09d15d3e-%5BLIST_EMAIL_ID%5D#!/donation/checkout",
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
