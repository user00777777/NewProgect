import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import s from '../CssModules/Main.module.css'
export default function Main() {
let navigate =useNavigate()
  return (
    <div className={s.wrapper}> <p onClick={()=>navigate(-1)}> Main</p>
    
    <div className={s.container}>
    <button className={s.item}><Link to='/m'> Краны </Link></button>
    <button className={s.item}>Тельфера</button>
    <button className={s.item}>Станки</button></div>
      



    
    </div>
  )
}
