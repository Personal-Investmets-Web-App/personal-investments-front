import { EmptyState, Text, Spinner, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { HiColorSwatch } from 'react-icons/hi';

import { useStockData } from '@/presentation/queries/stock-data';

import StockChartView from './StockChartView';

const purchasesData = [
  { date: '01/01/2021', value: 103 },
  { date: '02/01/2021', value: 203 },
];

const StockChart: FC = () => {
  const { isStockDataPending, isStockDataError, stockData, stockDataError } = useStockData();

  if (isStockDataPending)
    return (
      <VStack colorPalette="white" height="100%" justify="center" align="center" width="100%">
        <Spinner color="colorPalette.600" size="lg" />
        <Text color="colorPalette.600" textStyle="h1">
          Loading...
        </Text>
      </VStack>
    );
  if (isStockDataError || !stockData)
    return <span>Error fetching stock chart data {stockDataError?.message}</span>;

  if (stockData.length === 0)
    return (
      <EmptyState.Root
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <EmptyState.Content>
          <EmptyState.Indicator>
            <HiColorSwatch />
          </EmptyState.Indicator>
          <VStack textAlign="center">
            <EmptyState.Title>No results found</EmptyState.Title>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    );

  return <StockChartView stockBehaviorData={stockData} purchasesData={purchasesData} />;
};

export default StockChart;
