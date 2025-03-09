import { Box, Flex, Text, type FlexProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

import CustomArrow from '@/presentation/components/shared/CustomArrow';

interface SelectedStockMyInvestmentProps extends FlexProps {
  purchaseValue: string;
  currentValue: string;
}

const SelectedStockMyInvestment = forwardRef<HTMLDivElement, SelectedStockMyInvestmentProps>(
  ({ purchaseValue, currentValue, ...rest }, ref) => (
    <Flex
      ref={ref}
      direction="column"
      justify="end"
      align="center"
      py={8}
      gap={4}
      borderRight="2px solid"
      borderColor="{colors.neutral.subtle}"
      {...rest}
    >
      <Flex gap={8} align="center" justify="center">
        <Flex direction="column" align="center" justify="center">
          <Text as="span" textStyle="h1" fontWeight="{fontWeights.bold}">
            ${purchaseValue}
          </Text>
          <Text as="span" textStyle="title" fontWeight="{fontWeights.medium}">
            Valor compras
          </Text>
        </Flex>
        <Box mx={2}>
          <CustomArrow
            direction="right"
            length={60}
            thickness={2}
            arrowColor="currentColor"
            value={1.92}
            percentage={7.3}
          />
        </Box>
        <Flex direction="column" align="center" justify="center">
          <Text as="span" textStyle="h1" fontWeight="{fontWeights.bold}">
            ${currentValue}
          </Text>
          <Text as="span" textStyle="title" fontWeight="{fontWeights.medium}">
            Valor actual
          </Text>
        </Flex>
      </Flex>
      <Text as="span" textStyle="h2" fontWeight="{fontWeights.medium}">
        Mi inversión
      </Text>
    </Flex>
  )
);

export default SelectedStockMyInvestment;
