import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <>
    <div className='container-notFound'>
    <div className='logo-notFound-container'>
     <Link to='/'>
        <img className='logoClickArte-notFound' src={logo}></img>
        </Link>
        </div>
    
      
        </div>
    </>
  )
}

export default NotFound