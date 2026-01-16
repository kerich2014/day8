import { StrictMode } from 'react'
import Home from './components/screens/home/Home'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home /> 
  </StrictMode>,
)
