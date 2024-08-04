import FuturesCover from "./futures-campaign/FuturesCover"
import FuturesSummary from "./futures-campaign/FuturesSummary"

export default function FuturesCampaign() {
    return (
        <div className='w-screen flex flex-col bg-black '>
            <FuturesCover/>
            <FuturesSummary/>
        </div>
    )
}