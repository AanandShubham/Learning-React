import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
      <div 
        className='w-screen h-screen flex justify-center items-end bg-slate-600'
        style={{backgroundColor: color}}
      >
        <div className="w-fit h-fit p-2 flex gap-2 mb-2 rounded-xl bg-blue-500">

          <button
            className='bg-red-700 p-1 rounded-md'
            onClick={()=>setColor("red")}
          >Red</button>
          <button
            className='bg-white p-1 rounded-md'
            onClick={()=>setColor("white")}
          >white</button>
          <button
            className='bg-black p-1 text-white rounded-md'
            onClick={()=>setColor("black")}
          >black</button>
          <button
            className='bg-yellow-600 p-1 rounded-md'
            onClick={()=>setColor("yellow")}
          >yellow</button>
          <button
            className='bg-pink-500 p-1 rounded-md'
            onClick={()=>setColor("pink")}
          >pink</button>
        </div>
       </div>
    </>
  )
}

export default App
