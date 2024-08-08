export default function DpToday() {
    return (
        <> 
            <div className='w-full flex flex-row justify-end items-end gap-2 -mb-4'>
                <p className='mb-3.5 md:text-[2em]'>support our</p>
                <h1 className='md:text-[5em] md:-mb-2'>today</h1>
                <p className='mb-3.5 md:text-[2em]'>with the</p>
            </div>
            <div className='w-full flex flex-row justify-end items-end mb-5'>
                <h1 className='md:text-[5em]'>Annual Campaign</h1>
            </div>

{/* grid of stats */}
            <div className='w-full flex flex-col gap-1 text-white mb-10'> 
                <div className='w-full h-40 md:h-80 flex flex-row leading-snug gap-1'>
                    <div className='bg-students flex-[2_2_0%] flex flex-col justify-center items-center'>
                        <h1 className='md:text-[6em] md:-mb-5'>
                            200
                        </h1 >
                        <p className='text-white'>
                            student staff
                        </p>
                    </div>
                    <div className='bg-newspapers flex-1 flex flex-col justify-center items-center text-center'>
                        <h1 className="md:text-[6em] md:-mb-5">
                            100k
                        </h1>
                        <p className='text-white'>
                            copies printed yearly
                        </p>
                    </div>
                </div>
                <div className='w-full h-20 md:h-40 flex flex-row leading-snug text-center gap-1'>
                    <div className='bg-red-900 flex-[3_3_0%] flex flex-col justify-center items-center'>
                        <h1 className='md:text-[6em] md:-mb-5'>
                            1.3k
                        </h1>
                        <p className='text-white'>
                            articles per semester
                        </p>
                    </div>
                    <div className='bg-publications flex-[2_2_0%] flex flex-col justify-center items-center'>
                        <h1 className='md:text-[6em] md:-mb-5'>
                            3
                        </h1>
                        <p className='text-white'>
                            publications
                        </p>
                    </div>
                    <div className='bg-black flex-1 flex flex-col justify-center items-center'>
                        <h1 className='md:text-[6em] md:-mb-5'>
                            4
                        </h1 >
                        <p className='text-white'>
                            newsletters
                        </p>
                    </div>
                </div>

                <h3 className='text-center md:px-10 py-5 bg-black'>
                    The Annual Advances Campaign is an ongoing fund that supports the core day-to-day operations of the newsroom. 
                    Last year, alumni and friends raised over $250,000, with consistent 200% yearly increases since 2020.
                    Your support enables us to stay reliable and independent.
                </h3>
            </div>
        </>
    )
}