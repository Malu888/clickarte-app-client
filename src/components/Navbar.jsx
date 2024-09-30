import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navBar'>
        <Link to='/'>
        <img className='logoClickArte' src={logo}></img>
        </Link>
        <input type='text' placeholder='Do your search...'/>
    </div>
  )
}

export default Navbar