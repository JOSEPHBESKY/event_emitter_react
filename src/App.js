import React from 'react'
import Hello from './Hello'
import {useState} from 'react'

function App() {
  const [uicolor,setuicolor]=useState()
  console.log(uicolor); 

  const getcolor=(color)=>{
    setuicolor(color)
  }
  return (
    <div>
    <div style={{backgroundColor:uicolor}}>{uicolor}</div>
    <Hello getcolor={getcolor} />
    </div>
  )
}

export default App