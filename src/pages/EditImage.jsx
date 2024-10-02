import logo1 from "../assets/logo.png";
import { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import React from 'react'
import { Link } from "react-router-dom";


function EditImage() {
const params = useParams()

  
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categoria, setCategoria] = useState('');
  const [isShowingDeleteCheck, setIsShowingDeleteCheck] = useState(false)

  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_SERVER_URL}/imagenes/${params.imageId}`)
    .then((response) => {
     console.log(response)
     setDescription(response.data.description || '')
     setImage(response.data.img || '')
     setCategoria(response.data.categoria || '')
    })
    .catch((error) => {
        console.log(error)
    })
 }, [params.imageId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    let updateImg = {
        description: description,
        img: image,
        categoria: categoria
    }

    try {
     await axios.put(`${import.meta.env.VITE_SERVER_URL}/imagenes/${params.imageId}`, updateImg)
     window.location.href = '/'
     
       
    } catch (error) {
        console.log(error)
    }
  }

  const handleNewImage = (e) => {
    e.preventDefault()
setImage(e.target.value) // + values?
  }

  const handleCategoriaValue = (e) => {
    e.preventDefault()
    setCategoria(e.target.value)
  }


  const deleteImage = () => {
   
     axios.delete(`${import.meta.env.VITE_SERVER_URL}/imagenes/${params.imageId}`)
        .then(() => {
            window.location.href = '/'
        })
    .catch ((error) => {
        console.log(error)
    })
};
  



  return (
    <>
     <Link to='/'>
        <img className='logoClickArte' src={logo1}></img>
        </Link>
            <div className="edicontainer">Edit Image</div>
            <form onSubmit={handleSubmit}>
                <div className="edigroup">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="edigroup">
                    <label>Image:</label>
                    <input
                        type="text"
                        id="image"
                        onChange={handleNewImage}
                    />
                </div>

                <div className="edigruop">
                    <label>Category:</label>
                    <input
                        type="text"
                        id="categoria"
                        placeholder='Add a Category'
                        onChange={handleCategoriaValue}
                    />
                </div>
               
                    <div className="edipreview">
                        <h3>Preview:</h3>
                        <img src={image} alt={description} style={{ width: '200px', height: 'auto' }} />
                    </div>
                    
            
                <button type="submit">Update Image</button>
            </form>
           <button onClick={() => setIsShowingDeleteCheck(true)}> Delete Image</button>

           {isShowingDeleteCheck && (
         <div>
          <p>Are you sure you want to delete this image?</p>
          <button onClick={deleteImage}>Si</button>
          <button onClick={() => setIsShowingDeleteCheck(false)}>No</button>
         
        </div>
      )}
    </>
  )
}

export default EditImage