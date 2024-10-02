import { createRoot } from 'react-dom/client'
import { DataWrapper } from './context/Data.context.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DataWrapper>
    <App />
    </DataWrapper>
  </BrowserRouter>
)
