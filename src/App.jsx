import { useState } from 'react'
import './App.css'
import WeatherApp from "./WeatherApp.jsx"
function App() {
  let handleClick=()=>{
    console.log("Button Was clicked")
  }
  return (
    <div>
      <WeatherApp></WeatherApp>
    </div>
  )
}


export default App