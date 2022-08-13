import React from 'react'
import {useState} from 'react'
function Hello ({getcolor}) {
    const [activecolor,setActivecolor]=useState([])
    const handle=(e)=>{
        const { value }=e.target
        setActivecolor(value)
       getcolor(value)
    }
  return (
    <div>
    <input type={'text'} id='input' onChange={handle} value={activecolor}  />
    </div>
  )
}

export default Hello