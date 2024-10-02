import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import React from 'react'
import { useNavigate } from 'react-router-dom'



function EditImage({allData, setAllData}) {
const params = useParams()
//console.log(params)
   

    const navigate = useNavigate()

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categoria, setCategoria] = useState('');
  const [isShowingDeleteCheck, setIsShowingDeleteCheck] = useState(false)

  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_SERVER_URL}/imagenes/${params.imageId}`)
    .then((response) => {
     console.log(response)
     setDescription(response.data.description)
     setImage(response.data.img)
     setCategoria(response.data.categoria)
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

  /*function handleSubmit(e){
    e.preventDefault()

    setFilteredData(allData.filter((item) => {
      return (
        item.categoria &&
        item.categoria.toLowerCase().includes(search.toLowerCase())
      );
    }))

    setSearch('')

  } */


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
    <Navbar />
            <div>Edit Image</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="text"
                        id="image"
                        onChange={handleNewImage}
                    />
                </div>

                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        id="categoria"
                        placeholder='Add a Category'
                        onChange={handleCategoriaValue}
                    />
                </div>
               
                    <div>
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