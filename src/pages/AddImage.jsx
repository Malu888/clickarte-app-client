import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";



function AddImage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
 const [categoria, setCategoria] = useState("")
  

  const params = useParams();
  console.log(params);

  const handleTitleValue = (e) => setTitle(e.target.value);
  const handleDescriptionValue = (e) => setDescription(e.target.value);
  const handleImageValue = (e) => setImage(e.target.value);
  const handleCategoriaValue = (e) => setCategoria(e.target.value)

  const handleImageSubmit = async (e) => {
    e.preventDefault();

    let addImage = {
      title: title,
      description: description,
      img: image,
      categoria: categoria
    };

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/imagenes`, addImage)
      alert('Image add')
      window.location.href = '/'
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>Add a new Image</div>
      <div>
        <form className="addImageForm" onSubmit={handleImageSubmit}>
          <label>Title:</label>
          <input
            type="text"
            title="title"
            placeholder="Add Title"
            value={title}
            onChange={handleTitleValue}
          ></input>
          <label>Description:</label>
          <input
            type="text"
            description="description"
            placeholder="Add description"
            value={description}
            onChange={handleDescriptionValue}
          ></input>
          <label>Image:</label>
          <input type="text" onChange={handleImageValue}></input>
          <label>Category:</label>
          <input type="text" onChange={handleCategoriaValue} placeholder="Add Categoria"></input>
          <button type="submit">Send</button>
        </form>
      </div>
      <Link to={"/"}>Back</Link>
    </>
  );
}

export default AddImage;
