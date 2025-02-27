import { FC } from 'react';

import SelectedStock from '@/app/components/dashboard/SelectedStock';
import StockList from '@/app/components/dashboard/StockList';
import Summary from '@/app/components/dashboard/Summary';
import SectionBox from '@/app/components/shared/SectionBox';

const HomePage: FC = () => (
  <main className="home-page">
    <SectionBox className="selected-stock-section">
      <SelectedStock />
    </SectionBox>
    <SectionBox className="stock-list-section">
      <StockList />
    </SectionBox>
    <SectionBox className="summary-section">
      <Summary />
    </SectionBox>
  </main>
);

export default HomePage;
