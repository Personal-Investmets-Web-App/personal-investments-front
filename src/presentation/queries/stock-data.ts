import { useQuery } from '@tanstack/react-query';

import { wait } from '@/utils/functions';

const fetchStockData = async (): Promise<{ date: string; value: number }[]> => {
  await wait(2000);
  console.log('fetching stock data');
  return [
    { date: '01/01/2021', value: 101 },
    { date: '01/02/2021', value: 200 },
    { date: '01/03/2021', value: 150 },
    { date: '01/04/2021', value: 300 },
    { date: '01/05/2021', value: 250 },
  ];
};

export const useStockData = () => {
  const {
    isPending: isStockDataPending,
    isError: isStockDataError,
    data: stockData,
    error: stockDataError,
  } = useQuery({
    queryKey: ['stock-data'],
    queryFn: () => fetchStockData(),
  });

  return { isStockDataPending, isStockDataError, stockData, stockDataError };
};
