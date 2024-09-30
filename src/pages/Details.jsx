
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'




function Details({ allData, setAllData }) {
  const [comment, setComment] = useState(null)
  const [commentNameValue, setCommentNameValue] = useState('')
  const [commentDescriptionValue, setCommentDescriptionValue] = useState('')
  const [commentRatingValue, setCommentRatingValue] = useState('')
  const { detailsId } = useParams()
  console.log(`MALUUUUU`, detailsId)

  const handleNameValue = (e) => setCommentNameValue(e.target.value)
  const handleDescriptionValue = (e) => setCommentDescriptionValue(e.target.value)
  const handleRatingValue = (e) => setCommentRatingValue(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let addComment = {
      imagenid: detailsId,
      autor: commentNameValue,
      contenido: commentDescriptionValue,
      rating: commentRatingValue
    }

    try {

      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/comentarios`, addComment)

      addNewComment(response.data)

      setCommentNameValue('')
      setCommentDescriptionValue('')
      setCommentRatingValue('')

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getDataComment()
  }, [detailsId])

  const getDataComment = async () => {

    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/comentarios`);
      console.log(`O QUE SE PASSA?`,response.data)
      setComment(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (comment === null) {
    return <p>Loading...</p>
  }


  const imgInformation = allData.find((eachElement) => eachElement.imagenid === detailsId)
  const commentInformation = comment.find((eachElement) => eachElement.imagenid === detailsId)

  const addNewComment = (addComment) => {
    setComment((previousComments) => [addComment, ...previousComments])
  }
  
  const handleDelete = async (commentId) => {
    try {
   await axios.delete(`${import.meta.env.VITE_SERVER_URL}/comentarios/${commentId}`)

    const updateDelete = comment.filter((eachComment) => eachComment.imagenid !== commentId)
    setComment(updateDelete)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    <Navbar/>
      <div className='detailsImg'>
        <p>Details Page</p>
        <img src={imgInformation.img} alt={`imagen ${imgInformation.imagenid}`} style={{ width: '200px', borderRadius: '20px'}} />
        <p>Categoria:{imgInformation.categoria}</p>
        <p>Location: {imgInformation.location}</p>
      </div>


      <div>
        <h2>Comments:</h2>
        <p>Autor: {commentInformation.autor}</p>
        <p>Rating: {commentInformation.rating}</p>
        <p>Contenido: {commentInformation.contenido}</p>
        {commentInformation?.length > 0 ? (
          commentInformation.map((eachComment, index) => (
            <div key={eachComment.id}>
              <p><b>Author:</b>{eachComment.autor}</p>
              <p><b>Content:</b>{eachComment.contenido}</p>
              <p><b>Rating:</b>{eachComment.rating}</p>
              <button onClick={() => handleDelete({index})}>Delete Comment</button>
            </div>
          ))
        ) : (
          <p>Add new comment</p>
        )}


         <div className='addComment'>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type='text' name='name' placeholder='Name' value={commentNameValue} onChange={handleNameValue}></input>
          <label>Description:</label>
          <input type='text' description='description' placeholder='Comment here' value={commentDescriptionValue} onChange={handleDescriptionValue}></input>
          <label>Rating:</label>
          <input type='number' rating='rating' placeholder='0' value={commentRatingValue} onChange={handleRatingValue} min={1} max={5}></input>

          <button type="submit">Send</button>
        </form>
        </div>
        <Link to={'/'}>Back</Link>
      </div>




    </>
  )
}

export default Details