import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { jsx as _jsx} from 'react/jsx-runtime.js'
function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
      </div>
  )
}
/*
const ReactElement = {
    type : 'a',
    props: {
        href : 'https://www.google.com',
        target: '_blank'
    },
    children : 'Click me to visit google'
}
    */

const anotherUser="Chai aur react"
const createElement =React.createElement('a',{
  href:'https://google.com',
  target : '_blank'
},"click me to visit Google",
  anotherUser
)

const anotherElement =( // Use this brackets as it is not an object
  <a href="https://google.com" target="_blank">Visit Google</a>
)


createRoot(document.getElementById('root')).render(
  //Works in strict mode
    //ReactElement----->Use this too 
  //anotherElement---->Use this
   //This now works as it internally gets converted to an object and then returned to dom from the custom render 
   createElement //This works because tum react library use kar skte ho
   //Thode changes allowed h but not complete freedom
  // <App/>


   
  //Try using Capital 
)
