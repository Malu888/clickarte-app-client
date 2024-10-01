import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home({ allData, setAllData }) {
  return (
    <>
      <Navbar />
      <Link to="/addimage/:addimageId">
        <button>+</button>
      </Link>
      <div>
        {allData &&
          allData.map((eachElement, i) => {
            return (
              <div key={i}>
                <p>Hola</p>
                <Link to={`details/${eachElement.id}`}>
                  <img
                    src={eachElement.img}
                    alt={`imagen ${i}`}
                    style={{ width: "150px" }}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
