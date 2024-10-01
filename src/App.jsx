import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'
import Details from "./pages/Details.jsx"
import AddImage from './pages/AddImage.jsx'
import NotFound from './pages/NotFound.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditImage from './pages/EditImage.jsx'

function App() {
  const [allData, setAllData] = useState(null)


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


  if (allData === null) {
    return <p>Loading...</p>
  }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home allData={allData} setAllData={setAllData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:detailsId" element={<Details allData={allData} setAllData={setAllData} />} />
        <Route path="/details/edit/:imageId" element={<EditImage allData={allData} setAllData={setAllData}/>} />
        <Route path="/addimage/:addimageId" element={<AddImage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App
