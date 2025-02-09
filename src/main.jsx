import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ReservationApp } from './ReservationApp'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ReservationApp />
    </StrictMode>
  </BrowserRouter>
)
