import logo1 from "../assets/logo.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

function EditImage() {
  const params = useParams();

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categoria, setCategoria] = useState("");
  const [isShowingDeleteCheck, setIsShowingDeleteCheck] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/imagenes/${params.imageId}`)
      .then((response) => {
        setDescription(response.data.description || "");
        setImage(response.data.img || "");
        setCategoria(response.data.categoria || "");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.imageId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let updateImg = {
      description: description,
      img: image,
      categoria: categoria,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/imagenes/${params.imageId}`,
        updateImg
      );
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewImage = (e) => {
    e.preventDefault();
    setImage(e.target.value);
  };

  const handleCategoriaValue = (e) => {
    e.preventDefault();
    setCategoria(e.target.value);
  };

  const deleteImage = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/imagenes/${params.imageId}`)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Link to="/">
        <img className="logoClickArte" src={logo1}></img>
      </Link>
      <h1 className="editImgH1">Edit Image</h1>
      <form onSubmit={handleSubmit}>
        <div className="editForm">
          <label className="labelPreview">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="editForm">
          <label className="labelPreview">Image:</label>
          <input
            type="text"
            id="image"
            placeholder="Add Url"
            onChange={handleNewImage}
          />
        </div>

        <div className="editForm">
          <label className="labelPreview">Category:</label>
          <input
            type="text"
            id="categoria"
            placeholder="Add a Category"
            onChange={handleCategoriaValue}
          />
        </div>

        <div className="editpreview">
          <h3>Preview:</h3>
          <img src={image} alt={description || "Image preview"} />
        </div>
        <div className="buttonsUpdateDelete">
          <button className="buttonsUd" type="submit">Update</button>
          <button
            className="buttonsUd"
            onClick={() => setIsShowingDeleteCheck(true)}
            type="button" 
          >
            Delete
          </button>
          {isShowingDeleteCheck && (
            <div className="confirmation-delete">
              <p>Are you sure you want to delete this image?</p>
              <button className="buttonsUd" onClick={deleteImage}>Yes</button>
              <button
                className="buttonsUd"
                onClick={() => setIsShowingDeleteCheck(false)}
              >
                No
              </button>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
export default EditImage;
