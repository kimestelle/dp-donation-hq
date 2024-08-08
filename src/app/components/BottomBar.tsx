
import Image
 from "next/image"
export default function BottomBar() {
    return (
        <>
        <div className='w-full bg-black flex flex-row justify-start items-start text-white px-20 pt-20 md:justify-center'>
            <Image
                width={1000}
                height={500}
                src='/logos/foundation-logo.png'
                alt='DP Foundation'
                className='md:w-60 w-full'
            />
        </div>
        <div className='w-full h-2 bg-gray-800'>

        </div>
        </>
    )
}