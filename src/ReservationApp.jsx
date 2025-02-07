import { useState } from 'react'
import './ReservationApp.css'
import { LayoutComponent } from './components/layoutComponent'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductosPage } from './pages/ProductosPage'
import { CartPage } from './pages/CartPage'

function ReservationApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <LayoutComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<ProductosPage />} ></Route>
              <Route path="/categories" element={<CartPage />} ></Route>
              <Route path="/" element={<Navigate to='/' />}  ></Route>
            </Routes>
          </div>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default ReservationApp
