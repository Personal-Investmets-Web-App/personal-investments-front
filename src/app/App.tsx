import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import StockChart from '@/app/components/StockChart'
import BulmaExample from '@/app/components/BulmaExample'

const queryClient = new QueryClient()


const dummyData = {
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
  ]
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient} >
      <div>
        Hola mundo
        <button onClick={() => setCount((previous) => previous + 1)}>Count: {count}</button>
        {count}
      </div>
      <StockChart stockBehaviorData={dummyData.stockBehaviorData} purchasesData={dummyData.purchasesData} />
      <ReactQueryDevtools initialIsOpen={false} />
      <BulmaExample />
    </QueryClientProvider>
  )
}

export default App
