import { useState } from 'react'

function CurrencyCard() {

    const [value,setvalue] = useState()
  
    return (
        <div className='flex gap-5 m-3 bg-neutral-100 w-fit p-4 rounded-md h-fit'>
           <div className='flex flex-col'> 
                <label htmlFor="">From</label>
                <input type="number" name="" id="" />
           </div>
           <div className='flex flex-col'>
                <label htmlFor="">Currency Type</label>
                <select name="" id="" value={value}  onChange={(e)=>setvalue(e.target.value)}>
                    <option value="usd">usd</option>
                    <option value="inr">inr</option>
                </select>
           </div>
        </div>
    )
}

export default CurrencyCard
