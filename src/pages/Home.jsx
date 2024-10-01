import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/zebra.jpg";
import img2 from "../assets/black-white-palm.jpg";

function Home({ allData, setAllData, search, setSearch }) {
  const filteredData = allData.filter((item) => {
    return (
      item.categoria &&
      item.categoria.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
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
              src="https://img.freepik.com/free-photo/black-background-with-leaves-vegetation-texture_23-2149872520.jpg?t=st=1727789741~exp=1727793341~hmac=e351629d2e3de1265a67239a20b06d81e9f45c072797142c69791a43ed945e12&w=1380"
              alt="Terceira Imagem"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/beautiful-shot-foggy-mountains-forest_181624-229.jpg?t=st=1727789808~exp=1727793408~hmac=a152bff1b4994589c62f602b6122ed46b763f3a4cbe0a22af2d18a4ac9c5b848&w=1380"
              alt="Terceira Imagem"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((eachElement, i) => (
            <div key={i} className="pictures" style={{ marginLeft: "30px" }}>
              <Link to={`details/${eachElement.id}`}>
                <img
                  src={eachElement.img}
                  alt={`imagen ${i}`}
                  style={{
                    maxWidth: "250px",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
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
