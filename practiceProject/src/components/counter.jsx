import { useState } from 'react'
import { useEffect } from 'react'

function Counter() {
  const [counter , setCounter]=useState(0)
  const addValue=()=>{
    setCounter(counter+1)
  }
  const decValue=()=>{
    setCounter(counter-1)
  }
  useEffect(()=>{
    console.log("Counter Mounted")
    return function(){
      console.log("Unmount Counter")
    }
  },[])
  useEffect(()=>{
    console.log("Counter Updated")
  },[counter])
  //State variable as a dependecy use ho rahi hai
  return (
    <>
      {counter}
      <button style={{backgroundColor:'green' , color:'white'}} onClick={()=>addValue()}>Inc</button>
      <button style={{backgroundColor:'red' , color:'white'}} onClick={()=>decValue()}>Dec</button>
    </>
  )
}

export default Counter
