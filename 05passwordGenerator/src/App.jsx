import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers,setNumbers] = useState(false);
  const [char,setChar]=useState(false)
  const [Password,setPassword]=useState("")

  const passwordGenerator=()=>{
    console.log("Password Loaded")
  }

  
  return (

    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
