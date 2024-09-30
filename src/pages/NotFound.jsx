import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <>
    <div>
     <Link to='/'>
        <img className='logoClickArte' src={logo}></img>
        </Link>
        </div>
    <div>NotFound</div>
    </>
  )
}

export default NotFound