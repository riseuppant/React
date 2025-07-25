import { useState } from 'react'  //Idhar se UI aata hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter]=useState(15)//can give anything to the useState from var to function
  //useState can used to propgate it thorughout the ui
  //let counter = 5;
  
  const addValue=()=>{
    console.log("Value Added", counter)
    if(counter<20)counter+=1
    setCounter(counter)
  }

  const decValue=()=>{
    console.log("Value decreased", counter)
    if(counter>0)counter-=1
    setCounter(counter)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
    onClick={decValue}
    >Decrease Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
