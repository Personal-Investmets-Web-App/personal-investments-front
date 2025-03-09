import { VStack, HStack, Text } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

import CustomArrow from './CustomArrow';

const meta: Meta<typeof CustomArrow> = {
  title: 'Components/Shared/CustomArrow',
  component: CustomArrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomArrow>;

export const Default: Story = {
  args: {
    direction: 'right',
    length: '30px',
    thickness: '2px',
    arrowColor: 'currentColor',
  },
};

export const Directions: Story = {
  render: () => (
    <VStack gap={8} align="flex-start">
      <HStack gap={4}>
        <Text width="80px">Derecha:</Text>
        <CustomArrow direction="right" length={40} />
      </HStack>
      <HStack gap={4}>
        <Text width="80px">Izquierda:</Text>
        <CustomArrow direction="left" length={40} />
      </HStack>
      <HStack gap={4}>
        <Text width="80px">Arriba:</Text>
        <CustomArrow direction="up" length={40} />
      </HStack>
      <HStack gap={4}>
        <Text width="80px">Abajo:</Text>
        <CustomArrow direction="down" length={40} />
      </HStack>
    </VStack>
  ),
};

export const Customized: Story = {
  render: () => (
    <VStack gap={8} align="flex-start">
      <HStack gap={4}>
        <Text width="200px">Flecha larga y gruesa:</Text>
        <CustomArrow direction="right" length="60px" thickness="4px" />
      </HStack>
      <HStack gap={4}>
        <Text width="200px">Flecha corta y delgada:</Text>
        <CustomArrow direction="right" length="20px" thickness="1px" />
      </HStack>
      <HStack gap={4}>
        <Text width="200px">Flecha roja:</Text>
        <CustomArrow direction="right" arrowColor="red.500" />
      </HStack>
      <HStack gap={4}>
        <Text width="200px">Flecha azul vertical:</Text>
        <CustomArrow direction="down" arrowColor="blue.500" length="40px" />
      </HStack>
    </VStack>
  ),
};
