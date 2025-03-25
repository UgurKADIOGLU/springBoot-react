import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import App from './App.jsx'
import { SingUp } from './pages/SingUp/index.jsx'
import "./styles.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SingUp/>
  </StrictMode>,
)
