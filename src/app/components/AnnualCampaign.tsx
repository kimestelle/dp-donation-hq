import YourGiftFunds from "./annual-campaign/YourGiftFunds"
import DpToday from "./annual-campaign/DpToday"
import AnnualDonateButton from "./annual-campaign/AnnualDonateButton"

export default function AnnualCampaign() {
    return (
        <div className='w-screen flex flex-col p-10'>
            <DpToday/>
            <YourGiftFunds/>
            <AnnualDonateButton/>
        </div>
    )
}