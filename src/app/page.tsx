import Cover from './sections/Cover'
import { TestimonyBanner } from './sections/TestimonyBanner'
import History from './sections/History';
import AnnualCampaign from './components/AnnualCampaign';
import FuturesCampaign from './components/FuturesCampaign';
import PlanGiving from './components/PlanGiving'
import BottomBar from './components/BottomBar';

const MainPage: React.FC = () => {
  return (
    <div className="pt-16">
      <Cover/>
      <TestimonyBanner/>
      <History/>
      <AnnualCampaign/>
      <FuturesCampaign/>
      <PlanGiving/>
      <BottomBar/>
    </div>
  );
};

export default MainPage;
