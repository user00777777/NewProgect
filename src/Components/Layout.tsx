import {Link,Outlet} from "react-router-dom"






import React from 'react'

const Layout :React.FC=  ()=> {
  return (
    <>
    <header >
   <Link to="/">Home</Link>
   <Link to="/one">OneComponent</Link>
   <Link to='workers'> Дежурные</Link>
      </header>
  <main className="container">
    <Outlet/>
  </main> 
  <footer className="container">ReactProgect</footer>
   </>

  )
}
export { Layout}