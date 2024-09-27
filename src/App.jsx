import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'
import Details from "./pages/Details.jsx"
import AddImage from './pages/AddImage.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:detailsId" element={<Details />} />
        <Route path="/addimage/:addimageId" element={<AddImage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App
