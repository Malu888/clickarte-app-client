import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo1 from "../assets/logo.png";

function AddImage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categoria, setCategoria] = useState("");

  const params = useParams();

  const handleTitleValue = (e) => setTitle(e.target.value);
  const handleDescriptionValue = (e) => setDescription(e.target.value);
  const handleImageValue = (e) => setImage(e.target.value);
  const handleCategoriaValue = (e) => setCategoria(e.target.value);

  const handleImageSubmit = async (e) => {
    e.preventDefault();

    let addImage = {
      title: title,
      description: description,
      img: image,
      categoria: categoria,
    };

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/imagenes`, addImage);
      alert("Image add");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="divForm">
      <div>
        <Link to="/">
          <img className="logoClickArte" src={logo1}></img>
        </Link>
      </div>
      <div className="form">
        <h1>Add a new image</h1>
        <form className="addImageForm" onSubmit={handleImageSubmit}>
          <label className="label">Title:</label>
          <input
            className="addformInput"
            type="text"
            title="title"
            placeholder="Add Title"
            value={title}
            onChange={handleTitleValue}
          ></input>
          <label className="label">Description:</label>
          <input
            className="addformInput"
            type="text"
            description="description"
            placeholder="Add description"
            value={description}
            onChange={handleDescriptionValue}
          ></input>

          <label className="label">Image:</label>
          <input
            className="addformInput"
            type="text"
            placeholder="Url"
            onChange={handleImageValue}
          ></input>

          <label className="label">Category:</label>
          <input
            className="addformInput"
            type="text"
            onChange={handleCategoriaValue}
            placeholder="Add Categoria"
          ></input>
          <button className="buttonSend" type="submit">
            Send
          </button>
        </form>
      </div>

      {/*<Link className="addBack" to={"/"}>Back</Link>*/}
    </div>
  );
}

export default AddImage;
