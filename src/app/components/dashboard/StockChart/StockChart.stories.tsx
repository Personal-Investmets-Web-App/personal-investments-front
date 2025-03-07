import { Meta, StoryObj } from '@storybook/react';

import StockChart from './StockChart';

const meta = {
  title: 'Componentes/StockChart',
  component: StockChart,
  tags: ['autodocs'],
} satisfies Meta<typeof StockChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
  },
};
