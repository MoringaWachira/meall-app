import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../App.css'

function Navbar() {
  return (
    <nav className='nav'>
        <NavLink className='nav-links' to='/Home'>Home</NavLink>
        <NavLink className='nav-links' to='/About'>About</NavLink>
        <NavLink className='nav-links' to='/Recipe'>Recipe</NavLink>

    </nav>
  )
}

export default Navbar