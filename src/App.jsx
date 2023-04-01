import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import Body from './Components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Body></Body>
    </div>
  )
}

export default App
