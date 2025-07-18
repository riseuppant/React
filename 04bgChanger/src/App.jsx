import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Style mai : else = in JS

/*Important Points
Jab tum onClick karoge tab Without reference pass karoge to chal jayega but wo tum color nahi pass kar rahe ho else ya to syntax color("color") aisa pass karo to wo uski return value par kaam krega and automatically execution ka issue 
To avoid all of this just use a call back instead
*/
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full min-h-screen"
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
            <button 
            onClick={()=>setColor("red")}
            className='outline-none px-4 text-white rounded-full shadow-lg' style={{backgroundColor:"red"}}>Red</button>
            <button
            onClick={()=>setColor("green")}
            className='outline-none px-4 text-white rounded-full shadow-lg' style={{backgroundColor:"green"}}>green</button>
            <button
            onClick={()=>setColor("blue")}
            className='outline-none px-4 text-white rounded-full shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
            <button 
            onClick={()=>setColor("black")}
            className='outline-none px-4 text-white rounded-full shadow-lg' style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
