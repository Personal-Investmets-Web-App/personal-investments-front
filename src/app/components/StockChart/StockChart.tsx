import { type FC } from 'react';
import './stock-chart.scss';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, type TooltipProps } from 'recharts';

const SERIES_COFIG = {
  stockValue: {
    dataKey: 'stockValue',
    label: 'Valor de la acción',
    color: '#4AB03A',
  },
  purchaseValue: {
    dataKey: 'purchaseValue',
    label: 'Valor de la compra',
    color: '#000',
  },
}

interface Data {
  date: string;
  value: number;
}

interface LineChartProps {
  stockBehaviorData: Data[];
  purchasesData?: Data[];
}

/* Función para transformar 'dd/mm/yyyy' en un objeto Date */
const parseDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split('/');
  // Forma ISO: yyyy-mm-dd
  return new Date(`${year}-${month}-${day}`);
};

/* Función que combina las dos series en un array ordenado */
const mergeData = (stockData: Data[], purchasesData: Data[] = []) => {
  // Crear un Set con todas las fechas de ambas series
  const datesSet = new Set<string>();
  stockData.forEach((item) => datesSet.add(item.date));
  purchasesData.forEach((item) => datesSet.add(item.date));

  const merged = Array.from(datesSet).map((date) => {
    // Buscar en cada array el objeto correspondiente a la fecha
    const stockItem = stockData.find((d) => d.date === date);
    const purchaseItem = purchasesData.find((d) => d.date === date);
    return {
      date,
      [SERIES_COFIG.stockValue.dataKey]: stockItem ? stockItem.value : undefined,
      [SERIES_COFIG.purchaseValue.dataKey]: purchaseItem ? purchaseItem.value : undefined,
    };
  });

  // Ordenar de menor a mayor según la fecha
  merged.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
  return merged;
};

const StockChart: FC<LineChartProps> = ({ stockBehaviorData, purchasesData }) => {

  // Combinar las series en un solo array de datos
  const mergedData = mergeData(stockBehaviorData, purchasesData);

  return (
    <ResponsiveContainer aspect={16/6} width="100%" >
      <LineChart data={mergedData}>
        <Line 
          type="monotone"
          dataKey={SERIES_COFIG.stockValue.dataKey}
          stroke={SERIES_COFIG.stockValue.color}
          strokeWidth={2}
          connectNulls={true}
        />
        {purchasesData && (
          <Line
            type="monotone"
            dataKey={SERIES_COFIG.purchaseValue.dataKey}
            stroke="none"
            dot={{ fill: SERIES_COFIG.purchaseValue.color, strokeWidth: 0, r: 3 }}
            activeDot={{ fill: SERIES_COFIG.purchaseValue.color, strokeWidth: 0, r: 4 }}
            connectNulls={true}
          />
        )}
        <Tooltip content={<CustomTooltip  />} />
        <XAxis dataKey="date" hide />
      </LineChart>
    </ResponsiveContainer>
  )
};

export default StockChart;

const CustomTooltip: FC<TooltipProps<string, number>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip__label">{`${label}`}</p>
        <p className="intro">{`Valor de la acción: ${payload[0].value}`}</p>
        {payload.length > 1 && <p className="intro">{`Valor de la compra: ${payload[1].value}`}</p>}
      </div>
    );
  }
  return null;
};
