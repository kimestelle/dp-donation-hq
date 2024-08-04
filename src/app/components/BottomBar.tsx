
import Image
 from "next/image"
export default function BottomBar() {
    return (
        <>
        <div className='w-full bg-dp-blue flex flex-row justify-center items-start text-white p-10 gap-10'>
            <Image
                width={1000}
                height={500}
                src='/logos/dpaa-logo.png'
                alt='DPAA Logo'
                className='flex-1'
            />
            <div className='flex-1'>
                <h3>
                    Brought to you by
                </h3>
                <h4>
                    The DP Alumni Association
                </h4>
            </div>
        </div>
        <div className='w-full h-10 bg-gray-800'>

        </div>
        </>
    )
}