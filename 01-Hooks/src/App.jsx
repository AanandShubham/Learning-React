import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  const increaseCount = () => {

      if(typeof count === 'string'){
        if ( count != "Can't Increase")
          setCount(0)
      }
      else if (count < 20)
        setCount(count + 1)
      else 
        setCount("Can't Increase")  
  }

  const decreaseCount = () => {

    if (count > 0)
      setCount(count - 1)
    else if(typeof count === 'string'){
      if(count !="Can't Decrease")
          setCount(20)
    }
    else
      setCount("Can't Decrease")
  }
  return (
    <>
      <h2>Welcome to Counter</h2>
      <h2 ref={ref}>Count Value : {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
