import React from 'react'

const Card = (
    {
        label,
        type,
        types,
        amount,
        setAmount,
        cardRef,
        handleChange
    }
) => {
    return (
        <div className='w-fit bg-neutral-200 rounded-2xl m-2 mt-4 p-4 flex gap-4'>
            <div className='flex flex-col'>
                <label className='w-fit p-1' htmlFor="">{label}</label>
                <input className='min-w-[100px] text-center ' value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" />
            </div>
            <div className='flex flex-col'>
                <label className='w-fit p-1' htmlFor="">{type}</label>
                <select name="" id="" ref={cardRef} onChange={handleChange}>
                    {types.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Card
