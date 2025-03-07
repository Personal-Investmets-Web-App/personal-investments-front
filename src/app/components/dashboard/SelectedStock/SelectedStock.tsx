import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

import StockChart from '@/app/components/dashboard/StockChart';

import { SelectedStockHeader } from './SelectedStockHeader';
import SelectedStockMyInvestment from './SelectedStockMyInvestment';
import SelectedStockMyStocks from './SelectedStockMyStocks';

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
  <Grid
    gap={1}
    gridTemplateRows={{
      base: 'min-content 1fr min-content',
      md: 'min-content 1fr min-content',
    }}
    gridTemplateColumns="4fr 8fr"
    height="100%"
  >
    <GridItem asChild colSpan={2}>
      <SelectedStockHeader stockName="Nu Holdings Ltd." stockValue="11,08" currency="USD" />
    </GridItem>
    <GridItem colSpan={2}>
      <StockChart
        stockBehaviorData={dummyData.stockBehaviorData}
        purchasesData={dummyData.purchasesData}
      />
    </GridItem>
    <GridItem asChild colSpan={1}>
      <SelectedStockMyStocks stockQuantity="2,53037" />
    </GridItem>
    <GridItem asChild colSpan={1}>
      <SelectedStockMyInvestment purchaseValue="26,11" currentValue="28,03" />
    </GridItem>
  </Grid>
);

export default SelectedStock;
