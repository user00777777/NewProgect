import { useState } from 'react'
import {Routes,Route}from 'react-router-dom'
import './App.css'
import Employees from './Components/Employees'

import {Layout} from './Components/Layout'
import OneComponent from './Components/OneComponent'
// import OneComponent from './Components/OneComponent'

function App() {


  return (
    <>
<Routes>
<Route  path='/' element={<Layout/>} >
<Route path='workers' element={<Employees/>} />
</Route>
<Route path='/one' element={<OneComponent/>}/>
</Routes>


1    </>
  )
}

export default App
