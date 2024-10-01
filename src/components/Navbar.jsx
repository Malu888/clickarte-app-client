import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


function Navbar({ search, setSearch }) {

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setSearch(value)
  }
  return (
    <div className="navBar">
      <Link to="/">
        <img className="logoClickArte" src={logo}></img>
      </Link>
      <input
        className="searchInput"
        type="text"
        placeholder="Do your search..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Navbar;
