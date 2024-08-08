export default function AnnualDonateButton() {
    return (
        <div className='w-full flex flex-col md:flex-row gap-5 items-center md:items-start pt-5'>
            <button className='md:flex-1 w-full metallic-button'>
                <h5>Give Here!</h5>
            </button>
            <div className='w-full flex-[3_3_0%] flex flex-row items-start gap-3 bg-white rounded-md p-5'>
                <img src='logos/pubsoc-color.png' className='w-12 md:w-40'/>
                <div className='flex flex-col gap-2'>
                    <h5 className='font-bold'>
                        Join the Publishers Society &gt;
                    </h5>   
                    <p>
                        Step up your game and join the Publishers Society! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque magni assumenda accusantium eaque id, temporibus eum! Nemo sapiente repudiandae libero ducimus consequatur accusamus exercitationem, quae tenetur commodi delectus adipisci?
                    </p>
                </div>
            </div>
        </div>
    )
}