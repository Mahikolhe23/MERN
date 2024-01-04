import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  )
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1)
  }
  return <button onClick={onClickHandler}> Counter{props.count}</button>
}

export default App
