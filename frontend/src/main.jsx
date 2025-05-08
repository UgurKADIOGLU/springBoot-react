import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.scss"
import Ekipman from './pages/Ekipman'
import OlayRaporu from './pages/OlayRaporu'
import Calisan from './pages/Calisan'
import Muayene from './pages/Muayene'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Muayene/>
  </StrictMode>,
)
