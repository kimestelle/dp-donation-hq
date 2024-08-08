'use client'
import Image from 'next/image';

export default function FuturesButton() {
    return (
        <div className='w-full flex flex-col mb-20 justify-center items-center gap-3'>
            <Image
            width={800}
            height={100}
            src="/svg-assets/funding-progress.svg"
            alt="Funding Progress"
            className="h-100"
            />
            <button className='metallic-button'>
                Donate to the Futures Campaign!
            </button>
        </div>
    )
}