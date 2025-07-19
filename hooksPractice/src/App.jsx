import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [adjective , setAdjective] = useState("good")

  const getAdjective = ()=>{
    return "another"
  }
  return (
    <>
      <Navbar adjective = {"good"} getAdjective={getAdjective}/>
    </>
  )
}

export default App
