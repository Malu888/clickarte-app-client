import React from 'react'
import logo1 from "../assets/logo.png";
import { Link } from 'react-router-dom';
import gitHub from '../assets/gitIcone.png'
import linkedin from '../assets/linkIcone.png'

function About() {
  return (
    <div className='container-about'>
    <Link to='/'>
        <img className='logoClickArte' src={logo1}></img>
        </Link>
    <div className="informationH2">
    <h2> Member Info:</h2>
    </div>
    <div className='iconsMalu'>
<a href="https://github.com/SLAE021" > <img src={gitHub} style={{width: '40px'}}></img></a>
<a href="www.linkedin.com/in/samuel-angulo-slae"><img src={linkedin} style={{width: '40px'}}/></a>
</div>
<div className="iconsSam">

<a href="https://github.com/Malu888"> <img src={gitHub} style={{width: '40px'}}></img></a>
<a href="https://www.linkedin.com/in/mal%C3%BA-dietrich-0b3b83292/"><img src={linkedin} style={{width: '40px'}}/></a>

    </div>
    </div>
  )
}

export default About