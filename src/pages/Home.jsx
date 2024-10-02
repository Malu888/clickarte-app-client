import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/Image20241002162013.png";
import img2 from "../assets/black-white-palm.jpg";
import img3 from "../assets/nature.jpg"
import img4 from "../assets/mountains.jpg"

function Home({ allData, setAllData, search, setSearch }) {

  const [filteredData, setFilteredData] = useState(allData.filter((item) => {
    return (
      item.categoria &&
      item.categoria.toLowerCase().includes(search.toLowerCase())
    );
  }))



  return (
    <>
      <Navbar search={search} setSearch={setSearch} allData={allData} setFilteredData={setFilteredData}/>
      <Link to="/addimage/:addimageId">
        <button className="addImage">Add your image</button>
      </Link>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Primeira Imagem" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Segunda Imagem" />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Terceira Imagem"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Quarta Imagem"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((eachElement, i) => (
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
          <p>No images found the selected categoty.</p>
        )}
      </div>
    </>
  );
}

export default Home;
