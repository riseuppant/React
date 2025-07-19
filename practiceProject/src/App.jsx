import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Counter  from './components/counter'
function App() {
const [state,setState]= useState(true)
  return (
    <>
      <button
      onClick={()=>setState(!state)}
      >Toggle</button>
      {state ? <Counter/> : ""}
    </>
  )
}

//Jab purana counter break hota  hai and naya wala rerender hota hai then naya wala state mai update hota hai use effect 

//Purana wala use effect hatega then  naya wala and to use this must be passed as dependency

export default App
