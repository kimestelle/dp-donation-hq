'use client';
import { useState, useEffect } from 'react';

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
            <img src="logos/dp-wordmark.svg" alt="DP Logo" className="max-h-14 h-14 w-100 max-w-full object-contain" />
          );
        } else {
          newMessage = 'independent media';
        }
        setFadeIn(true);
        return newMessage;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (fadeIn) {
      const timer = setTimeout(() => setFadeIn(false), 1000); // Duration of the fade-in effect
      return () => clearTimeout(timer);
    }
  }, [fadeIn]);

  return (
    <div className="relative h-screen flex flex-col p-10 bg-main-scene">
      <h1>Your</h1>
      <h1 className="dp-red leading-tight">philanthropic headquarters</h1>
      <h1>for supporting</h1>
      <div className={`flex mt-4 h-20 w-full items-center z-5 ${fadeIn ? 'fade-in' : ''}`}>
        {typeof message === 'string' ? <h2>{message}</h2> : message}
      </div>
    </div>
  );
}
