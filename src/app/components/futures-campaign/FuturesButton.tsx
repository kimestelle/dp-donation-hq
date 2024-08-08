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
            className="w-full"
            />
            <div className='p-10 flex flex-col md:flex-row items-start gap-5'>
                <p className='flex-1 text-white'>Your support is especially crucial now Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique tenetur expedita veniam saepe atque nisi exercitationem maxime animi, commodi quae tempore ullam ex, dolore aperiam magnam assumenda libero suscipit!</p>
                <button className='metallic-button '>
                    <h5>Give to the Futures Campaign!</h5>
                </button>
            </div>
        </div>
    )
}