import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")
  // const getAdjective = useCallback(() => {
  //   return ("another "+count)
  // },[])
  const getAdjective = useCallback(() => {
    return ("another "+count)
  },[count])
  //Props ki madad se render kar rhe hai
  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective}/>
      <button onClick={()=>setCount(count+1)}
      >count is {count}
        </button>
    </>

  )
}

export default App
