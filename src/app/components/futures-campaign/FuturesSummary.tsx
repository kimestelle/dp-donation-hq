'use client'
import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'

export default function FuturesSummary() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({playOnInit: true, delay: 3000})])

    return (
    <>
        <div className='w-full flex flex-col lg:px-[20em] px-10 pb-10 text-white items-center'>
            <p className='text-white text-center'>
                We are launching the Futures Capital Campaign to renovate the permanent home for our publication. This critical initiative will mark our final step toward independence. 
                <br></br>
                <br></br>
                We plan to open this new facility within the next 2-3 years. Your contribution will ensure the Daily Pennsylvanian&apos;s continued success and independence for generations to come.
            </p>
        </div>
        <div className='relative w-full flex md:flex-row flex-col md:mb-20 z-1'>
            <div className='relative flex-1 futures-banner text-white m-5 mt-20 md:mb-20 z-5'>
                <ul>
                    <li>
                    Improved spaces and equipment
                    </li>
                    <li>
                    Cutting-edge media technology
                    </li>
                    <li>
                    Community hub for independent journalism
                    </li>
                </ul>
            </div>
            <div className='relative embla md:h-full h-80 flex-1 md:-ml-10 z-2 md:p-0 p-5 overflow-hidden' ref={emblaRef}>
                <div className="w-full md:h-full h-80 embla__container gap-5">
                    <div className="w-full h-full embla__slide bg-blue-100">

                    </div>
                    <div className="w-full h-full embla__slide bg-green-100">

                    </div>
                    <div className="w-full h-full embla__slide bg-red-100">

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}