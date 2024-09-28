import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'
import Details from "./pages/Details.jsx"
import AddImage from './pages/AddImage.jsx'
import NotFound from './pages/NotFound.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [allData, setAllData] = useState(null)
  const [comment, setComment] = useState(null)

  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {

      try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/imagenes`);
          console.log(response)
          setAllData(response.data)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
    getDataComment()
}, [])

const getDataComment = async () => {

    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/comentarios`);
        console.log(response)
        setComment(response.data)
    } catch (error) {
        console.log(error)
    }
}




  if (allData === null || comment === null) {
      return <p>Loading...</p>
  }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home allData={allData} setAllData={setAllData}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:detailsId" element={<Details allData={allData} setAllData={setAllData}
        comment={comment} setComment={setComment}/>} />
        <Route path="/addimage/:addimageId" element={<AddImage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App
