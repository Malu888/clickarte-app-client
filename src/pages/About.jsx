import React from "react";
import logo1 from "../assets/logo.png";
import { Link } from "react-router-dom";
import gitHub from "../assets/gitIcone.png";
import linkedin from "../assets/linkIcone.png";

function About() {
  return (
    <div className="container-about">
      <Link to="/">
        <img className="logoClickArte" src={logo1}></img>
      </Link>
      <div className="iconsSam">
        <h2 className="Members"> Samuel Angulo</h2>
        <a href="https://github.com/SLAE021">
          {" "}
          <img className="imgIcons" src={gitHub}></img>
        </a>
        <a href="https://www.linkedin.com/in/samuel-angulo-slae/">
          <img className="imgIcons" src={linkedin} />
        </a>
      </div>
      <div className="iconsMalu">
        <h2 className="Members"> Malu Dietrich</h2>
        <a href="https://github.com/Malu888">
          {" "}
          <img className="imgIcons" src={gitHub}></img>
        </a>
        <a href="https://www.linkedin.com/in/mal%C3%BA-dietrich-0b3b83292/">
          <img className="imgIcons" src={linkedin} />
        </a>
      </div>
    </div>
  );
}

export default About;
