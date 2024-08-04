import Image from 'next/image'

export default function PlanGiving() {
    return (
        <div className='w-full flex flex-col text-white bg-[#3B0103] pt-20 justify-center items-center'>
            <Image
                width={2500}
                height={1500}
                src="/svg-assets/plan-giving-title.svg"
                alt="140 logo"
                className="w-full pl-60"
            />
            <div className='bg-panel w-full h-[80svh] m-10 mb-0 text-black flex justify-center items-center'>
                <h3>
                    What is plan giving?
                </h3>
            </div>
        </div>
    )
}