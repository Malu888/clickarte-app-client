import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'


function AddImage({ allData, setAllData }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const params = useParams()
  console.log(params)

  const handleTitleValue = (e) => setTitle(e.target.value)
  const handleDescriptionValue = (e) => setDescription(e.target.value)
  const handleImageValue = (e) => setImage(e.target.value)

  const handleImageSubmit = async (e) => {
    e.preventDefault()

    let addImage = {
      title: title,
      description: description,
      img: image
    }

    try {

   await axios.post(`${import.meta.env.VITE_SERVER_URL}/imagenes`, addImage)

    } catch (error) {
      console.log(error)
    }
  }

  /*if (allData === null) {
    return <p>Loading...</p>
  }*/


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>Add a new Image</div>
      <div>
        <form onSubmit={handleImageSubmit}>
          <label>Title:</label>
          <input type='text' title='title' placeholder='Add Title' value={title} onChange={handleTitleValue}></input>
          <label>Description:</label>
          <input type='text' description='description' placeholder='Add description' value={description} onChange={handleDescriptionValue}></input>
          <label>Image:</label>
          <input type='text' onChange={handleImageValue}></input>
          <button type="submit">Send</button>
        </form>
      </div>
      <Link to={'/'}>Back</Link>
    </>
  )
}

export default AddImage