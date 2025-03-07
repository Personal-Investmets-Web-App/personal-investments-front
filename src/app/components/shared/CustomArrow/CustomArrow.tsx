import { Box, Flex, Text, type FlexProps } from '@chakra-ui/react';
import { forwardRef, type CSSProperties } from 'react';
import './custom-arrow.scss';

export interface CustomArrowProps extends FlexProps {
  /**
   * Longitud de la flecha (en píxeles o unidades relativas)
   */
  length?: string | number;
  /**
   * Grosor de la flecha (en píxeles o unidades relativas)
   */
  thickness?: string | number;
  /**
   * Color de la flecha
   */
  arrowColor?: string;
  /**
   * Dirección de la flecha (right, left, up, down)
   */
  direction?: 'right' | 'left' | 'up' | 'down';
}

const CustomArrow = forwardRef<HTMLDivElement, CustomArrowProps>(
  (
    {
      length = '30px',
      thickness = '2px',
      arrowColor = 'currentColor',
      direction = 'right',
      ...rest
    },
    ref
  ) => {
    const className = `custom-arrow custom-arrow--${direction}`;

    const directionClass = direction === 'right' ? 'column' : 'row';
    const gap = direction === 'right' ? 2 : 4;

    return (
      <Flex align="center" justify="center" direction={directionClass} gap={gap}>
        <Text color="{colors.success}">$7,34</Text>
        <Flex
          ref={ref}
          className={className}
          style={
            {
              '--arrow-length': typeof length === 'number' ? `${length}px` : length,
              '--arrow-thickness': typeof thickness === 'number' ? `${thickness}px` : thickness,
              '--arrow-color': arrowColor,
            } as CSSProperties
          }
          {...rest}
        />
        <Text color="{colors.success}">1.04%</Text>
      </Flex>
    );
  }
);

CustomArrow.displayName = 'CustomArrow';

export default CustomArrow;
