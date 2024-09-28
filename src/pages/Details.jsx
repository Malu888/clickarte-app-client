import React from 'react'
import { useParams } from 'react-router-dom'



function Details({ allData, setAllData, comment, setComment }) {
  
const {detailsId} = useParams()

console.log(detailsId)

const imgInformation = allData.find((eachElement) => eachElement.imagenid === detailsId)
const commentInformation = comment.find((eachElement) => eachElement.imagenid === detailsId)


  
  return (
    <div>
      <p>Details Page</p>
      <img src={imgInformation.img} alt={`imagen ${imgInformation.imagenid}`} style={{ width: '100px' }} />
      <p>Categoria:{imgInformation.categoria}</p>
      <p>Location: {imgInformation.location}</p>
      <p>Autor: {commentInformation.autor}</p>
      <p>Rating: {commentInformation.rating}</p>
      <p>Contenido: {commentInformation.contenido}</p>


      
      
    </div>
  )
}

export default Details