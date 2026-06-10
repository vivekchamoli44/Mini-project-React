import { useState } from 'react'
import './App.css'
import SearchBox from "./SearchBox.jsx"
function App() {
  let handleClick=()=>{
    console.log("Button Was clicked")
  }
  return (
    <div>
      <SearchBox></SearchBox>
    </div>
  )
}


export default App