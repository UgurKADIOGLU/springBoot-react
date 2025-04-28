import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.scss"
import Ekipman from './pages/Ekipman'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ekipman/>
  </StrictMode>,
)
