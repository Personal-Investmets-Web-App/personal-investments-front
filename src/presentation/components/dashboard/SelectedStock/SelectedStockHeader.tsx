import { Flex, Text } from '@chakra-ui/react';
import { forwardRef, ComponentPropsWithoutRef } from 'react';

export interface SelectedStockHeaderProps extends ComponentPropsWithoutRef<typeof Flex> {
  /**
   * Nombre de la acción seleccionada
   */
  stockName: string;
  /**
   * Valor actual de la acción
   */
  stockValue: string | number;
  /**
   * Moneda en la que se expresa el valor
   */
  currency: string;
}

const SelectedStockHeader = forwardRef<HTMLDivElement, SelectedStockHeaderProps>(
  ({ stockName, stockValue, currency, ...props }, ref) => (
    <Flex align="end" justify="space-between" ref={ref} {...props}>
      <Text as="h2" textStyle="h2" fontWeight="{fontWeights.medium}">
        {stockName}
      </Text>
      <Flex gap={1} alignItems="end">
        <Text as="h1" textStyle="h1" fontWeight="{fontWeights.bold}">
          {stockValue}
        </Text>
        <Text as="span" textStyle="caption" mb={1}>
          {currency}
        </Text>
      </Flex>
    </Flex>
  )
);

export default SelectedStockHeader;
