import { Grid, GridItem } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';

import SelectedStock from '@/app/components/dashboard/SelectedStock';
import StockList from '@/app/components/dashboard/StockList';
import Summary from '@/app/components/dashboard/Summary';
import SectionBox from '@/app/components/shared/SectionBox';

export const Route = createFileRoute('/_dashboard/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Grid
      as="main"
      padding={4}
      flexGrow={1}
      gap={{ base: 2, md: 4 }}
      gridTemplateRows={{ base: '1fr 1fr 1fr', md: '1fr 1fr' }}
      gridTemplateColumns={{ base: '1fr', md: '6fr 6fr', lg: '8fr 4fr' }}
    >
      <GridItem asChild rowSpan={{ base: 1, lg: 2 }} colSpan={{ base: 1, md: 2, lg: 1 }}>
        <SectionBox>
          <SelectedStock />
        </SectionBox>
      </GridItem>
      <GridItem asChild rowSpan={1} colSpan={1}>
        <SectionBox>
          <StockList />
        </SectionBox>
      </GridItem>
      <GridItem asChild rowSpan={1} colSpan={1}>
        <SectionBox>
          <Summary />
        </SectionBox>
      </GridItem>
    </Grid>
  );
}
