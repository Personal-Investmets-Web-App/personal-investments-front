import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

import StockChart from '../StockChart';

import SelectedStockHeader from './SelectedStockHeader';
import SelectedStockMyInvestment from './SelectedStockMyInvestment';
import SelectedStockMyStocks from './SelectedStockMyStocks';

const SelectedStock: FC = () => (
  <Grid
    gap={1}
    gridTemplateRows={{
      base: 'min-content 1fr min-content',
      md: 'min-content 1fr min-content',
    }}
    gridTemplateColumns="8fr 4fr"
    height="100%"
  >
    <GridItem asChild colSpan={2}>
      <SelectedStockHeader stockName="Nu Holdings Ltd." stockValue="11,08" currency="USD" />
    </GridItem>
    <GridItem colSpan={2}>
      <StockChart />
    </GridItem>
    <GridItem asChild colSpan={1}>
      <SelectedStockMyInvestment purchaseValue="26,11" currentValue="28,03" />
    </GridItem>
    <GridItem asChild colSpan={1}>
      <SelectedStockMyStocks stockQuantity="2,53037" />
    </GridItem>
  </Grid>
);

export default SelectedStock;
