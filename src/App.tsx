import { useState } from 'react'
import {Routes,Route}from 'react-router-dom'
import './App.css'
import Employees from './Components/Employees'
import Cranes from './Components/Сranes'
import {Layout} from './Components/Layout'
import Main from './Components/Main'
import OneComponent from './Components/OneComponent'
// import OneComponent from './Components/OneComponent'

function App() {


  return (
    <>
<Routes>
<Route  path='/' element={<Layout/>} >
<Route path='workers' element={<Employees/>} />
<Route path='/one' element={<OneComponent/>}/>
<Route path='/main' element={<Main/>}/>
<Route path='/m' element={<Cranes/>}/>
</Route>


</Routes>


1    </>
  )
}

export default App
