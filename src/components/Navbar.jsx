import React, { useState } from "react";
import logo1 from "../assets/logo.png";
import { Link } from "react-router-dom";
import search from "../assets/icone.png";

function Navbar({ categories, onSelectedCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    onSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="navBar">
          <Link to="/">
            <img className="logoClickArte" src={logo1}></img>
          </Link>

          {!isOpen && (
            <button className={"menu-icon"} onClick={toggleMenu}>
              <div className="bar">
                <img src={search}></img>
              </div>
            </button>
          )}

          {isOpen && (
            <div className={`nav-menu ${isOpen ? "active" : ""}`}>
              <div className="scrollable-menu">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="nav-item"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
