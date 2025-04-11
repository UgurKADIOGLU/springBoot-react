import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.scss"
import { Egitim } from './pages/Egitim/Index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Egitim/>
  </StrictMode>,
)
