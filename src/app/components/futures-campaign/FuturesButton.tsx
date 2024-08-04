'use client'
import Image from 'next/image';

export default function FuturesButton() {
    return (
        <div className='w-full flex flex-col md:flex-row mb-20'>
            <Image
            width={800}
            height={100}
            src="/svg-assets/funding-progress.svg"
            alt="Funding Progress"
            className="h-100"
            />
            <button>
                Donate to the Futures Campaign!
            </button>
        </div>
    )
}