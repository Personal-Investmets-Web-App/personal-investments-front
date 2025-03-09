import { FC } from 'react';

import SelectedStock from '@/presentation/components/dashboard/SelectedStock';
import StockList from '@/presentation/components/dashboard/StockList';
import Summary from '@/presentation/components/dashboard/Summary';
import SectionBox from '@/presentation/components/shared/SectionBox';

const HomePage: FC = () => (
  <main className="home-page">
    <SectionBox>
      <SelectedStock />
    </SectionBox>
    <SectionBox>
      <StockList />
    </SectionBox>
    <SectionBox>
      <Summary />
    </SectionBox>
  </main>
);

export default HomePage;
