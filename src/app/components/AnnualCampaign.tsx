import YourGiftFunds from "./annual-campaign/YourGiftFunds"
import DpToday from "./annual-campaign/DpToday"
import AnnualDonateButton from "./annual-campaign/AnnualDonateButton"
import { TestimonyBanner } from "./annual-campaign/TestimonyBanner"

export default function AnnualCampaign() {
    return (
        <div className='w-screen flex flex-col p-5 md:p-10 bg-gradient-to-b from-white to-gray-200'>
            <DpToday/>
            <TestimonyBanner/>
            <YourGiftFunds/>
            <AnnualDonateButton/>
        </div>
    )
}