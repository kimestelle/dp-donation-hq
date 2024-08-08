export default function DpToday() {
    return (
        <> 
            <div className='w-full flex flex-row justify-end items-end gap-2 -mb-4'>
                <p className='mb-3.5'>support our</p>
                <h1 className='sm:text-[3em]'>today</h1>
                <p className='mb-3.5'>with the</p>
            </div>
            <div className='w-full flex flex-row justify-end items-end mb-5'>
                <h1 className='sm:text-[3em]'>Annual Campaign</h1>
            </div>

{/* grid of stats */}
            <div className='w-full flex flex-col gap-1 text-white mb-20'> 
                <div className='w-full h-40 md:h-80 flex flex-row leading-snug gap-1'>
                    <div className='bg-students flex-[2_2_0%] flex flex-col justify-center items-center'>
                        <h1 className='md:text-[4em]'>
                            200
                        </h1 >
                        <p className='text-white'>
                            student staff
                        </p>
                    </div>
                    <div className='bg-newspapers flex-1 flex flex-col justify-center items-center text-center'>
                        <h1 className="md:text-[4em]">
                            100k
                        </h1>
                        <p className='text-white'>
                            copies printed yearly
                        </p>
                    </div>
                </div>
                <div className='w-full h-20 md:h-40 flex flex-row leading-snug text-center gap-1'>
                    <div className='bg-red-900 flex-[3_3_0%] flex flex-col justify-center items-center'>
                        <h1 className='md:text-[4em]'>
                            1.3k
                        </h1>
                        <p className='text-white'>
                            articles per semester
                        </p>
                    </div>
                    <div className='bg-publications flex-[2_2_0%] flex flex-col justify-center items-center'>
                        <h1 className='md:text-[4em]'>
                            3
                        </h1>
                        <p className='text-white'>
                            publications
                        </p>
                    </div>
                    <div className='bg-black flex-1 flex flex-col justify-center items-center'>
                        <h1 className='md:text-[4em]'>
                            4
                        </h1 >
                        <p className='text-white'>
                            newsletters
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}