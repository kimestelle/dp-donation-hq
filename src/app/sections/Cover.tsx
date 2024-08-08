'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Cover() {
  const [message, setMessage] = useState<string | React.ReactNode>('independent media');
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prevMessage) => {
        let newMessage;
        if (prevMessage === 'independent media') {
          newMessage = 'student journalists';
        } else if (prevMessage === 'student journalists') {
          newMessage = (
            <Image
            src="/logos/dp-wordmark.svg"
            alt="DP Wordmark"
            width={480}
            height={100}
            className="max-h-14 h-14 w-100 max-w-full object-contain"
            />
          );
        } else {
          newMessage = 'independent media';
        }
        setFadeIn(true);
        return newMessage;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (fadeIn) {
      const timer = setTimeout(() => setFadeIn(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [fadeIn]);

  return (
    <div className="relative h-screen flex flex-col p-10 bg-main-scene sm:text-[2em]">
      <h1>Your</h1>
      <h1 className="dp-red leading-tight sm:text-[2em]">philanthropic headquarters</h1>
      <h1>for supporting</h1>
      <div className={`flex mt-4 h-20 w-full items-center z-5  ${fadeIn ? 'fade-in' : ''}`}>
        {typeof message === 'string' ? <h2 className='sm:text-[2em]'>{message}</h2> : message}
      </div>
    </div>
  );
}
