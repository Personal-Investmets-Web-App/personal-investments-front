import { Card, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  type TooltipProps,
  YAxis,
} from 'recharts';

import { system } from '@/presentation/theme';

const SERIES_COFIG = {
  stockValue: {
    dataKey: 'stockValue',
    label: 'Valor de la acción',
    color: system.token('colors.success'),
  },
  purchaseValue: {
    dataKey: 'purchaseValue',
    label: 'Valor de la compra',
    color: system.token('colors.info'),
  },
};

interface ChartData {
  date: string;
  stockValue?: number;
  purchaseValue?: number;
}

interface Data {
  date: string;
  value: number;
}

interface LineChartProps {
  stockBehaviorData: Data[];
  purchasesData?: Data[];
}

const StockChartView: FC<LineChartProps> = ({ stockBehaviorData, purchasesData }) => {
  const mergedData = mergeData(stockBehaviorData, purchasesData);
  const hasPurchases = !!purchasesData;

  return (
    <ResponsiveContainer height="100%">
      <LineChart data={mergedData}>
        <Line
          type="monotone"
          dataKey={SERIES_COFIG.stockValue.dataKey}
          stroke={SERIES_COFIG.stockValue.color}
          strokeWidth={3}
          connectNulls={true}
        />
        {hasPurchases && (
          <Line
            type="monotone"
            dataKey={SERIES_COFIG.purchaseValue.dataKey}
            stroke="none"
            dot={{ fill: SERIES_COFIG.purchaseValue.color, strokeWidth: 0, r: 4 }}
            activeDot={{ fill: SERIES_COFIG.purchaseValue.color, strokeWidth: 0, r: 4 }}
            connectNulls={true}
          />
        )}
        <Tooltip content={<CustomTooltip />} />
        <XAxis dataKey="date" hide />
        <YAxis domain={['dataMin', 'dataMax']} hide />
      </LineChart>
    </ResponsiveContainer>
  );
};

/* Función que combina las dos series en un array ordenado */
const mergeData = (stockData: Data[], purchasesData: Data[] = []) => {
  // Crear un Set con todas las fechas de ambas series
  const datesSet = new Set<string>();
  stockData.forEach(item => datesSet.add(item.date));
  purchasesData.forEach(item => datesSet.add(item.date));

  const merged = Array.from(datesSet).map(date => {
    // Buscar en cada array el objeto correspondiente a la fecha
    const stockItem = stockData.find(d => d.date === date);
    const purchaseItem = purchasesData.find(d => d.date === date);
    return {
      date,
      [SERIES_COFIG.stockValue.dataKey]: stockItem ? stockItem.value : undefined,
      [SERIES_COFIG.purchaseValue.dataKey]: purchaseItem ? purchaseItem.value : undefined,
    };
  }) as ChartData[];

  // Ordenar de menor a mayor según la fecha
  merged.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
  return merged;
};

/* Función para transformar 'dd/mm/yyyy' en un objeto Date */
const parseDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split('/');
  // Forma ISO: yyyy-mm-dd
  return new Date(`${year}-${month}-${day}`);
};

const CustomTooltip: FC<TooltipProps<string, number>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Card.Root size="sm" bg={'neutral.subtle'} boxShadow={'elevation.1'} borderRadius="2xl">
        <Card.Header>
          <Text as="span" textStyle="caption">{`${label}`}</Text>
        </Card.Header>
        <Card.Body paddingTop={1}>
          <Text as="span" textStyle="caption">{`Valor de la acción: ${payload[0].value}`}</Text>
          {payload.length > 1 && (
            <Text as="span" textStyle="caption">{`Valor de la compra:: ${payload[1].value}`}</Text>
          )}
        </Card.Body>
      </Card.Root>
    );
  }
  return null;
};

export default StockChartView;
