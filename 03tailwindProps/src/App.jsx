import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Hardik",
    age : 21
  }
  let newArray = [1,2,4]
  return (
    <>
      <Card username="chaiaurcode" someObj={myObj} btnText="ExploreMe" />

      {/* <Card channel="chaiaurcode" {...myObj} someMore={newArray} />
      <Card/> */}
      <Card username="Hardik" btnText="ClickMe"/>
      <Card username="Hardik"/>
    </>

  )
}

export default App
