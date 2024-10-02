import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


function Navbar({ search, setSearch, allData, setFilteredData }) {

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setSearch(value)

    
  }
  function handleSubmit(e){
    e.preventDefault()

    setFilteredData(allData.filter((item) => {
      return (
        item.categoria &&
        item.categoria.toLowerCase().includes(search.toLowerCase())
      );
    }))

    setSearch('')

  }

  return (
    <div className="navBar">
      <Link to="/">
        <img className="logoClickArte" src={logo}></img>
      </Link>
      <form onSubmit={handleSubmit}>
      <input
        className="searchInput"
        type="text"
        placeholder="Do your search..."
        value={search}
        onChange={handleSearch}
      />
      </form>
    </div>
  );
}

export default Navbar;
