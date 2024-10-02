import React, { useState } from "react";
import logo1 from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch, allData, setFilteredData }) {
  const [showCategories, setShowCategories] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = allData.filter((item) =>
      item.categoria.toLowerCase().includes(value)
    );

    setFilteredData(filtered)
    setShowCategories(true)
  };

  const handleCategoryClick = (category) => {
    setSearch(category);
    setFilteredData(allData.filter((item) => item.categoria === category));
    setShowCategories(false);
  };

  const categories = [...new Set(allData.map((item) => item.categoria))];

  function handleSubmit(e) {
    e.preventDefault();

    setFilteredData(
      allData.filter((item) => {
        return (
          item.categoria &&
          item.categoria.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
    setShowCategories(false);
    setSearch("");
  }

  return (
    <div className="navBar">
      <Link to="/">
        <img className="logoClickArte" src={logo1}></img>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Do your search..."
          value={search}
          onChange={handleSearch}
          onFocus={() => setShowCategories(true)}
        />
      </form>

      {showCategories && (
        <div className="categorias-menu">
          {categories.map((eachCategoria, i) => (
            <div
              key={i}
              className="categoria"
              onClick={() => handleCategoryClick(eachCategoria)}
            >
              {eachCategoria}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
