import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <CardWrapper >
      hi there
    </CardWrapper>
  </div>
}

function CardWrapper({ children }) {
  return <div style={{ border: "2px solid black", padding: 10 }}>{children}</div>
}

export default App
