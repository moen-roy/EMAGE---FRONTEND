import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/index.css'
import CaringSection from './components/section/CaringSection'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaringSection />
  </StrictMode>,
)
