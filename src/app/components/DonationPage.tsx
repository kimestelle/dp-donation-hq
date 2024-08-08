import React from 'react';

export interface DonationPageURLs {
  annual: string;
  futures: string;
  pubsoc: string;
}

interface DonationPageProps {
  page: keyof DonationPageURLs;
  donationPages: DonationPageURLs;
}

const DonationPage: React.FC<DonationPageProps> = ({ page, donationPages }) => {
  return (
    <div className="pt-16">
      <iframe src={donationPages[page]} className="w-full h-screen" />
    </div>
  );
};

export default DonationPage;
