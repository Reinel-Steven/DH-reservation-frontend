import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReservationApp from './ReservationApp.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ReservationApp />
    </StrictMode>
  </BrowserRouter>
)
