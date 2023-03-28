import React from 'react'
import { useNavigate } from 'react-router-dom';
import one from '../CssModules/One.module.css';
export default function OneComponent() {
 const navigate= useNavigate()
  return (
    <div className={one.wrapper}>
     
      <div onClick={()=>navigate(-1)} className={one.back}>назад</div>
      
     <div> OneComponent</div>
     <div className={one.glass}></div></div>
  )
}
