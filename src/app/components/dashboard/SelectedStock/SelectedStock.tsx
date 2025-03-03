import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
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
  <Grid
    gap={1}
    gridTemplateRows={{
      base: 'min-content 1fr min-content',
      md: '1fr auto 3fr',
      lg: 'min-content 1fr min-content',
    }}
    gridTemplateColumns="4fr 8fr"
    height="100%"
  >
    <GridItem asChild colSpan={2}>
      <Flex align="start" justify="space-between">
        <Box as="h2" textStyle="h2" fontWeight="{fontWeights.medium}">
          Nu Holdings Ltd.
        </Box>
        <Flex gap={1} alignItems="end">
          <Box as="h1" textStyle="h1" fontWeight="{fontWeights.bold}">
            11,08
          </Box>
          <Box as="span" textStyle="caption" mb={1}>
            USD
          </Box>
        </Flex>
      </Flex>
    </GridItem>
    <GridItem colSpan={2}>
      <StockChart
        stockBehaviorData={dummyData.stockBehaviorData}
        purchasesData={dummyData.purchasesData}
      />
    </GridItem>
    <GridItem colSpan={2}>
      <Flex direction="column" justify="space-between" align="center">
        <Text textStyle="subtitle">Purchases</Text>
        <Text textStyle="subtitle" color="gray.500">
          2
        </Text>
        <Text textStyle="subtitle">Purchases</Text>
        <Text textStyle="subtitle" color="gray.500">
          2
        </Text>
      </Flex>
    </GridItem>
  </Grid>
);

export default SelectedStock;
