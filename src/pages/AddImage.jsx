import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'


function AddImage({allData, setAllData}) {
const params = useParams()
console.log(params)


  return (
    <>
    <div>
     <Navbar/>
     </div>
    <div>Add a new Image</div>
    </>
  )
}

export default AddImage