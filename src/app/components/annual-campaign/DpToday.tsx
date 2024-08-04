export default function DpToday() {
    return (
        <> 
            <div className='w-full flex flex-row justify-end items-end gap-2 -mb-4'>
                <p className='mb-3.5'>support our</p>
                <h1>today</h1>
                <p className='mb-3.5'>with the</p>
            </div>
            <div className='w-full flex flex-row justify-end items-end mb-5'>
                <h1>Annual Campaign</h1>
            </div>

{/* grid of stats */}
            <div className='w-full flex flex-col p-3 gap-3 bg-red-100 mb-10'> 
                <div className='w-full h-40 flex flex-row bg-red-200 gap-3'>
                    <div className='bg-red-400 flex-[2_2_0%] flex flex-col leading-9 justify-center items-center'>
                        <h1>
                            200
                        </h1>
                        <p>
                            student staff
                        </p>
                    </div>
                    <div className='bg-red-400 flex-1 flex flex-col leading-9 justify-center items-center'>
                        <h1>
                            200
                        </h1>
                        <p>
                            student staff
                        </p>
                    </div>
                </div>
                <div className='w-full h-40 flex flex-row bg-red-200 gap-3'>
                    <div className='bg-red-400 flex-[3_3_0%] flex flex-col leading-9 justify-center items-center'>
                        <h1>
                            200
                        </h1>
                        <p>
                            student staff
                        </p>
                    </div>
                    <div className='bg-red-400 flex-[2_2_0%] flex flex-col leading-9 justify-center items-center'>
                        <h1>
                            200
                        </h1>
                        <p>
                            student staff
                        </p>
                    </div>
                    <div className='bg-red-400 flex-1 flex flex-col leading-9 justify-center items-center'>
                        <h1>
                            200
                        </h1>
                        <p>
                            student staff
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}