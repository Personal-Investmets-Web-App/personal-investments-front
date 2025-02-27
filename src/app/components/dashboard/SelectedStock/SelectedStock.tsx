import { FC } from 'react';

import StockChart from '@/app/components/dashboard/StockChart';

const dummyData = {
  stockBehaviorData: [
    { date: '01/01/2021', value: 100 },
    { date: '01/02/2021', value: 200 },
    { date: '01/03/2021', value: 150 },
    { date: '01/04/2021', value: 300 },
    { date: '01/05/2021', value: 250 },
  ],
  purchasesData: [
    { date: '01/01/2021', value: 103 },
    { date: '02/01/2021', value: 203 },
  ],
};

const SelectedStock: FC = () => (
  <>
    <h2>Nu Holdings Ltd.</h2>
    <StockChart
      stockBehaviorData={dummyData.stockBehaviorData}
      purchasesData={dummyData.purchasesData}
    />
  </>
);

export default SelectedStock;
