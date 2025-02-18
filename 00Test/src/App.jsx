import { useState } from "react"
import './index.css'
import Test from "./components/Test"
function App() {
  const [todos,setTodos]=useState([])
  const handleClick = ()=>{
    const todo = document.getElementById("takeTodo")
    setTodos([...todos,todo.value])
    todo.value = ""
  }
  return (
    <>
      <h1 style={{backgroundColor:"#1a5",color:"white",textAlign:'center'}}>This is Todo </h1>
      <div id="main">
        <div id="input">
          <input type="text" id="takeTodo"/>
          <button onClick={handleClick}>Add</button>
        </div>
        <div id="todos">
          
            {todos.map((todo,ind)=>
              <div key={ind}>
               <h2 key={ind}> {todo}</h2>
               <br/>
               </div>
            )
            }
          
        </div>
      </div>

      <Test name="Hanuman"/>
    </>
  )
}

export default App
