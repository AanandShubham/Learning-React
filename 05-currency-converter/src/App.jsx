import { useState } from 'react'
import CurrencyCard from './components/CurrencyCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen bg-neutral-400 p-4 flex items-center justify-center'>

        <div className='w-fit h-fit bg-neutral-300 rounded-md p-4 '>
          <h2 className='bg-neutral-700 text-center text-neutral-200 text-4xl rounded-xl'>Currency Converter</h2>
          <CurrencyCard />
          <CurrencyCard />
          <button className='w-fit p-2 rounded-sm absolute top-1/2 left-1/2 bg-amber-200'>swap</button>
          <button className='w-full mt-3 p-1 rounded-xl bg-neutral-200'>Convert</button>
        </div>
      </div>
    </>
  )
}

export default App
