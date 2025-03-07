import { Flex, Text, FlexProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

interface SelectedStockMyStocksProps extends FlexProps {
  stockQuantity: string;
}

const SelectedStockMyStocks = forwardRef<HTMLDivElement, SelectedStockMyStocksProps>(
  ({ stockQuantity, ...props }, ref) => (
    <Flex direction="column" justify="end" align="center" py={8} gap={4} ref={ref} {...props}>
      <Text as="span" textStyle="h1" fontWeight="{fontWeights.bold}">
        {stockQuantity}
      </Text>
      <Text as="span" textStyle="h2" fontWeight="{fontWeights.medium}">
        Mis acciones
      </Text>
    </Flex>
  )
);

SelectedStockMyStocks.displayName = 'SelectedStockMyStocks';

export default SelectedStockMyStocks;
