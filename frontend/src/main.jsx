import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.scss"
import Calisan from './pages/Calisan/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calisan/>
  </StrictMode>,
)
