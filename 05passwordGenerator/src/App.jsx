import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers,setNumbers] = useState(false);
  const [char,setChar]=useState(false)
  const [Password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbers) str+="0123456789"
    if(char) str+="!@#$%^&*()_+-=[]{}|;:',.<>/?~\``"
    
    for(let i=1;i<=length ; )
    
    
    console.log("Password Loaded")
  },[length,numbers,char,setPassword])
  
  
  return (

    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      
    </>
  )
}

export default App
