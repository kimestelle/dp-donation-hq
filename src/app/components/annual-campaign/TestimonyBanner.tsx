'use client'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'

import TestimonyBlock, { TestimonyProps } from './TestimonyBlock';

const testimonies: TestimonyProps[] = [
  {
    name: 'Estelle Kim',
    testimony: 'I had the time of my life at the DP! So thankful for the experience.',
    year: '140th Board, c/o 2027'
  },
  {
    name: 'Estelle Kim',
    testimony: 'I had the time of my life at the DP! So thankful for the experience.',
    year: '140th Board, c/o 2027'
  },
  {
    name: 'Estelle Kim',
    testimony: 'I had the time of my life at the DP! So thankful for the experience.',
    year: '140th Board, c/o 2027'
  },
  {
    name: 'Estelle Kim',
    testimony: 'I had the time of my life at the DP! So thankful for the experience.',
    year: '140th Board, c/o 2027'
  },
  {
    name: 'Estelle Kim',
    testimony: 'I had the time of my life at the DP! So thankful for the experience.',
    year: '140th Board, c/o 2027'
  }
];

export function TestimonyBanner() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({playOnInit: true, delay: 3000})])

  return (
    <div className='embla' ref={emblaRef}>
            <div className="embla__container">
                {testimonies.map((testimony, index) => (
                <div key={index} className="embla__slide embla-small-slide p-2 pb-4 mb-10">
                <TestimonyBlock 
                name={testimony.name} 
                testimony={testimony.testimony} 
                year={testimony.year} 
                />
                </div>
                ))}
            </div>
    </div>
  );
}
