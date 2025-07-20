import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [char, setChar] = useState(false)
  const [Password, setPassword] = useState("")

  //UseRef hook
  const passwordRef= useRef(null)



  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbers) str += "0123456789"
    if (char) str += "!@#$%^&*()_+-=[]{}|;:',.<>/?~\``"

    for (let i = 1; i <= length; i++) {
      let charAcc = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charAcc)//pass = "" + charReturned
    }
    setPassword(pass)
    console.log("Password Loaded")
  }, [length, numbers, char, setPassword])

  const copyPasswordtoClip = useCallback(()=>{
    window.navigator.clipboard.writeText(Password)
  },[Password])
  useEffect(()=>{
    passwordGenerator()
  },[length, numbers, char,passwordGenerator])

  return (

    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex justify-center shadow rounded-lg overflow-hidden mb-4'>

          <input 
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3 text-black bg-white rounded-sm'
          placeholder='Password'
          readOnly
          ref={passwordRef} />
          <button 
          onClick={copyPasswordtoClip}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range" 
              name="" 
              id="" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}/>
              <label>Length {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numbers}
              id='numberInput'
              onChange={()=>{
                setNumbers((prev)=>(!prev))
              }}
              />
              <label htmlFor='numberInput'>Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
              type="checkbox"
              defaultChecked={char}
              id='charInput'
              onChange={()=>{
                setChar((prev)=>(!prev))
              }}
              />
              </div>
              <label htmlFor='charInput'>Special Char</label>
          </div>
      </div>



    </>
  )
}

export default App
//e.target.value returns a string