import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/img00.png";
import img2 from "../assets/img01.png";
import img3 from "../assets/img02.png";
import img4 from "../assets/img03.png";
import { useContext } from "react";
import { DataContext } from "../context/Data.context.jsx";
import { RingLoader } from "react-spinners";

function Home() {
  const { allData } = useContext(DataContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (allData) {
      const uniqueCategories = Array.from(
        new Set(allData.map((item) => item.categoria))
      );
      setCategories(uniqueCategories);

      if (selectedCategory) {
        const filtered = allData.filter(
          (item) => item.categoria === selectedCategory
        );
        setFilteredResults(filtered);
      } else {
        setFilteredResults(allData);
      }
    }
  }, [allData, selectedCategory]);

  const handleCategorySelected = (category) => {
    setSelectedCategory(category);
  };

  if (allData === null) {
    return (
      <div className="loading">
        <RingLoader />
      </div>
    );
  }

  return (
    <>
      <Navbar
        categories={categories}
        onSelectedCategory={handleCategorySelected}
      />
      <div className="container-addImage-about">
        <Link to="/addimage/:addimageId" style={{ textDecoration: "none" }}>
          <button className="addImage">Add your image</button>
        </Link>
        <Link to={"/about"} style={{ textDecoration: "none" }}>
          <button className="about">About</button>
        </Link>
      </div>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Primeira Imagem" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Segunda Imagem" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Terceira Imagem" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Quarta Imagem" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="pictures-large">
        {filteredResults.length > 0 ? (
          filteredResults.map((eachElement, i) => (
            <div key={i} className="pictures">
              <Link to={`details/${eachElement.id}`}>
                <img
                  src={eachElement.img}
                  alt={eachElement.categoria}
                  className="img-fluid"
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No images found for the selected category.</p>
        )}
      </div>
    </>
  );
}

export default Home;
