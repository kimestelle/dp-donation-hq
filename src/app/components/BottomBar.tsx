
import Image
 from "next/image"
export default function BottomBar() {
    return (
        <>
        <div className='w-full bg-dp-blue flex flex-row justify-start items-start text-white p-10 md:px-20 gap-10'>
            <Image
                width={1000}
                height={500}
                src='/logos/dpaa-logo.png'
                alt='DPAA Logo'
                className='md:w-20 w-16'
            />
            <div className='md:flex-[4_4_0%] flex-[3_3_0%]'>
                <p className='text-white'>
                    The DP Alumni Association Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error voluptatibus eius commodi nisi quas quod fugit incidunt, natus suscipit necessitatibus illum animi itaque magni neque quo nemo? Voluptas, incidunt quod?
                </p>
            </div>
        </div>
        <div className='w-full h-5 bg-black'>

        </div>
        </>
    )
}