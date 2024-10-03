import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { useContext } from "react";
import { DataContext } from "../context/Data.context.jsx"
import logo1 from "../assets/logo.png";



function Details() {
  const { allData } = useContext(DataContext)
  const [comment, setComment] = useState(null);
  const [commentNameValue, setCommentNameValue] = useState("");
  const [commentDescriptionValue, setCommentDescriptionValue] = useState("");
  const [commentRatingValue, setCommentRatingValue] = useState("");

  const { detailsId } = useParams();

  const handleNameValue = (e) => setCommentNameValue(e.target.value);
  const handleDescriptionValue = (e) =>
    setCommentDescriptionValue(e.target.value);
  const handleRatingValue = (e) => setCommentRatingValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let addComment = {
      autor: commentNameValue,
      contenido: commentDescriptionValue,
      rating: commentRatingValue,
      imagenId: detailsId,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/comentarios`,
        addComment
      );

      setCommentNameValue("");
      setCommentDescriptionValue("");
      setCommentRatingValue("");
      getDataComment();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataComment();
  }, [detailsId]);

  const getDataComment = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/comentarios`
      );
      
      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (comment === null) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <RingLoader color="#5D7CF5" />
      </div>
    );
  }

  const imgInformation = allData.find(
    (eachElement) => eachElement.id === detailsId
  );

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/comentarios/${commentId}`
      );

      getDataComment();
    } catch (error) {
      console.log(error);
    }
  };

  if (!imgInformation) {
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
     <div>
      <Link to='/'>
        <img className='logoClickArte' src={logo1}></img>
        </Link>
      </div>
      <div>
        <h1 className="detailsH1">Details Page</h1>
        </div>

      <div className="detailsImg">
      
        <img
          src={imgInformation.img}
          alt={`imagen ${imgInformation.id}`}
          
        />
        <div className="container-p">
        <p className="description">{imgInformation.categoria}</p>
         <p className="description"> {imgInformation.location}</p> 
         </div>      
        <Link to={`/details/edit/${detailsId}`}>
          <button className="butonDeidit">Edit image</button>
        </Link>
      

      <div className="addComment-container">
        {comment?.length > 0 ? (
          comment.map(
            (eachComment) =>
              imgInformation.id === eachComment.imagenId && (
                <div className="comentarios" key={eachComment.id}>
                  <h2>Comments</h2>
                  <p>
                    <b>Author:</b>
                    {eachComment.autor}
                  </p>
                  <p>
                    <b>Content:</b>
                    {eachComment.contenido}
                  </p>
                  <p>
                    <b>Rating:</b>
                    {eachComment.rating}
                  </p>
                  <button className="butonDeidit"onClick={() => handleDelete(eachComment.id)}>
                    Delete Comment
                  </button>
                </div>
              )
          )
        ) : (
          <p>Add new comment</p>
        )}

        <div className="addComment-form">
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
             className="addcomentarioInput"
              type="text"
              name="name"
              placeholder="Name"
              value={commentNameValue}
              onChange={handleNameValue}
            ></input>
            <label>Description:</label>
            <input
             className="addcomentarioInput"
              type="text"
              description="description"
              placeholder="Comment here"
              value={commentDescriptionValue}
              onChange={handleDescriptionValue}
            ></input>
            <label>Rating:</label>
            <input
            className="addcomentarioInput"
              type="number"
              rating="rating"
              placeholder="0"
              value={commentRatingValue}
              onChange={handleRatingValue}
              min={1}
              max={5}
            ></input>

            <button className="buttonEnviar" type="submit">Send</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default Details;
