import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './assets/component/Login'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
 

  return (
    <>
      <nav>
      <NavLink to="/">Acceuil | </NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>

      <div>
      <Outlet />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
