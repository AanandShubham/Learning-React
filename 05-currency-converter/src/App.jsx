import { useState } from 'react'
import CurrencyCard from './components/CurrencyCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen bg-neutral-700'>
        <h2 className='bg-black text-center text-amber-200 text-4xl'>Currency Converter</h2>
        <CurrencyCard/>
      </div>
    </>
  )
}

export default App
