import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.scss"

import { Egitim } from './pages/Egitim/Index.jsx'
import Calisan from './pages/Calisan/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Egitim/>
  </StrictMode>,
)
