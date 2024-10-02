import React, { useState } from "react";
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


function Home({ filteredData}) {

  const { allData } = useContext(DataContext)

  if (allData === null) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <RingLoader color="#5D7CF5" />
      </div>
    );
  }



 

  return (
    <>
      <Navbar/>
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
        {allData.length > 0 ? (
          allData.map((eachElement, i) => (
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
