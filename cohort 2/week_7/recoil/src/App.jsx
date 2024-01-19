import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './count'

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => { setCount(count => count + 1) }}>Increase</button>
    <button onClick={() => { setCount(count => count - 1) }}>Decrease</button>
  </div>
}
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? "It is even" : null}
  </div>
}
export default App
