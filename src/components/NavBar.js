import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../App.css'

function Navbar() {
  return (
    <nav className='nav'>
      <h3 className='heading' >Chakula App </h3>
      <div className='nav-links-wrap'>
            <NavLink className='nav-links' to='/Home'>Home</NavLink>
            <NavLink className='nav-links' to='/About'>About</NavLink>
            <NavLink className='nav-links' to='/Contact'>Contact</NavLink>
      </div>

    </nav>
  )
}

export default Navbar