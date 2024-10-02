import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'
import Details from "./pages/Details.jsx"
import AddImage from './pages/AddImage.jsx'
import NotFound from './pages/NotFound.jsx'
import EditImage from './pages/EditImage.jsx'
import { Navbar } from 'react-bootstrap'
import { DataWrapper } from './context/Data.context.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'





function App() {

  
  return (
    
    <div className='App'>
      <DataWrapper>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:detailsId" element={<Details/>} />
        <Route path="/details/edit/:imageId" element={<EditImage />} />
        <Route path="/addimage/:addimageId" element={<AddImage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </DataWrapper>
    </div>
    
  )
}
export default App
