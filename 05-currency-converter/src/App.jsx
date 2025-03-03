import { useState, useRef } from 'react'
import Card from './components/Card'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [to, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")
  const cardRef = useRef(null)

  const types = ["usd", "inr", "dinar"]
  // const [data,setData] = useState({})

  let currencyInfo = useCurrencyInfo(from)

  const currencyTypes = Object.keys(currencyInfo)

  const handleConvert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const handleSwap = (e) => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  const handleChangeFrom = (e) => {
    console.log(e.target.value)
    setFrom(e.target.value)

  }

  const handleChangeTo = (e) => {
    console.log(e.target.value)
    setTo(e.target.value)
  }




  return (
    <>
      <h2 className='text-xl text-center bg-orange-300'>Currency Converter</h2>
      <div className='w-screen h-screen flex justify-center flex-col items-center bg-neutral-500'>
        <div className='w-fit bg-white p-2 rounded-xl'>
          <Card
            cardRef={cardRef}
            label="From"
            amount={amount}
            setAmount={setAmount}
            type="Currency Type"
            types={currencyTypes}
            handleChange={handleChangeFrom}
          />

          <button
            onClick={handleSwap}
            className='bg-slate-400
             hover:bg-neutral-700
             hover:text-white 
              rounded-md absolute 
              p-2 top-[1/2vh] mt-[-3vh]
              ml-[-3vw] left-1/2'>
            swap
          </button>

          <Card
            label="To"
            type="Currency Type"
            types={currencyTypes}
            amount={convertedAmount}
            handleChange={handleChangeTo}
          />

          <button
            onClick={handleConvert}
            className='w-full 
            bg-slate-500 
              rounded-bl-3xl 
              rounded-tr-3xl 
              p-2 
            hover:bg-neutral-700
            hover:text-white 
              text-center'>
            convert {to} to {from}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
