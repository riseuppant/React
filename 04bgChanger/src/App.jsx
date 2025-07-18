import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("black")

  return (
    <div className="w-full min-h-screen"
    style={{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white padding'></div>
      </div>
    </div>
  )
}

export default App
