import { useState } from 'react'
import './App.css'

function App() {

  const [num1, setnum1] = useState(5)
  const [count, setcount] = useState(0)

  const handelClick = () => {
    setnum1(3)
  }

  const decrementFunction = () => {
    setcount(count -1)
  }
  
  const incrementFunction = () => {
    setcount(count + 1)
  }

  return (
    <>
     <div id="wrapper">
      <button onClick={handelClick}>Click</button>
      <p>{num1}</p>

      <p>Counter</p>
      <button onClick={decrementFunction}>-</button>
      <button onClick={incrementFunction}>+</button>
      <p>{count}</p>

     </div>
    </>
  )
}

export default App
