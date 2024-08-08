import Image from 'next/image'

export default function PlanGiving() {
    return (
        <div className='w-full flex flex-col text-white bg-[#3B0103] p-10 md:p-20 pb-0 justify-center items-center'>
            <Image
                width={2500}
                height={1500}
                src="/svg-assets/plan-giving-title.svg"
                alt="140 logo"
                className="w-full"
            />
            <div className='bg-panel w-full p-10 m-10 mb-0 text-black flex flex-col gap-3 justify-center items-center'>
                <h3>
                    What is plan giving?
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente adipisci aliquam quam nihil quas harum laborum omnis, provident ea ipsum soluta exercitationem quos quisquam illum libero repellat. Consequatur, mollitia culpa!
                </p>
            </div>
        </div>
    )
}