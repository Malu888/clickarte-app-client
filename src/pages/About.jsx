import React from 'react'
import logo1 from "../assets/logo.png";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='container-about'>
    <Link to='/'>
        <img className='logoClickArte' src={logo1}></img>
        </Link>
    <div className="">
    <h2> Info de los miembros:</h2>

<a href="https://github.com/SLAE021" style={{color:"#00438f", fontSize: "19px"}}> Samuel Angulo.200px </a>

<a href="https://github.com/Malu888" style={{color:"#00438f", fontSize: "19px"}}> Malu Dietrich.</a>



    </div>
    </div>
  )
}

export default About