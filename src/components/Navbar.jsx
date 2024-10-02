import React, { useState } from "react";
import logo1 from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/Data.context.jsx"


function Navbar() {
 /* const { allData } = useContext(DataContext)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
 
  

  //const categories = ['blanco y negro' , "ciudades", "playas"]

  const categories = [...new Set(allData.map(item => item.categoria))];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const filtered = allData.filter(item => item.categoria === category);
    setFilteredData(filtered)
    setShowDropdown(false)
  };

  const handleDropdownToggle = () => {
    setShowDropdown(prev => !prev)
  };*/


  return (
    <>
    
    <div className="navBar">
      <Link to="/">
        <img className="logoClickArte" src={logo1}></img>
      </Link>{/* 
     <div className="dropdown">
      <button onClick={handleDropdownToggle} className="dropdown-button">
      {selectedCategory || "Categories"} 
      </button>
     </div>
      {showDropdown && (
        <div className="categorias-menu">
          {categories.map((eachCategoria, i) => (
            <div
              key={i}
              className="categoria"
              onClick={() => handleCategorySelect(eachCategoria)}
            >
              {eachCategoria}
            </div>
          ))}
        </div>
      )}*/}
    </div>
    </>
  );
}

export default Navbar;
