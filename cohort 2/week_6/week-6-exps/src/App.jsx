import { useEffect, useMemo } from 'react'
import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState(1)
  const [counter, setCounter] = useState(0)

  let count = useMemo(() => {
    let count = 0
    for (let i = 0; i <= inputValue; i++) {
      count += i
    }
  }, [inputValue])

  return <div>
    <input type="number"
      onChange={(e) => setInputValue(e.target.value)} placeholder='Find the Sum from 1 to n' />
    <div>Sum from 1 to {inputValue} is {count}</div>
    <button onClick={() => {
      setCounter(counter + 1)
    }}>Counter {counter}</button>
  </div>
}



export default App
