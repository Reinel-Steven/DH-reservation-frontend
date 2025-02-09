
import './ReservationApp.css'
import { LayoutComponent } from './components/layoutComponent'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductosPage } from './pages/ProductosPage'
import { ProductPage } from './pages/ProductPage'
import { CreateProductPage } from './pages/Admin/CreateProductPage'

export const ReservationApp = () => {
  
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <LayoutComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<ProductosPage />} ></Route>
              <Route path="/categories" element={<ProductPage />} ></Route>
              <Route path="/" element={<Navigate to='/' />}  ></Route>
              <Route path="/create-product" element={<CreateProductPage />} ></Route>              
            </Routes>
          </div>
        </CartProvider>
      </ProductProvider>
    </>
  )
}
